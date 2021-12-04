"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = require("mongodb");

var _auth = _interopRequireDefault(require("./src/routes/auth"));

var _post = _interopRequireDefault(require("./src/routes/post"));

var _user = _interopRequireDefault(require("./src/routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const cors = require("cors");

const path = require('path');

const connectionString = `mongodb+srv://Tolulope:Tolulopeoduro2002@workforce-v2.iy6ag.mongodb.net/workforce-v2?retryWrites=true&w=majority`;
const app = express();
app.use(_bodyParser.default.json());
app.use(cors({
  origin: "*"
}));
app.use('/images', express.static(path.join(__dirname, 'images')));

_mongodb.MongoClient.connect(connectionString, (err, client) => {
  if (err) {
    console.log(err);
  }

  app.locals.db = client;
  app.listen(process.env.PORT || 6001);
  console.log("connected");
});

app.use("/auth", _auth.default);
app.use("/users", _user.default);
app.use("/post", _post.default);
