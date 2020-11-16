const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001; //changed port for heroku // and 3001

const app = express();

//morgan using express
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

const MONGOATLAS_G =
  process.env.MONGOATLAS_G ||
  "mongodb+srv://Grantjos12:dbgrantjos12@cluster0.omzjl.mongodb.net/budget?retryWrites=true&w=majority";
mongoose.connect(MONGOATLAS_G, { useNewUrlParser: true });

// routes
app.use(require("./Develop/routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
