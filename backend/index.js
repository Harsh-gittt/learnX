require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { studentRouter } = require("./routes/student");
const { teacherRouter } = require("./routes/teacher");
const { courseRouter } = require("./routes/course");
const { lessonRouter } = require("./routes/lesson");
const { enrollmentRouter } = require("./routes/enrollment");

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/course", courseRouter);
app.use("/lesson", lessonRouter);
app.use("/enrollment", enrollmentRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("database connection successfull");

  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
}

main();
