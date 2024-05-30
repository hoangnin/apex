import { get } from "mongoose";
import responseHandler from "../handlers/response.handler.js";
import postModel from "../models/post.model.js";

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    responseHandler.ok(res, posts);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

const getPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.postId);
    responseHandler.ok(res, post);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

const createNewPost = async (req, res) => {
  try {
    const post = new postModel({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      author: req.body.authorId, // req.account.id
    });

    await post.save();

    responseHandler.ok(res, {
      message: 'Post created successfully',
      post: post,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.body.postId);
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    }

    post.title = req.body.title;
    post.description = req.body.description;
    post.content = req.body.content;
    await post.save();

    responseHandler.ok(res, {
      message: 'Post updated successfully',
      post: post,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

export default {
  getPosts,
  getPost,
  createNewPost,
  updatePost,
}