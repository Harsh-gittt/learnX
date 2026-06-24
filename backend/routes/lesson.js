const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");

const lessonRouter = express.Router();

lessonRouter.post("/", teacherAuthMiddleware, function (req, res) {
  res.json();
});

lessonRouter.put("/:lessonId", teacherAuthMiddleware, function (req, res) {
  res.json();
});

lessonRouter.delete("/:lessonId", teacherAuthMiddleware, function (req, res) {
  res.json();
});

lessonRouter.get("/course/:courseId", function (req, res) {
  res.json();
});

module.exports = {
  lessonRouter: lessonRouter,
};
