// const Comment = require('../models/commentsModel')
import responseHandler from "../handlers/response.handler.js";
import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import Customer from "../models/customer.model.js";

const addComment = (req, res) => {
    try {
  let data = {
    author: {
      id: req.body.id,
      name: req.body.name,
    },
    commentText: req.body.commentText,
    blogId: req.body.blogId,
  };
  if ("parentId" in req.body) {
    data.parentId = req.body.parentId;
    
  }
  if ("depth" in req.body) {
    data.depth = req.body.depth;
  }
  const comment = new Comment(data);
  comment
    .save() 
    .then((comment) =>
        responseHandler.ok(res, {  
            comment: comment,
        })
    //   res.json({
    //     comment: comment, 
    //   })
    ) 
}catch(error) {
    console.error(error);
    responseHandler.error(res);
  }
};

const updateComment = (req, res) => {
  try {
    let comment = req.body;
    Comment.updateOne(
      { _id: comment.id },
      { $set: { commentText: comment.commentText } }
    )
      .exec()
      .then((result) =>
        responseHandler.ok(res, {
            message: "Comment Updated",
            comment: comment,
            })
        // res.status(200).json({
        //   message: "Comment Updated",
        //   comment: comment,
        // })
      );
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

const getComments = (req, res) => {
  try {
    Comment.find({ postId: req.params.blogId })
      .sort({ postedDate: 1 })
      .lean()
      .exec()
      .then((comments) => {
        let rec = (comment, threads) => {
          for (var thread in threads) {
            let value = threads[thread];

            if (thread.toString() === comment.parentId.toString()) {
              value.children[comment._id] = comment;
              return;
            }

            if (value.children) {
              rec(comment, value.children);
            }
          }
        };
        let threads = {},
          comment;
        for (let i = 0; i < comments.length; i++) {
          comment = comments[i];
          comment["children"] = {};
          let parentId = comment.parentId;
          if (!parentId) {
            threads[comment._id] = comment;
            continue;
          }
          rec(comment, threads);
        }
        // res.json({
        //     'count': comments.length,
        //     'comments': threads
        // })
        responseHandler.ok(res, {
          count: comments.length,
          comments: threads,
        });
      });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

const getPostComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('comments');
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    }

    const comments = post.comments.sort((a, b) => a.postedDate - b.postedDate);

    let rec = (comment, threads) => {
      for (var thread in threads) {
        let value = threads[thread];

        if (thread.toString() === comment.parentId.toString()) {
          value.children[comment._id] = comment;
          return;
        }

        if (value.children) {
          rec(comment, value.children);
        }
      }
    };

    let threads = {},
      comment;
    for (let i = 0; i < comments.length; i++) {
      comment = comments[i];
      comment["children"] = {};
      let parentId = comment.parentId;
      if (!parentId) {
        threads[comment._id] = comment;
        continue;
      }
      rec(comment, threads);
    }

    responseHandler.ok(res, {
      count: comments.length,
      comments: threads,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

const addPostComment = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    }

    const comment = {
      content: req.body.content,
      created_by: req.account.id, 
      rating: req.body.rating,
    };

    post.comments.push(comment);
    await post.save();
    const customer = await Customer.findOne({ account: req.account.id });
    if (customer){
      customer.accumulated_points += 1;
      await customer.save();
    }

    responseHandler.ok(res, {
      message: 'Comment added successfully',
      comment: comment,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
  
const updatePostComment = async (req, res) => {
  try {
    const post = await Post.findById(req.body.postId);
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    } 

    const comment = post.comments.id(req.body.commentId);
    if (!comment) {
      return responseHandler.error(res, 'Comment not found', 404);
    }

    comment.content = req.body.content;
    comment.rating = req.body.rating;
    await post.save();

    responseHandler.ok(res, {
      message: 'Comment updated successfully',
      comment: comment,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
const likePostComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    }

    const comment = post.comments.id(req.params.commentId);
    if (!comment) {
      return responseHandler.error(res, 'Comment not found', 404);
    }

    comment.total_liked += 1;
    await post.save();

    responseHandler.ok(res, {
      message: 'Comment liked successfully',
      comment: comment,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
const unlikePostComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return responseHandler.error(res, 'Post not found', 404);
    }

    const comment = post.comments.id(req.params.commentId);
    if (!comment) {
      return responseHandler.error(res, 'Comment not found', 404);
    }

    comment.total_liked -= 1;
    await post.save();

    responseHandler.ok(res, {
      message: 'Comment unliked successfully',
      comment: comment,
    });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}
export default {
  addComment,
  updateComment,
  getComments,
  getPostComments,
  addPostComment,
  updatePostComment,
  likePostComment,
  unlikePostComment,
};
