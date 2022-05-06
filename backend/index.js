const express = require("express");

app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/getData", require("./routes/getData"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
