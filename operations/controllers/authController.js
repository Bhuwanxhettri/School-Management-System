const {getAdminByEmail} = require("../../DB/queries/admin");
const {checkPassword} = require("../../const/helper/bycript");
const {incorrectPassword,serverError} = require("../../const/message");
const {genterateToken} = require("../../const/helper/jwt");

const login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      console.log(req.body);
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
  login,
  adminLogin
  // checkToken,
  // checkTokenApi,
}
module.exports = authController