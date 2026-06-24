const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { studentModel } = require("../db");

const JWT_SECRET = process.env.JWT_SECRET_STUDENT;
const studentRouter = express.Router();

studentRouter.post("/signup", async function (req, res) {
  const { name, email, password } = req.body;

  const bodyFormat = z.object({
    name: z.string().min(2).max(100),
    email: z.string().min(5).max(100).email(),
    password: z.string().min(6).max(30),
  });

  const parsedBody = bodyFormat.safeParse(req.body);

  if (!parsedBody.success) {
    res.json({
      error: parsedBody.error.issues[0].message,
    });
  }

  try {
    const hashedPass = await bcrypt.hash(password, 5);

    await studentModel.create({
      name,
      email,
      password: hashedPass,
    });

    res.json({
      message: "sign up successfull!",
    });
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
});

studentRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const bodyFormat = z.object({
    email: z.string().min(5).max(100).email(),
    password: z.string().min(6).max(30),
  });

  const parsedBody = bodyFormat.safeParse(req.body);

  if (!parsedBody.success) {
    res.json({
      error: parsedBody.error.issues[0].message,
    });
  }

  const student = await studentModel.findOne({
    email: email,
  });

  if (student) {
    const passMatch = await bcrypt.compare(password, student.password);

    if (passMatch) {
      const token = jwt.sign(
        {
          id: student._id,
        },
        JWT_SECRET,
      );

      res.json({
        token: token,
      });
    } else {
      res.json({
        message: "invalid credentials!",
      });
    }
  } else {
    res.json({
      message: "user does not exist",
    });
  }
});

module.exports = {
  studentRouter: studentRouter,
};
