var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mysql = require("mysql2");
const cors = require("cors");

var indexRouter = require("./routes/index");
var loginRouter = require("./routes/login");
var notesRouter = require("./routes/notes");

var app = express();

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "notes",
  password: "2D7Tr@-8Y*rEboeh",
  database: "notes",
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/notes", notesRouter);

module.exports = app;
