const Restaurent = require('../models/Restaurent');
const User = require('../models/User');

const getUser = async (query) => {
  try {
    const user = await User.findOne(query).select('+password');
    if (!user || !user.isActive) {
      throw Error('User not found or not active');
    }

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getAndEditUser = async (query, newData) => {
  try {
    const user = await User.findOneAndUpdate(query, newData, {
      new: true,
      runValidators: true
    });

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getSingleUserService = async (query) => {
  try {
    const user = await User.findOne(query).select('+password');
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getallRestaurents = async (query) => {
  try {
    const users = await Restaurent.find(query).find({ role: ['member', 'staff'] });
    return users;
  } catch (err) {
    throw Error(err);
  }
};

const getActiveUsers = async (query) => {
  try {
    const user = await User.find(query).find({ role: ['member', 'staff'] });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getSingleRastaurantService = async (query) => {
  try {
    const user = await Restaurent.findOne(query).select('+password');
    return user;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  getUser,
  getallRestaurents,
  getActiveUsers,
  getSingleUserService,
  getAndEditUser,
  getSingleRastaurantService
};
