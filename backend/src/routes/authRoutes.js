const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

/**
 * @swagger
 * tags:
 * - name: Auth
 * description: User authentication & management
 */

/**
 * @swagger
 * /auth/register:
 * post:
 * summary: Register a new user
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * responses:
 * 201:
 * description: User created successfully
 * 400:
 * description: User already exists
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /auth/login:
 * post:
 * summary: Login user & get token
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - email
 * - password
 * properties:
 * email:
 * type: string
 * password:
 * type: string
 * responses:
 * 200:
 * description: Login success (returns token)
 * 401:
 * description: Invalid credentials
 */
router.post('/login', loginUser);

module.exports = router;