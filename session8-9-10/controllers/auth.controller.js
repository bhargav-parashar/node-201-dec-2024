const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();
const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();

const postSignup = async (req, res) => {
  try {
    const passwordHash = await AuthServiceInstance.generatePasswordHash(
      req.body.password
    );
    const newUser = await UserServiceInstance.register({
      ...req.body,
      password: passwordHash,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const postLogin = (req, res) => {};

module.exports = { postSignup, postLogin };
