import { get } from "mongoose";
import responseHandler from "../handlers/response.handler.js";
import blogModel from "../models/blog.model.js";


const createNewBlog = async (req, res) => {
  try {
    console.log("CustomerId: ", req.body.account.id);
    // console.log("CustomerId12: ", req.account.id);
    // const CustomerId = req.account.id;
     const CustomerId =  req.body.account.id;
    

    const blog = new blogModel({
      customer: CustomerId, 
      ...req.body,
    });

    await blog.save();

    responseHandler.created(res, { ...blog._doc });
  } catch (error) {
    console.log("Error in create blog: ", error.message);
    responseHandler.error(res);
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find().populate("customer");
    responseHandler.ok(res, blogs);
  } catch (error) {
    console.error(error);
    console.log("Error in get blogs: ", error.message);
    responseHandler.error(res);
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.blogId);
    responseHandler.ok(res, blog);
  } catch (error) {
    console.error(error);
    console.log("Error in get blog: ", error.message);
    responseHandler.error(res);
  }
}

const updateBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById
    (req.body.blogId);
    if (!blog) {
      return responseHandler.notFound(res);
    }
    blog.set(req.body);
    await blog.save();
    responseHandler.ok(res, blog);
  }
  catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}
export default {
  createNewBlog,
  getBlogs,
  getBlog,
  updateBlog,
};