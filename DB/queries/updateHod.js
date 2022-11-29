const { findOneAndUpdate } = require("../models/Admin");
const adminModel = require("../models/Admin");

const updateHod = async (payload) => {
  try {
    const updateHodDB = adminModel.findOneAndUpdate(
      payload.user_name,
      payload,
      {
        new: true,
      }
    );
    return updateHodDB;
  } catch (err) {
    return err;
  }
};
module.exports = {
  updateHod,
};
