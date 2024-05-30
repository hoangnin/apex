import mongoose from 'mongoose';
import modelOptions from './model.options.js';
import crypto from 'crypto';
import { ROLES_LIST } from '../config/enum.config.js';
// import customerModel from './customer.model.js';
// import photographerModel from './photographer.model.js';

const accountSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
          unique: true
     },
     displayName: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true,
          select: false
     },
     email: {
          type: String,
          required: true
     },
     avatar: {
          type: String,
          default: "",
          require: true
     },
     phoneNumber: {
          type: String,
          required: true
     },
     salt: {
          type: String,
          required: true,
          select: false
     },
     role: {
          type: String,
          required: true,
          default: ROLES_LIST.customer,
          enum: ROLES_LIST
     }
}, modelOptions);

accountSchema.methods.setPassword = function (password) {
     this.salt = crypto.randomBytes(16).toString('hex');
     this.password = this.hashPassword(password);
};

accountSchema.methods.validatePassword = function (password) {
     return this.password === this.hashPassword(password, this.salt);
};

accountSchema.methods.hashPassword = function (password) {

     return crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString('hex');
};

// accountSchema.post('save', async (doc, next) => {
//      if (doc.role && doc.role === ROLES_LIST.customer) {
//           try {
//                const customer = new customerModel({ account: doc._id });
//                await customer.save();
//                next();
//           } catch (error) {
//                next(error);
//           }
//      }

//      if (doc.role && doc.role === ROLES_LIST.photographer) {
//           try {
//                const photographer = new photographerModel({ account: doc._id });
//                await photographer.save();
//                next();
//           } catch (error) {
//                next(error);
//           }
//      }
// })

const accountModel = mongoose.model("Account", accountSchema);

export default accountModel;