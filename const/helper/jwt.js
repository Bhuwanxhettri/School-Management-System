const jwt = require("jsonwebtoken");

const genterateToken = (user, expire) => {
  const token = jwt.sign(
    {
      id: user._id,
      role: user.roles,
    },
    "json_web_token_pw",
    { expiresIn: expire || "24h" }
  );
  return token;
};

const checkToken = (token) => {
  const verify = jwt.verify(token, "json_web_token_pw");
  return verify;
};

const tokenService = {
  genterateToken,
  checkToken,
};
module.exports = tokenService;
