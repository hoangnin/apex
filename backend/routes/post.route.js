import express from 'express';
import postController from '../controllers/post.controller.js';

// /posts/....
const router = express.Router({ mergeParams: true });

router.get('/', postController.getPosts)

router.post('/', postController.createNewPost);

router.get('/:postId/', postController.getPost)

router.post('/edit', postController.updatePost);



export default router;
