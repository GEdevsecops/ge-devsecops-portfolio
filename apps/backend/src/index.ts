import express, { Request, Response } from "express";
import cors from "cors";
import { EVENTS } from "@repo/shared"; // Don't forget our bridge!

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the Brand Monorepo API");
});

// Health Check Route
app.get("/api/v1/health", (req: Request, res: Response) => {
  // Use a shared constant to verify the bridge is active
  console.log(`Log Event: ${EVENTS.REQUEST_SUCCESS}`); 
  
  res.status(200).json({ 
    status: "ok", 
    message: "Backend is running with TypeScript!",
    timestamp: new Date().toISOString()
  });
});

// IMPORTANT: Only start the server if we are NOT in a test environment
// This prevents the "Address already in use" and "Jest did not exit" errors
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Backend server ready at http://localhost:${PORT}`);
  });
}

export default app;