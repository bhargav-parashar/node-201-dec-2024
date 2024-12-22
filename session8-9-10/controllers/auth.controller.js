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
    if (error.code === 11000)
      return res.status(409).send({
        message: `A user with this ${
          Object.keys(error.keyValue)[0]
        } already exists.`,
      });
    if (error.name === "ValidationError")
      return res.status(400).send({
        message: error.message,
      });
    res.status(500).send({ message: "Something went wrong", error });
  }
};

const postLogin = async (req, res) => {
  try {
    const reqUser = await UserServiceInstance.findByUsername(req.body.username);
    const isLoggedIn = await AuthServiceInstance.comparePasswordHash(
      req.body.password,
      reqUser.password
    );

    if (isLoggedIn) {
      const token = AuthServiceInstance.generateJwt({ userId: reqUser._id });
      return res
        .status(200)
        .cookie("remember-user-token", token, {
          maxAge: 200000,
          httpOnly: true,
        })
        .send({ isLoggedIn });
    }
    res.status(401).send({ message: "Password is incorrect" });
  } catch (error) {
    if (error.message === "User not found")
      return res.status(404).send({ message: error.message });
    res.status(500).send({ message: "Something went wrong", error });
  }
};

module.exports = { postSignup, postLogin };
