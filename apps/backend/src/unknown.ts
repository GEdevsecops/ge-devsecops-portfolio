"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../src/index"));
const shared_1 = require("@repo/shared");
describe("Health API", () => {
    it("should return 200 and the correct health status", async () => {
        const res = await (0, supertest_1.default)(index_1.default).get("/api/v1/health");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: "ok" });
    });
    it("should have access to shared constants", () => {
        // Verifies the "Bridge" is working in the test environment
        expect(shared_1.EVENTS.REQUEST_SUCCESS).toBe("request_success");
    });
});
