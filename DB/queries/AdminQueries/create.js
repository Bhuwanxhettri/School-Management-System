const mongoose = require("mongoose");
const adminModel = require("../../models/Admin");

const addAdminDB = async (payload) => {
  try {
    const addAdminDB = await adminModel.create({
      user_name: payload.user_name,
      password: payload.password,
      role: payload.role,
    });
    return addAdminDB;
  } catch (err) {
    console.log(err);
    return err;
  }
};
module.exports = {
  addAdminDB,
};
