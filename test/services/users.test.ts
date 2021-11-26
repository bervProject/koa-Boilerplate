// require the Koa server
// require supertest
import request from "supertest";
import server from "../../src/index";
// close the server after all
afterAll(() => {
  server.close();
});

describe("routes: api", () => {
  test("should respond error as expected", async () => {
    const response = await request(server).get("/api/error");
    expect(response.status).toEqual(500);
  });
  test("should respond as expected", async () => {
    const response = await request(server).get("/api/user");
    expect(response.status).toEqual(200);
  });
});
