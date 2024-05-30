const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

// Restaurant Schema
const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  cuisine: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

// Review Schema
const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = { User, Restaurant, Review };