// const { userSearchSchema } = require("../validations/users.validations");

// const userSearchValidator = (req, res, next) => {
//   const { gender, age } = req.query;
//   const { error } = userSearchSchema.validate({ gender, age });
//   if (error) return res.status(400).send({ message: error.details[0].message });
//   next();
// };

// const productSearchValidator = (req, res, next) => {
//   const { brand, price } = req.query;
//   const { error } = productSearchSchema.validate({ brand, price });
//   if (error) return res.status(400).send({ message: error.details[0].message });
//   next();
// };

const queryValidator = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);
  if (error) return res.status(400).send({ message: error.details[0].message });
  next();
};

// const validate = (schema) => (req, res, next) => {
//   const { error } = schema.validate(req);
//   if (error) return res.status(400).send({ message: error.details[0].message });
//   next();
// };

module.exports = { queryValidator };
