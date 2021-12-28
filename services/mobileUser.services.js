const mobileuser = require('../models/mobileModels/mobileauthModel');

const getUser = async (query) => {
  try {
    const user = await mobileuser.findOne(query)
    // .select('+password');
    if (!user) {
      throw Error('User not found or not active');
    }
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getAndEditUser = async (query, newData) => {
  try {
    const user = await mobileuser.findOneAndUpdate(query, newData, {
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
    const user = await mobileuser.findOne(query).select('+password');
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getUsers = async (query) => {
  try {
    const users = await mobileuser.find(query).find({ role: ['member', 'staff'] });
    return users;
  } catch (err) {
    throw Error(err);
  }
};

const getActiveUsers = async (query) => {
  try {
    const user = await mobileuser.find(query).find({ role: ['member', 'staff'] });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  getUser,
  getUsers,
  getActiveUsers,
  getSingleUserService,
  getAndEditUser
};
