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

const documentIdValidator = (req, res, next) => {
  const { id } = req.params;
  const regex = new RegExp(/^[a-fA-F0-9]{24}$/);
  if (!regex.test(id))
    return res.status(400).send({ message: "Id is invalid" });
  next();
};

module.exports = { queryValidator, documentIdValidator };
