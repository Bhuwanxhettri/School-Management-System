//fields
const serverError = {
  msg: "Server Error",
  fields: "",
  status: 500,
};

const userNotFound = {
  msg: "User Not Found",
  fields: "",
  status: 400,
};
const incorrectPassword = {
  msg: "Unmatch data",
  fields: { password: "Incorrect password" },
  status: 422,
};
const deleteSuccess = {
  msg: "Delete Success",
  status: 200,
};
const requiredFields = {
  msg: "Please fill those fields .",
  fields: "",
  status: 422,
};
const haveNoAccess = {
  msg: "You do not have access .",
  status: 401,
};
const messages = {
  serverError,
  userNotFound,
  incorrectPassword,
  deleteSuccess,
  requiredFields,
  haveNoAccess,
};
module.exports = messages;
