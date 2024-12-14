const Joi = require("joi");
const { validGenders, MIN_AGE, MAX_AGE } = require("../config/config");

const userSearchSchema = Joi.object({
  gender: Joi.string().valid(...validGenders),
  age: Joi.number().integer().min(MIN_AGE).max(MAX_AGE),
}).or("gender", "age");

module.exports = { userSearchSchema };
