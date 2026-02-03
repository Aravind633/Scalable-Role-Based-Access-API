const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 * - name: Tasks
 * description: Task management APIs
 */

/**
 * @swagger
 * /tasks:
 * get:
 * summary: Get all tasks for the logged-in user
 * tags: [Tasks]
 * security:
 * - bearerAuth: []
 * responses:
 * 200:
 * description: List of tasks
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Task'
 * post:
 * summary: Create a new task
 * tags: [Tasks]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - title
 * properties:
 * title:
 * type: string
 * description:
 * type: string
 * responses:
 * 200:
 * description: The created task
 */
router.route('/')
  .get(protect, getTasks)
  .post(protect, createTask);

/**
 * @swagger
 * /tasks/{id}:
 * delete:
 * summary: Delete a task by ID
 * tags: [Tasks]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: The task ID
 * responses:
 * 200:
 * description: Task deleted
 * 404:
 * description: Task not found
 */
router.route('/:id')
  .delete(protect, deleteTask);

module.exports = router;