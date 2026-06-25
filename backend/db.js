const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  pfpUrl: String,
});

const teacherSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  pfpUrl: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  thumbnailUrl: String,
  duration: Number,
  category: String,
  createdAt: Date,
  creatorId: { type: ObjectId, ref: "teacher" },
});

const lessonSchema = new Schema({
  title: String,
  videoUrl: String,
  duration: Number,
  courseId: { type: ObjectId, ref: "course" },
});

const lessonProgressSchema = new Schema({
  studentId: { type: ObjectId, ref: "student" },
  lessonId: { type: ObjectId, ref: "lesson" },
  isCompleted: { type: Boolean, default: false },
});

const enrolledSchema = new Schema({
  studentId: { type: ObjectId, ref: "student" },
  courseId: { type: ObjectId, ref: "course" },
  progress: Number,
});

const studentModel = mongoose.model("student", studentSchema);
const teacherModel = mongoose.model("teacher", teacherSchema);
const courseModel = mongoose.model("course", courseSchema);
const lessonModel = mongoose.model("lesson", lessonSchema);
const lessonProgressModel = mongoose.model(
  "lesson-progress",
  lessonProgressSchema,
);
const enrolledModel = mongoose.model("enrolled", enrolledSchema);

module.exports = {
  studentModel: studentModel,
  teacherModel: teacherModel,
  courseModel: courseModel,
  lessonModel: lessonModel,
  lessonProgressModel: lessonProgressModel,
  enrolledModel: enrolledModel,
};
