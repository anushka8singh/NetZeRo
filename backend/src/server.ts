import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("NetZero Backend Running with TypeScript 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});