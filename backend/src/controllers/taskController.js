const Task = require('../models/Task');

// @desc    Get all tasks for logged in user
// @route   GET /api/v1/tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};

// @desc    Create a new task
// @route   POST /api/v1/tasks
exports.createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Please add a title' });
  }
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id,
  });
  res.status(200).json(task);
};

// @desc    Update task
// @route   PUT /api/v1/tasks/:id
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: 'Task not found' });

  // Make sure the logged in user owns the task
  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'User not authorized' });
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedTask);
};

// @desc    Delete task
// @route   DELETE /api/v1/tasks/:id
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (task.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'User not authorized' });
  }

  await task.deleteOne();
  res.status(200).json({ id: req.params.id });
};

// @desc    Get All Tasks (Admin Only)
// @route   GET /api/v1/tasks/admin/all
exports.getAllTasksAdmin = async (req, res) => {
  const tasks = await Task.find().populate('user', 'name email');
  res.status(200).json(tasks);
};