const groupModel = require("../models/Group");

const createGroup = async (payload) => {
  try {
    // payload.admin=
    const group = await groupModel.create(payload);
    return group;
  } catch (err) {}
};

const getGroup = async(id)=>{
    try{
      const group = await groupModel.find({$or:[{student: id},{teacher:id},{admin:id}]}).populate('teacher');  
    return group
    }
    catch(err){

    }
}

const updateGroup = async (payload) => {
  try {
    const group = groupModel.findByIdAndUpdate(payload.id, payload);
    return group;
  } catch (err) {}
};
const groupServices = {
  createGroup,
  updateGroup,
  getGroup,
};
module.exports = groupServices;
