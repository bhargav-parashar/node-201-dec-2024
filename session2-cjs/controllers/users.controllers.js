const { data } = require("../users.json");

const getUsers = (req, res) => {
  res.send(data);
};

const getUsersById = (req, res) => {
  const { uuid } = req.params;
  const reqUser = data.find((user) => user.login.uuid === uuid);
  if (!reqUser)
    return res
      .status(404)
      .send({ message: `User with uuid: '${uuid}' could not be found!` });
  res.send(reqUser);
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age)
    return res.send(
      data.filter(
        (user) =>
          user.gender === gender.toLowerCase() && String(user.dob.age) === age
      )
    );
  else if (gender)
    return res.send(
      data.filter((user) => user.gender === gender.toLowerCase())
    );
  else if (age)
    return res.send(data.filter((user) => String(user.dob.age) === age));
  else
    res
      .status(400)
      .send({ message: `At least one of 'gender' or 'age' must be passed!` });
};

module.exports = {
  getUsers,
  getUsersById,
  searchUsers,
};
