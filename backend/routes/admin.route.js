import express from 'express';
import adminController from '../controllers/admin.controller.js';
import tokenMiddleware from '../middlewares/token.middleware.js';

// /admin/.....
const router = express.Router({ mergeParams: true });

router.post('/activeRestaurant/:restaurantId', tokenMiddleware.authenticate, tokenMiddleware.adminAuthorize, adminController.activeRestaurant);

router.post('/blockRestaurant/:restaurantId', tokenMiddleware.authenticate, tokenMiddleware.adminAuthorize, adminController.blockRestaurant);




export default router;