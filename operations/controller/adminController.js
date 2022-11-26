const { addAdminDB } = require("../../DB/queries/AdminQueries/create");
const {handlePassword} = require("../../const/helper/passwordHash");
const createAdmin = async (req, res) => {
  try {
    const { user_name, password, role } = req.body;
    const adminCreate = {
      user_name: user_name,
      password: handlePassword(password),
      role: role,
    };
    
    const result = await addAdminDB(adminCreate);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

module.exports = createAdmin;
