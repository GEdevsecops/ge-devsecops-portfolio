import 'dotenv/config'; 
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "@repo/shared";

const connectionString = process.env.DATABASE_URL;

// This check is great for production, but we make it "Test-Friendly"
if (!connectionString) {
  if (process.env.NODE_ENV === 'test') {
    console.warn("⚠️ DATABASE_URL missing: Using mock/null connection for tests.");
  } else {
    throw new Error("DATABASE_URL is missing from .env");
  }
}

// Only create the pool if we actually have a connection string
const connection = connectionString 
  ? mysql.createPool(connectionString) 
  : null;

export const db = connection 
  ? drizzle(connection, { schema, mode: "default" }) 
  : null as any;