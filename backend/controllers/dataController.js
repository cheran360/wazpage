const axios = require("axios");
const url = "https://api.wazirx.com/api/v2/tickers";
exports.getData = async (req, res) => {
  let Response = await axios.get(url);

  const coinsData = Response.data;
  const coinKeys = Object.keys(coinsData);
  const coinValues = Object.values(coinsData);
  let obj = {};
  for (let i = 0; i < 10; i++) {
    obj[coinKeys[i]] = coinValues[i];
  }

  let jsonData = JSON.stringify(obj);
  jsonData = JSON.parse(jsonData);
  console.log(jsonData);
  res.status(200).json(jsonData);
};
