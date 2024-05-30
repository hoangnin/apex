import express from 'express';
import multer from 'multer';
import uploadImageController from '../controllers/uploadImage.controller.js'
const router = express.Router({ mergeParams: true });

const imageFileFilter = (req, file, cb) => {
     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('You can upload only image files!'), false);
     }
     cb(null, true);
};
const upload = multer({ storage: multer.memoryStorage(), fileFilter: imageFileFilter });

router.post("/", upload.array('images', 5), uploadImageController.uploadMultiImages);

router.post("/avatar", upload.single('avatar'), uploadImageController.uploadAvatar);

router.delete("/", uploadImageController.removeFileByUrl);



export default router;

