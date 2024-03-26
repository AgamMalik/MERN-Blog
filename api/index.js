import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user' , userRoutes);
app.use('/api/auth', authRoutes)

//middleware for handling all errors
// Error-handling middleware functions are defined with four parameters: (err, req, res, next).
// When Express encounters an error during request processing and next(err) is called with an error object, it starts searching through the middleware stack for a middleware function that accepts four parameters. This indicates to Express that the middleware function is intended to handle errors.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})