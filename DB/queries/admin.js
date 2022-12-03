const adminModel =require('../models/Admin')

const getAllAdmins= async () => {
    const admins = await adminModel.find().sort({ createdAt: -1 })
    return admins;
}

const getAdminByEmail = async(email)=>{
    const admin = await adminModel.find({email})
    return admin;
}

const createAdmin = async (payload) => {
   const admin = await adminModel.create(payload);
    return admin;   
};



const adminService = {
    getAllAdmins,
    getAdminByEmail,
    createAdmin
}
module.exports = adminService;