import express from 'express';
import blogController from '../controllers/blog.controller.js';

const router = express.Router({ mergeParams: true });

router.get('/', blogController.getBlogs)

router.get('/:blogId/', blogController.getBlog)

router.post('/edit', blogController.updateBlog);

router.post('/', blogController.createNewBlog);

export default router;