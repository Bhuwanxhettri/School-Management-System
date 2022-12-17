const studentModel = require("../models/Students");


const createStudent = async (payload) => {
  const student = await studentModel.create(payload);
  return student;
};
const saveToken = async(payload)=>{
const token = await studentModel.findOneAndUpdate(payload.user_name,payload.token,{
  new:true,
})
return token;
}
const getAllStudent = async () => {
  const students = await studentModel.find().sort({ createdAt: -1 });
  return students;
};
const getStudentById = async (id) => {
  const student = await studentModel.findById(id);
  return student;
};
const getStudentByUsername = async (user_name) => {
  const student = await studentModel.findOne({ user_name: user_name });
  return student;
};
const getStudentByEmail = async (email) => {
  const student = await studentModel.findOne({ email: email });
  return student;
};


const deleteById = async (id) => {
  const removestudent = await studentModel.findByIdAndDelete(id);
  return removestudent;
};
const count = async () => {
  return (total = await studentModel.count());
};
const studentService = {
  getAllStudent,
  getStudentById,
  count,
  deleteById,
  getStudentByUsername,
  getStudentByEmail,
  createStudent,
  saveToken
};
module.exports = studentService;
