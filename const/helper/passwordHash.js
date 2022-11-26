const bcrypt = require('bcrypt');


const handlePassword = (password)=>{
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password,salt);
    return hashedPassword;
}

module.exports = {handlePassword};