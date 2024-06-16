import expess from 'express';
import voucherController from '../controllers/voucher.controller.js';
import tokenMiddleware from '../middlewares/token.middleware.js';

// /vouchers
const router = expess.Router({mergeParams: true});

router.post('/', tokenMiddleware.authenticate, voucherController.createVoucher);

// New route for converting points to a voucher
router.post('/convert-points', tokenMiddleware.authenticate, voucherController.convertPointsToVoucher);


export default router;