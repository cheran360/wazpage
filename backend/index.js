// import request
const request = require("request");
const beautify = require("json-beautify");
// express
const express = require("express");
const app = express();

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// on get request
app.get("/api/getData", (req, res) => {
  apiUrl = "https://api.wazirx.com/api/v2/tickers";
  // get request
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      var data = JSON.parse(body);
      // only first 10 objects
      keys = Object.keys(data);
      keys = keys.slice(10, keys.length);
      // remove all keys
      for (var i = 0; i < keys.length; i++) {
        delete data[keys[i]];
      }

      res.status(200).json(data);
    }
  });
});

// run server
app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
