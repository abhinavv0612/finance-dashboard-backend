import request from "supertest";
import app from "../index.js";

let token = "";
let userId = "";
let recordId = "";
let email = `test${Date.now()}@example.com`; 

beforeAll(async () => {
  const registerRes = await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: email,
    password: "123456",
    role: "ADMIN",
  });


  expect(registerRes.statusCode).toBe(201);
  userId = registerRes.body.id;

  const loginRes = await request(app).post("/api/auth/login").send({
    email: email,
    password: "123456",
  });

  expect(loginRes.statusCode).toBe(200);
  token = loginRes.body.token;
});

describe("Integration Tests - Auth & Records", () => {

  it("should create a financial record", async () => {
    const res = await request(app)
      .post("/api/records")
      .set("Authorization", `Bearer ${token}`)
      .send({
        amount: 5000,
        type: "INCOME",
        category: "Salary",
        date: new Date(),
        userId: userId,
      });

    expect(res.statusCode).toBe(201);
    recordId = res.body.id;
  });

});