// const request = require("supertest");
// const app = require("../index"); // Assuming your Express app is in 'app.js' (adjust path as needed)

// describe("API Tests", () => {
//   it("should return a welcome message on the root route", async () => {
//     const response = await request(app).get("/");
//     expect(response.status).toBe(200);
//     expect(response.text).toContain(
//       "<h1> Hey there, welcome to our lost but found app ✌ </h1>"
//     );
//   });

//   it("should return a 'Found me' message on the /api route", async () => {
//     const response = await request(app).get("/api");
//     expect(response.status).toBe(200);
//     expect(response.text).toContain("<h1> Found me </h1>");
//   });

//   // Add other route tests, e.g., for authentication, protected routes, etc.
//   it("should respond with 404 for non-existent routes", async () => {
//     const response = await request(app).get("/api/nonexistent");
//     expect(response.status).toBe(404);
//   });
// });
