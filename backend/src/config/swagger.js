const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PrimeTradeAI API',
      version: '1.0.0',
      description: 'A scalable REST API for managing tasks with Role-Based Access Control (RBAC).',
      contact: {
        name: 'API Support',
        email: 'support@taskflow.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Local Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Task: {
          type: 'object',
          required: ['title'],
          properties: {
            id: { type: 'string', description: 'The auto-generated id of the task' },
            title: { type: 'string', description: 'The title of your task' },
            description: { type: 'string', description: 'More details about the task' },
            status: { 
              type: 'string', 
              enum: ['Pending', 'In Progress', 'Completed'],
              default: 'Pending'
            },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        User: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string', format: 'password' },
            role: { type: 'string', enum: ['user', 'admin'], default: 'user' },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }], 
  },
  apis: ['./src/routes/*.js'], // Files containing annotations
};

const specs = swaggerJsdoc(options);
module.exports = specs;