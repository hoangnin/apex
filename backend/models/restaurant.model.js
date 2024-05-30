import mongoose, { Schema } from "mongoose";
// import { PHOTOGRAPHER_STATUS } from '../configs/enum.config.js';

const RestaurantSchema = new Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    
  },
  description: {
    type: String,
    default: ""
  },
  openingHours: {
    type: String,
    
  },
  closingHours: {
    type: String,
    
  },
  menu: [{
    dishName: String,
    price: Number
  }]
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;