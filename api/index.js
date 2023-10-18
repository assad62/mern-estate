import express from "express";
import { dbConnection } from "./database/connection.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());

dbConnection();

app.use("/api/auth", authRouter);




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});