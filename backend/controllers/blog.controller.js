import { get } from "mongoose";
import responseHandler from "../handlers/response.handler.js";
import blogModel from "../models/blog.model.js";
import accountModel from "../models/account.model.js";

const createNewBlog = async (req, res) => {
  try {
    console.log("CustomerId: ", req.body.account.id);
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
    const blogs = await blogModel.find();
    const convertedBlogs = await convertBlog(blogs); 
    responseHandler.ok(res, convertedBlogs);
  } catch (error) {
    console.error(error);
    console.log("Error in get blogs: ", error.message);
    responseHandler.error(res);
  }
};

const convertBlog = async (blogs) => { 
  try {
    const convertedBlogs = await Promise.all(blogs.map(async (blog) => {
      const customer = await accountModel.findById(blog.customer);
      console.log("Customer: ", customer);
      return {
        ...blog._doc,
        customer: customer ? customer._doc : null,
      };
    }));
    return convertedBlogs; 
  } catch (error) {
    console.error("Error converting blogs: ", error.message);
    throw error; 
  }
};


const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.blogId);
    if (!blog) {
      return responseHandler.notFound(res);
    }
    const customer = await accountModel.findById(blog.customer);
    if (!customer) {
      return responseHandler.notFound(res, "Customer not found");
    }
    const blogWithCustomer = {
      ...blog.toObject(), 
      customer: customer.toObject() 
    };

    responseHandler.ok(res, blogWithCustomer);
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