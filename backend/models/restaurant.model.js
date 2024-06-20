import mongoose, { Schema } from "mongoose";
// import { PHOTOGRAPHER_STATUS } from '../configs/enum.config.js';

const RestaurantSchema = new Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  openTime: {
    type: String,
    required: true,
  },
  closeTime: {
    type: String,
    required: true,
  },
  restaurantStyle: {
    type: String,
    required: true,
  },
  priceRange: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  socialMedia: {
    website: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
  },
  description: {
    type: String,
    default: "",
  },
  menu: [
    {
      dishName: String,
      price: Number,
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
