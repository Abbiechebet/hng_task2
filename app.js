import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import { globalErrorHandler } from "./src/utils/globalErrHandler.js";
import { config } from "./src/config/index.js";

// Importing the Person Routes
import { router as personRouter } from "./src/route/personRoute.js";

// Creating the express app
const app = express();

// Exposing environment variables
dotenv.config();

//Database connection
mongoose
  .connect(config.mongodb_connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connection established"))
  .catch((e) => console.log(e.message));

// Port configuration
const port = config.port || 3000;

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.use("/api", personRouter);

app.use(globalErrorHandler);

// Setting up the express server
app.listen(port, () => {
  console.log(`Server runnning on port: ${port}`);
});