import request from "supertest";
import app from "../index.js"; 
import { db } from "../db.js";
import { EVENTS } from "@repo/shared";

describe("Health API", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ status: "ok" });
  });
});