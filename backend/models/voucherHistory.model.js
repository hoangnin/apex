import mongoose from 'mongoose';

const VoucherUsageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  voucherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voucher',
    required: true,
  },
  usageDate: {
    type: Date,
    default: Date.now,
  },
}, modelOptions);

export default mongoose.model('VoucherUsage', VoucherUsageSchema);