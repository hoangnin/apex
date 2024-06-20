import express from 'express';
import accountRouter from './account.route.js';
import uploadRouter from './upload.route.js';
import commentRouter from './comment.route.js';
import blogRouter from './blog.route.js';
import postRouter from './post.route.js';
import voucherRouter from './voucher.route.js';
import adminRouter from './admin.route.js';
const router = express.Router();

router.use("/accounts", accountRouter);
 
router.use("/upload-image", uploadRouter);

router.use("/comments", commentRouter);

router.use("/blogs", blogRouter);

router.use("/posts", postRouter);

router.use("/vouchers", voucherRouter);

router.use("/admin", adminRouter);

export default router;