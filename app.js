var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./server/routes/index");
let newCategoryRouter = require("./server/routes/newGenre");

let newItemRouter = require("./server/routes/newRecord");

let detailRouter = require("./server/routes/recordDetail");

let updateRecordRouter = require("./server/routes/updateRecord");

let updateGenreRouter = require("./server/routes/updateGenre");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new-genre", newCategoryRouter);
app.use("/new-record", newItemRouter);
app.use("/record", detailRouter);
app.use("/update-item", updateRecordRouter);
app.use("/update-category", updateGenreRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Express" });
});

module.exports = app;
