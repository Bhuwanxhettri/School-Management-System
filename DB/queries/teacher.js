const e = require("cors");
const { hashPassword } = require("../../const/helper/bycript");
const teacherModel = require("../models/Teacher");

const createTeacher = async (payload) => {
  try {
    payload.password = await hashPassword(payload.password);
    const teacher = await teacherModel.create(payload);
    if (teacher) {
      return teacher;
    }
  } catch (err) {
    return err;
  }
};
const saveToken = async (payload) => {
  const token = await teacherModel.findOneAndUpdate(
    payload.user_name,
    payload.token,
    {
      new: true,
    }
  );
  return token;
};
const getAllteacher = async () => {
  const teachers = await teacherModel.find().sort({ createdAt: -1 });
  return teachers;
};
const updateTeacherInfo = async (payload) => {
  try {
    const filter = { token: payload.token };
    const update = {
      gender: payload.gender,
      address: payload.address,
      phone_number: payload.phone_number,
      $push: {
        avatar: { public_id: "test", url: "test" },
      },
      active: 1,
      $push:{
        qualification:payload.qualification
      } 
    };
    const teacher = await teacherModel.findOneAndUpdate(filter, update);
    return teacher;
  } catch (err) {
    return err;
  }
};
const getteacherById = async (id) => {
  const teacher = await teacherModel.findById(id);
  return teacher;
};
const getteacherByUsername = async (user_name) => {
  const teacher = await teacherModel.findOne({ user_name: user_name });
  return teacher;
};
const getteacherByEmail = async (email) => {
  const teacher = await teacherModel.findOne({ email: email });
  return teacher;
};

const deleteById = async (id) => {
  const removeteacher = await teacherModel.findByIdAndDelete(id);
  return removeteacher;
};
const count = async () => {
  return (total = await teacherModel.count());
};
const teacherService = {
  getAllteacher,
  getteacherById,
  count,
  deleteById,
  getteacherByUsername,
  getteacherByEmail,
  createTeacher,
  saveToken,
  updateTeacherInfo,
};
module.exports = teacherService;
