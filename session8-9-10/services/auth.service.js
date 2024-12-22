const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

class AuthService {
  generatePasswordHash = (plainTextPassword) =>
    bcrypt.hash(plainTextPassword, 10);

  comparePasswordHash = (plainTextPassword, hash) =>
    bcrypt.compare(plainTextPassword, hash);

  generateJwt = (payload) =>
    Jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: 20 });
}

module.exports = AuthService;
