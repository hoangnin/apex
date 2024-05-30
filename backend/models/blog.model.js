import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";


const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [String], // Array of image URLs
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    votesUp: {
      type: Number,
      default: 0,
    },
    votesDown: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
  modelOptions
);

// module.exports = mongoose.model("Blog", BlogSchema);
const blogModel = mongoose.model("Blog", BlogSchema);

export default blogModel;
