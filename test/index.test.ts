// require the Koa server
// require supertest
import request from "supertest";
import server from "../src/index";
// close the server after all
afterAll(() => {
  server.close();
});

describe("routes: index", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
  });
});
