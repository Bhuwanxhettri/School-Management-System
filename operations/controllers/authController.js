const {getAdminByEmail} = require("../../DB/queries/admin");
const {checkPassword} = require("../../const/helper/bycript");
const {incorrectPassword,serverError} = require("../../const/message");
const {genterateToken} = require("../../const/helper/jwt");
const { getteacherByUsername, saveToken } = require("../../DB/queries/teacher");

const Studentlogin = async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (!email) {
        return next({
          msg: 'Bad request',
          fields: { email: 'Email is required .'},
        })
      }
      if (!password) {
        return next({
          msg: 'Bad request',
          fields: { password: 'Password is required .' },
        })
      }
      const user = await getMemberByEmail(email)
      if (!member) {
        return next({
          msg: 'User Not Found',
          fields: { email: 'No member with this email .' },
        })
      }
      const isValidPassword = await checkPassword(member.password, password)
      if (!isValidPassword) {
        return next(incorrectPassword)
      }
      if (member.is_active === false) {
        return next({
          msg: 'Account Suspended',
          fileds: {},
          status: 401,
        })
      }
  
      const token = await genterateToken(member, '30d')
     await saveToken(token)
      member.avatar = `${req.protocol}://${req.get('host')}/public/members/${
        member.avatar
      }`
      res.json({
        token: token,
        member: memberToSend(member),
      })
    } catch (err) {
         next(serverError)
    }
}
const Teacherlogin = async (req, res, next) => {
  try {
    const { user_name, password } = req.body
    if (!user_name) {
      return next({
        msg: 'Bad request',
        fields: { email: 'UserName is required .'},
      })
    }
    if (!password) {
      return next({
        msg: 'Bad request',
        fields: { password: 'Password is required .' },
      })
    }
    const user = await getteacherByUsername(user_name)
    if (!user) {
      return next({
        msg: 'User Not Found',
        fields: { email: 'No member with this user_name .' },
      })
    }
    const isValidPassword = await checkPassword(user.password, password)
    if (!isValidPassword) {
      return next(incorrectPassword)
    }
    
    if (member.is_active === false) {
      return next({
        msg: 'Account Suspended',
        fileds: {},
        status: 401,
      })
    }

    const token = await genterateToken(member, '30d')
    member.avatar = `${req.protocol}://${req.get('host')}/public/members/${
      member.avatar
    }`
    res.json({
      token: token,
      member: memberToSend(member),
    })
  } catch (err) {
       next(serverError)
  }
}


const adminLogin = async(req,res,next)=>{
  try {
    const { email, password } = req.body
    if (!email) {
      return next({
        msg: 'Bad request',
        fields: { email: 'Email is required .'},
      })
    }
    if (!password) {
      return next({
        msg: 'Bad request',
        fields: { password: 'Password is required .' },
      })
    }
    const admin = await getAdminByEmail(email)
    if (!admin) {
      return next({
        msg: 'Admin Not Found',
        fields: { email: 'No Admin with this email .' },
      })
    }
    const isValidPassword = await checkPassword(admin.password, password)
    if (!isValidPassword) {
      return next(incorrectPassword)
    }
    
    if (admin.is_active === false) {
      return next({
        msg: 'Account Suspended',
        status: 401,
      })
    }

    const token = await genterateToken(admin, '30d')
    res.json({
      token: token,
      admin:admin,
    })
  } catch (err) {
       next(serverError)
  }
}


const authController = {
  Studentlogin,
  Teacherlogin,
  adminLogin
  // checkToken,
  // checkTokenApi,
}
module.exports = authController