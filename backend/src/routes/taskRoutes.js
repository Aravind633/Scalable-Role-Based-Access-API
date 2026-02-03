const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask, getAllTasksAdmin } = require('../controllers/taskController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.route('/')
  .get(protect, getTasks)
  .post(protect, createTask);

router.route('/:id')
  .put(protect, updateTask)
  .delete(protect, deleteTask);

// Admin only route example
router.get('/admin/all', protect, authorize('admin'), getAllTasksAdmin);

module.exports = router;