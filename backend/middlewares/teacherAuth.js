const express = require("express");
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_TEACHER;

const teacherAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, JWT_SECRET);

  if(decoded.id){
    req.teacherId = decoded.id;
    next();
  } else {
    res.json({
      message: "you are not signed in!"
    })
  }
};

module.exports = {
  teacherAuthMiddleware: teacherAuthMiddleware,
};
