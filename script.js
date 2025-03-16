const express = require("express");
const app = express();

// this two middleware use for convert data in other form for backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware run first
app.use(function (req, res, next) {
  console.log("middleware started");
  next();
});

// middleware run second time
app.use(function (req, res, next) {
  console.log("once more middleware started");
  next();
});

// middleware run third time
app.use(function (req, res, next) {
  console.log("once more once more!👏🏻👏🏻👏🏻");
  next();
});

// after the all above middleware runs then this routs page run
app.get("/", function (req, res) {
  res.send("Hello World From ARPIT 🖐🏻🖐🏻🖐🏻");
});

// after the all above middleware runs then this routs page run
app.get("/profile", function (req, res) {
  res.send("Profile Page of ARPIT 🖐🏻🖐🏻🖐🏻");
});

// Error Handling
app.get("/error", function (req, res, next) {
  // this part will saw in console (backend)
  return next(new Error("New Error"));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  // this part will saw in frontend
  res.status(500).send("Something broken!⛓️‍💥⛓️‍💥⛓️‍💥");
});

// listning port on 3000
app.listen(3000);
