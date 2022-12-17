const {
  getAllteacher,
  getteacherById,
  count,
  deleteById,
  getteacherByUsername,
  getteacherByEmail,
  createTeacher,
  saveToken,
  updateTeacherInfo,
} = require("../../DB/queries/teacher");

const CreateTeacher = async (req, res) => {
  try {
    const { user_name, password, role,email,faculty,token} = req.body;
    const result = await createTeacher({ user_name, password,role,email,faculty,token});
    res.json(result);
  } catch (err) {
    res.status(409)
    res.json(err);
  }
};
const UpdateTeacher = async(req,res)=>{
    try{
        const getToken = req.header('Authorization');
     const result = await updateTeacherInfo(req.body);
     res.json(result);
    }
    catch(err){
        res.json(err)

    }
}
const teacherController = { CreateTeacher,UpdateTeacher };
module.exports = teacherController;
