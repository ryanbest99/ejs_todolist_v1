const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  let today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("It's the weekend");
  } else {
    res.send("It's working day");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
