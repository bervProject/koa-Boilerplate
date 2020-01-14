// require the Koa server
const server = require("../src/index");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
    server.close();
});

describe("routes: index", () => {
    test("should respond as expected", async () => {
        const response = await request(server).get("/");
        expect(response.status).toEqual(200);
    });
});