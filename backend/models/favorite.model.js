import mongoose, { Schema }  from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model(
   "Favorite",
   mongoose.Schema({
      account: {
         type: Schema.Types.ObjectId,
         ref: "Customer",
         require: true
      },
      photo: {
         type: Schema.Types.ObjectId,
         ref: "Post",
         require: true
      }
   }, modelOptions)
);
