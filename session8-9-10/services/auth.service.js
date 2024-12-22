const bcrypt = require("bcrypt");

class AuthService {
  generatePasswordHash = (plainTextPassword) =>
    bcrypt.hash(plainTextPassword, 10);

  comparePasswordHash = (plainTextPassword, hash) =>
    bcrypt.compare(plainTextPassword, hash);
}

module.exports = AuthService;
