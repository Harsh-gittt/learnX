const express = require("express");
const { studentAuthMiddleware } = require("../middlewares/studentAuth");

const enrollmentRouter = express.Router();

enrollmentRouter.post("/:courseId", studentAuthMiddleware, function (req, res) {
  res.json();
});

enrollmentRouter.get("/my-courses", studentAuthMiddleware, function (req, res) {
  res.json({ message: "hi there" });
});

enrollmentRouter.put("/progress/:courseId", studentAuthMiddleware, function (req, res) {
    res.json();
  },
);

enrollmentRouter.get("/progress/:courseId", studentAuthMiddleware, function (req, res) {
    res.json();
  },
);

module.exports = {
  enrollmentRouter: enrollmentRouter,
};
