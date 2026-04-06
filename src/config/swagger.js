import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Financial Data Management API",
      version: "1.0.0",
      description: "Backend API for managing financial records with JWT auth",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // reads route files
};

export const swaggerSpec = swaggerJsdoc(options);