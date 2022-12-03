const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const hash = bcrypt.hash(password, 12);
  return hash;
};

const checkPassword = (loggedPassword, reqPassword) => {
  const access = bcrypt.compare(reqPassword, loggedPassword);
  return access;
};

const bcryptPassword = {
  hashPassword,
  checkPassword,
};
module.exports = bcryptPassword;
