require("dotenv").config();
const route = require("./routes/route");
const express = require("express");
const app = express();

app.use(express.json());
app.use(route);

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
