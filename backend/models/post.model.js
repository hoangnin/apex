import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";



const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  total_liked: {
    type: Number,
    default: 0,
  },
});


const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    content: [{
      image: String,
      descriptions: String,
    }],
    comments: [
      CommentSchema
    ],
    
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  modelOptions
);

export default mongoose.model("Post", postSchema);
