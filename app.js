const express = require("express");
const mongoose = require("mongoose");
const routesurl = require("./routes/routes");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
// const port = process.env.Port||3000;#
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/", routesurl);
app.get("/", function (req, res) {
  res.send("Hello World");
});

dotenv.config();
mongoose
  .connect(process.env.Mongo_Uri)
  .then(() => {
    console.log("Conected");
    app.listen(4000, () => console.log("SERVER IS RUNNING"));
  })
  .catch((err) => {
    console.log("error", err);
  });
