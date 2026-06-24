const express = require("express");
const { studentAuthMiddleware } = require("../middlewares/studentAuth");

const app = express();

const enrollmentRouter = () => {
  app.post("/:courseId", studentAuthMiddleware, function (req, res) {
    res.json();
  });

  app.get("/my-courses", studentAuthMiddleware, function (req, res) {
    res.json();
  });

  app.put("/progress/:courseId", studentAuthMiddleware, function (req, res) {
    res.json();
  });

  app.get("/progress/:courseId", studentAuthMiddleware, function (req, res) {
    res.json();
  });
};

module.exports = {
  enrollmentRouter: enrollmentRouter,
};
