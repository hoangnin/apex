import mongoose from "mongoose";
import modelOptions from "./model.options.js";
var commentSchema = mongoose.Schema({
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: true
    },
    depth: {
        type: Number,
        default: 1
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments',
        default: null
    },
    postedDate: {type: Date, default: Date.now},
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Customer',
          required: true
        },
        name: String,
    },
    commentText: {
        type: String,
        required: true
    }
}, {timestamps: true}
, modelOptions);

const commentsModel = mongoose.model('Comments', commentSchema);

export default commentsModel;