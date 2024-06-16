import express from "express";
// var router = express.Router();
import commentsController from "../controllers/comment.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";
// /comments/....
// blog
const router = express.Router({ mergeParams: true });

router.get("/blog/:blogId/", commentsController.getComments);

router.post("/blog/edit", commentsController.updateComment);

router.post("/blog", commentsController.addComment);

// post
router.get("/post/:postId", commentsController.getPostComments);

router.post("/post/edit", commentsController.updatePostComment);

router.post("/post", tokenMiddleware.authenticate, commentsController.addPostComment);

router.post(
  "/post/:postId/comment/:commentId/like",
  tokenMiddleware.authenticate,
  commentsController.likePostComment
);

router.post(
  "/post/:postId/comment/:commentId/unlike",
  tokenMiddleware.authenticate,
  commentsController.unlikePostComment
);

export default router;
