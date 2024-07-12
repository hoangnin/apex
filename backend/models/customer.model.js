import mongoose, { Schema } from 'mongoose';
import modelOptions from './model.options.js';

const customerSchema = Schema({
     account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Account',
          required: true,
          unique: true
     },
     accumulated_points: {
          type: Number,
          default: 0
     },
     liked_posts: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post',
     }],
     // vouchers: [{
     //      type: mongoose.Schema.Types.ObjectId,
     //      ref: 'Voucher', 
     //      unique: true
     // }],
}, modelOptions);

const customerModel = mongoose.model("Customer", customerSchema);

export default customerModel;