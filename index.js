require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/voice.route"));
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_SERVER).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Успешное подключение к серверу...");
  });
  console.log("Успешное подключение к базе данных...");
});
