const bcrypt = require("bcrypt");

class AuthService {
  generatePasswordHash = (plainTextPassword) =>
    bcrypt.hash(plainTextPassword, 10);
}

module.exports = AuthService;
