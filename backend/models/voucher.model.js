import mongoose from 'mongoose';
import modelOptions from './model.options.js';

const VoucherSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, modelOptions);

const voucherModel = mongoose.model('Voucher', VoucherSchema);

export default voucherModel;