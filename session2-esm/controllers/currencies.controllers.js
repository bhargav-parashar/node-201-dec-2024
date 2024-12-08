import currenciesJson from "../currencies.json" with { type: "json" };
const { data } = currenciesJson;

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

export { getCurrencies, getCurrencyBySymbol };
