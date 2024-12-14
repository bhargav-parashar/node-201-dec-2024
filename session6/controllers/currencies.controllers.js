const { data } = require("../currencies.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (!min_value) return res.send(data);
  res.send(data.filter((curr) => curr.min_size === min_value));
};

const getCurrencyBySymbol = (req, res) => {
  const { symbol } = req.params;
  const reqCurrency = data.find((curr) => curr.id === symbol.toUpperCase());
  if (!reqCurrency)
    return res.status(404).send({
      message: `Invalid Symbol`,
    });
  res.send(reqCurrency);
};

module.exports = { getCurrencies, getCurrencyBySymbol };
