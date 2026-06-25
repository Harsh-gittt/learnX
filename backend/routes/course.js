const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");
const { courseModel, lessonModel } = require("../db");

const courseRouter = express.Router();

courseRouter.post("/", teacherAuthMiddleware, async function (req, res) {
  const teacherId = req.teacherId;
  const {
    title,
    description,
    price,
    thumbnailUrl,
    duration,
    category,
    createdAt,
  } = req.body;

  try {
    const course = await courseModel.create({
      title,
      description,
      price,
      thumbnailUrl,
      duration,
      category,
      createdAt,
      creatorId: teacherId,
    });

    res.json({
      message: "course added successfully!",
      courseId: course._id,
    });
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
});

courseRouter.get("/", async function (req, res) {
  const courses = await courseModel.find({});

  res.json({
    message: "these are all available courses!",
    courses: courses,
  });
});

courseRouter.get("/:courseId", async function (req, res) {
  const courseId = req.params.courseId;

  const course = await courseModel.findOne({
    _id: courseId,
  });

  res.json({
    message: "details of course!",
    course: course,
  });
});

courseRouter.put(
  "/:courseId",
  teacherAuthMiddleware,
  async function (req, res) {
    const teacherId = req.teacherId;
    const courseId = req.params.courseId;

    const updated = await courseModel.findOneAndUpdate(
      {
        creatorId: teacherId,
        _id: courseId,
      },
      req.body,
      {
        new: true,
      },
    );

    if (updated) {
      res.json({
        message: "course updated successfully!",
        course: updated,
      });
    } else {
      res.json({
        message: "course does not exist!",
      });
    }
  },
);

courseRouter.delete(
  "/:courseId",
  teacherAuthMiddleware,
  async function (req, res) {
    const teacherId = req.teacherId;
    const courseId = req.params.courseId;

    const deleted = await courseModel.findOneAndDelete({
      creatorId: teacherId,
      _id: courseId,
    });

    await lessonModel.deleteMany({
      courseId: courseId,
    });

    if (deleted) {
      res.json({
        message: "course deleted successfully!",
      });
    } else {
      res.json({
        message: "course does not exist",
      });
    }
  },
);

courseRouter.get(
  "/my-courses",
  teacherAuthMiddleware,
  async function (req, res) {
    const teacherId = req.teacherId;

    const courses = await courseModel.find({
      creatorId: teacherId,
    });

    res.json({
      message: "these are your courses!",
      courses: courses,
    });
  },
);

courseRouter.get("/lessons/:courseId", async function (req, res) {
  const courseId = req.params.courseId;

  const lessons = await lessonModel.find({
    courseId: courseId,
  });

  res.json({
    message: "these are the lessons for this course!",
    lessons: lessons,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
