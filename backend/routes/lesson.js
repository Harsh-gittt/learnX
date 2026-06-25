const express = require("express");
const { teacherAuthMiddleware } = require("../middlewares/teacherAuth");
const { courseModel, lessonModel } = require("../db");

const lessonRouter = express.Router();

lessonRouter.post("/", teacherAuthMiddleware, async function (req, res) {
  const teacherId = req.teacherId;
  const { title, videoUrl, duration, courseId } = req.body;

  const course = await courseModel.findOne({
    creatorId: teacherId,
    _id: courseId,
  });

  if (course) {
    try {
      await lessonModel.create({
        title,
        videoUrl,
        duration,
        courseId,
      });

      res.json({
        message: "lesson added successfully!",
      });
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  } else {
    res.json({
      message: "course does not exist!",
    });
  }
});

lessonRouter.get("/:lessonId", async function (req, res) {
  const lessonId = req.params.lessonId;

  const lesson = await lessonModel.findOne({
    _id: lessonId,
  });

  if (lesson) {
    res.json({
      message: "lesson details!",
      lesson: lesson,
    });
  } else {
    res.json({
      message: "lesson does not exist!",
    });
  }
});

lessonRouter.put(
  "/:lessonId",
  teacherAuthMiddleware,
  async function (req, res) {
    const teacherId = req.teacherId;
    const lessonId = req.params.lessonId;

    const lesson = await lessonModel.findOne({
      _id: lessonId,
    });

    const correctCourse = await courseModel.findOne({
      _id: lesson.courseId,
      creatorId: teacherId,
    });

    if (correctCourse) {
      const updatedLesson = await lessonModel.findOneAndUpdate(
        {
          _id: lessonId,
        },
        req.body,
        {
          new: true,
        },
      );

      res.json({
        message: "lesson updated successfully!",
        lesson: updatedLesson,
      });
    } else {
      res.json({
        message: "you can't update this lesson",
      });
    }
  },
);

lessonRouter.delete(
  "/:lessonId",
  teacherAuthMiddleware,
  async function (req, res) {
    const teacherId = req.teacherId;
    const lessonId = req.params.lessonId;

    const lesson = await lessonModel.findOne({
      _id: lessonId,
    });

    const correctCourse = await courseModel.findOne({
      _id: lesson.courseId,
      creatorId: teacherId,
    });

    if (correctCourse) {
      const deleted = await lessonModel.findOneAndDelete({
        _id: lessonId,
      });

      if (deleted) {
        res.json({
          message: "lesson deleted successfully!",
        });
      } else {
        res.json({
          message: "lesson does not exist",
        });
      }
    } else {
      res.json({
        message: "you can't delete this lesson",
      });
    }
  },
);

module.exports = {
  lessonRouter: lessonRouter,
};
