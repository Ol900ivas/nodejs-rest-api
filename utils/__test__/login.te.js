// const express = require("express");
// const request = require("supertest");
// const { login } = require("../../controllers/users");

// const app = express();
// app.post("/api/users/login", login);
// describe("test login controller", () => {
//   // Перед усіма тестами запускаємо сервер
//   beforeAll(() => {
//     app.listen(3000);
//   });
//   // Вимикаємо сервер після виконання всіх тестів
//   afterAll(() => {
//     console.log("Виконати після тестів");
//   });

//   test("login return status 200", async () => {
//     const response = await request(app).post("/api/users/login");
//     console.log(response.statusCode);
//     expect(response.statusCode).toBe(200);
//   });
// });

// 1.statusCode: 200
// 2. return token
// 3. return object user{
//     email type string,
//     subscription type string
// }
