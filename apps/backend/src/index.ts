
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Root Route - Fixes the "Cannot GET /" error
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the Brand Monorepo API");
});

// Health Check Route
app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({ 
    status: "ok", 
    message: "Backend is running with TypeScript!",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server ready at http://localhost:${PORT}`);
});

export default app;