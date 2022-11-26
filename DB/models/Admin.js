module.exports = (sequelize, Sequelize) => {
  
    const Admin = sequelize.define("admin", {
    
      fullname: {
         type: Sequelize.STRING
      },
      address: {
         type: Sequelize.STRING
      },
      email: {
         type: Sequelize.STRING
      },
      phone_number: {
         type: Sequelize.STRING
      } ,
      user_name: {
        type: Sequelize.STRING
     }, 
     password:{
        type:Sequelize.STRING
     },
     role: {
        type:   Sequelize.ENUM,
        values: ['superadmin', 'subadmin', 'hod']
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

    });  
      return Admin;
  };