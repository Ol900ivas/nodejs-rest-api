const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");
const { DB_HOST, PORT = 3000 } = process.env;

describe("test login controller", () => {
  // Перед усіма тестами запускаємо сервер та під'єднуємося до бази даних
  beforeAll(() => {
    app.listen(PORT);
    mongoose.connect(DB_HOST);
  });

  // Від'єднуємося від бази даних та вимикаємо сервер після виконання всіх тестів
  afterAll(() => {
    mongoose.disconnect();
    // app.close();
  });

  test("login return status 200, token, user", async () => {
    const testData = {
      email: "test@test.com",
      password: "test",
    };
    const res = await request(app).post("/api/users/login").send(testData);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        user: expect.objectContaining({
          email: expect.any(String),
          subscription: expect.any(String),
        }),
      })
    );
  });

  it("should return bad request error(400)", async () => {
    const res = await request(app).post("/api/users/login").send();
    expect(res.statusCode).toBe(400);
  });

  it("should return bad request error(400)", async () => {
    const testData = {
      email: "test1@test.com",
    };
    const res = await request(app).post("/api/users/login").send(testData);
    expect(res.statusCode).toBe(400);
  });

  it("should return bad request error(400)", async () => {
    const testData = {
      password: "test",
    };
    const res = await request(app).post("/api/users/login").send(testData);
    expect(res.statusCode).toBe(400);
  });

  it("should return unauthorized error (401)", async () => {
    const testData = {
      email: "test1@test.com",
      password: "test",
    };
    const res = await request(app).post("/api/users/login").send(testData);
    expect(res.statusCode).toBe(401);
  });

  it("should return unauthorized error (401)", async () => {
    const testData = {
      email: "test@test.com",
      password: "test1",
    };
    const res = await request(app).post("/api/users/login").send(testData);
    expect(res.statusCode).toBe(401);
  });
});
