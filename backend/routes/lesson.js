const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");

const app = express();

const lessonRouter = () => {
  app.post("/", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.put("/:lessonId", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.delete("/:lessonId", teacherAuthMiddleware, function (req, res) {
    res.json();
  });

  app.get("/course/:courseId", function (req, res) {
    res.json();
  });
};

module.exports = {
  lessonRouter: lessonRouter,
};
