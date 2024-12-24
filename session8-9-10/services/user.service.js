const Users = require("../models/user.model");

class UserService {
  register = async (user) => {
    try {
      const { fullName, email, username, password } = user;
      const newUser = new Users({ email, username, fullName, password });
      const result = await newUser.save();
      return result;
    } catch (error) {
      throw error;
    }
  };

  findAll = async () => {
    const userResult = await Users.find({});
    return userResult;
  };

  findByUsername = async (username) => {
    try {
      const userResult = await Users.findOne({ username });
      if (userResult) return userResult;
      throw new Error("User not found");
    } catch (error) {
      throw error;
    }
  };

  findById = (userId) => Users.findById(userId);
}

module.exports = UserService;
