const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");

const app = express();

const courseRouter = () => {
  app.post("/", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.get("/", function (req, res) {
    res.json();
  });

  app.get("/:courseId", function (req, res) {
    res.json();
  });

  app.put("/:courseId", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.delete("/:courseId", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.get("/my-courses", teacherAuthMiddleware, function (req, res) {
    res.json();
  });
};

module.exports = {
  courseRouter: courseRouter,
};
