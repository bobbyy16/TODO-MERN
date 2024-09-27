const express = require("express");
const {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
const authMiddleware = require("../middlewares/auth.middlewares.js");
const router = express.Router();

// Protect task routes with authMiddleware
router.use(authMiddleware);

// Task routes
router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
