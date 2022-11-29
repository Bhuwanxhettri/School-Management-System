const adminModel =require('../../models/Admin')

const getAllAdmins= async () => {
    const admins = await adminModel.find().sort({ createdAt: -1 })
    return admins;
}

const getAdminByEmail = async(email)=>{
    const admin = await adminModel.find({email})
    return admin;
}

const createAdmin = async (payload) => {
   const addAdminDB = await adminModel.create({
            user_name: payload.user_name,
            password: payload.password,
            role: payload.role,
          });
    return addAdminDB;   
};



const adminService = {
    getAllAdmins,
    getAdminByEmail,
    createAdmin
}
module.exports = adminService;