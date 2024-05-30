import { get } from "mongoose";
import responseHandler from "../handlers/response.handler.js";
import postModel from "../models/post.model.js";
import reviewModel from "../models/review.model.js";
const getPosts = async (req, res) => {
  try {
    let posts = await postModel.find().populate('author', 'username _id avatar');
    posts = posts.map(post => ({
      ...post._doc,
      commentCount: post.comments.length
    }));
    responseHandler.ok(res, posts);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

const getPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.postId).populate('author', 'username _id avatar');
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
const getPostReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find({ restaurant: req.params.restaurantId }).populate('employee', 'username _id avatar');
    if (!reviews) {
      return responseHandler.error(res, 'No reviews found for this restaurant', 404);
    }

    responseHandler.ok(res, reviews);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
const createPostReview = async (req, res) => {
  try {
    const { restaurantId, employeeId, cleanlinessRating, cleanlinessComment, serviceRating, serviceComment } = req.body;

    const review = new reviewModel({
      restaurant: restaurantId,
      employee: employeeId,
      rating: (cleanlinessRating + serviceRating) / 2,
      content: {
        cleanliness: {
          rating: cleanlinessRating,
          comment: cleanlinessComment,
        },
        service: {
          rating: serviceRating,
          comment: serviceComment,
        },
      },
    });

    await review.save();

    responseHandler.ok(res, {
      message: 'Review created successfully',
      review: review,
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
  getPostReviews,
  createPostReview
}