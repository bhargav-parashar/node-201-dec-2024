const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const authorize = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer dgajhdgjqgwu"
    const { userId } = AuthServiceInstance.verifyJwt(token);
    const user = await UserServiceInstance.findById(userId);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).send({
      message: "You are not authorized to access this resource.",
      error,
    });
  }
};

module.exports = authorize;
