import express from 'express';
// var router = express.Router();
import commentsController from '../controllers/comment.controller.js';

// /comments/....
// blog
const router = express.Router({ mergeParams: true });

router.get('/blog/:blogId/', commentsController.getComments)

router.post('/blog/edit', commentsController.updateComment);

router.post('/blog/', commentsController.addComment);

// post
router.get('/post/:postId/', commentsController.getPostComments)

router.post('/post/edit', commentsController.updatePostComment);

router.post('/post', commentsController.addPostComment);



export default router;