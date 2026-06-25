const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET_STUDENT;

const studentAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded.id) {
    req.studentId = decoded.id;
    next();
  } else {
    res.json({
      message: "you are not signed in!",
    });
  }
};

module.exports = {
  studentAuthMiddleware: studentAuthMiddleware,
};
