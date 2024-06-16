import express from 'express';
import { body } from 'express-validator';
import accountController from '../controllers/account.controller.js';
import accountModel from '../models/account.model.js';
import tokenMiddleware from '../middlewares/token.middleware.js';
import requestHandler from '../handlers/request.handler.js';
// import favoriteController from '../controllers/favorite.controller.js';

const router = express.Router({ mergeParams: true });

router.post(
     "/signup",
     body("username")
          .exists().withMessage("Username is required !")
          .isLength({ min: 8 }).withMessage("Username must be at least 8 characters !")
          .custom(async value => {
               const existed = await accountModel.findOne({ username: value });
               if (existed) return Promise.reject("Username already existed !");
          }),
     body("displayName")
          .exists().withMessage("Display name is required !")
          .isLength({ min: 8 }).withMessage("Display name must be at least 8 characters !"),
     body("phoneNumber")
          .exists().withMessage("Phone number is required")
          .custom(async value => {
               const phoneRegex = /^\d{10}$/;
               if (!phoneRegex.test(value)) {
                    return Promise.reject('Invalid phone number');
               }
               const existed = await accountModel.findOne({ phoneNumber: value });
               if (existed) return Promise.reject("This phone number is registered");
          }),
     body('email')
          .exists().withMessage("Email is required")
          .isEmail().withMessage('Invalid email address')
          .custom(async value => {
               const existed = await accountModel.findOne({ email: value });
               if (existed) return Promise.reject("This email is registered");
          }),
     body("password")
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be at least 8 characters !"),
     body('confirmPassword')
          .exists().withMessage("Confirm Password is required !")
          .isLength({ min: 8 }).withMessage("Confirm password must be at least 8 characters !")
          .custom((value, { req }) => {
               if (value !== req.body.password) throw new Error("Confirm password dose not match!")
               return true;
          }),
     requestHandler.validate,
     accountController.signup,
);


router.post(
     "/login",
     body("username")
          .exists().withMessage("Username is required !")
          .isLength({ min: 8 }).withMessage("Username must be at least 8 characters !"),
     body("password")
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be at least 8 characters !"),
     requestHandler.validate,
     accountController.login,
     
);
router.post(
     "/change-password",
     body("username")
          .exists().withMessage("Username is required !")
          .isLength({ min: 8 }).withMessage("Username must be at least 8 characters !"),
     body("password")
          .exists().withMessage("Password is required !")
          .isLength({ min: 8 }).withMessage("Password must be at least 8 characters !"),
     body("newPassword")
          .exists().withMessage("New password is required !")
          .isLength({ min: 8 }).withMessage("New password must be at least 8 characters !"),
     body("confirmNewPassword")
          .exists().withMessage("Confirm new password is required !")
          .isLength({ min: 8 }).withMessage("Confirm new password must be at least 8 characters !")
          .custom((value, { req }) => {
               if (value !== req.body.newPassword) throw new Error("Confirm new password dose not match!")
               return true;
          }),
     requestHandler.validate,
     accountController.changePassword,
)

// router.put("/update-password",
//      tokenMiddleware.authenticate,
//      body('password')
//           .exists().withMessage("Password is required !")
//           .isLength({ min: 8 }).withMessage("Password must be greater then 8 characters !"),
//      body('newPassword')
//           .exists().withMessage("New password is required !")
//           .isLength({ min: 8 }).withMessage("New Password must be greater then 8 characters !"),
//      body('confirmNewPassword')
//           .exists().withMessage("Confirm new password is required !")
//           .isLength({ min: 8 }).withMessage("Confirm new password must be greater then 8 characters !")
//           .custom((value, { req }) => {
//                if (value !== req.body.newPassword) throw new Error("Confirm new password not match !")
//                return true;
//           }),
//      requestHandler.validate,
//      accountController.updatePassword
// );

// router.get("/info",
//      tokenMiddleware.authenticate,
//      accountController.getInfo
// );

router.put("/update-info",
     tokenMiddleware.authenticate,
     accountController.updateInfo
);


// router.get(
//      "/favorites",
//      tokenMiddleware.authenticate,
//      favoriteController.getFavoritesOfUser
// );

// router.post(
//      "/favorites",
//      tokenMiddleware.authenticate,
//      requestHandler.validate,
//      favoriteController.addFavorite
// );

// router.delete(
//      "/favorites/:favoriteId",
//      tokenMiddleware.authenticate,
//      favoriteController.removeFavorite
// );


export default router;



