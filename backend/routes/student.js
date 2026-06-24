const express = require("express");

const app = express();

const studentRouter = () => {
  app.post("/signup", function (req, res) {
    res.json();
  });

  app.post("/signin", function (req, res) {
    res.json();
  });
};

module.exports = {
  studentRouter: studentRouter,
};
