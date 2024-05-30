import mongoose, { Schema } from 'mongoose';
import modelOptions from './model.options.js';

const employeeSchema = Schema({
      account: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true,
            unique: true
      },
      locked: {
            type: Boolean,
            default: false
      },
    }, modelOptions);

const employeeModel = mongoose.model("Employee", employeeSchema);

export default employeeModel;