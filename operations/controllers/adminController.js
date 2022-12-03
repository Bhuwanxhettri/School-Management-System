const { createAdmin } = require("../../DB/queries/admin");
const { hashPassword } = require("../../const/helper/bycript");
const { updateHod } = require("../../DB/queries/updateHod");
const create = async (req, res) => {
  try {
    const { user_name, password, role } = req.body;
    const adminInfo = {
      user_name: user_name,
      password: hashPassword(password),
      role: role,
    };
    const result = await createAdmin(adminInfo);
    res.json(result);
  } catch (err) {
    res.status(409);
    res.json(err);
  }
};

const editHOD = async (req, res) => {
  try {
    const { user_name } = req.params;
    const { name, phone_number, address, department, password, email } =
      req.body;
    const payload = {
      user_name: user_name,
      name: name,
      phone_number: phone_number,
      address: address,
      department: department,
      email: email,
      password: hashPassword(password),
    };
    const result = await updateHod(payload);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { create, editHOD };
