const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");

const courseRouter = express.Router();

courseRouter.post("/", teacherAuthMiddleware, function (req, res) {
  res.json({message: "hi there"});
});

courseRouter.get("/", function (req, res) {
  res.json();
});

courseRouter.get("/:courseId", function (req, res) {
  res.json();
});

courseRouter.put("/:courseId", teacherAuthMiddleware, function (req, res) {
  res.json();
});

courseRouter.delete("/:courseId", teacherAuthMiddleware, function (req, res) {
  res.json();
});

courseRouter.get("/my-courses", teacherAuthMiddleware, function (req, res) {
  res.json();
});

module.exports = {
  courseRouter: courseRouter,
};
