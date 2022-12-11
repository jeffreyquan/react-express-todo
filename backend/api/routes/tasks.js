const express = require("express");
const { getTasks, addTask } = require("../queries/tasks");
const router = express.Router();

router.get("/tasks", (req, res, next) => {
  return getTasks(req, res);
});

router.post("/tasks", (req, res, next) => {
  return addTask(req, res);
});

module.exports = router;
