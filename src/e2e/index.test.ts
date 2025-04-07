import request, { Response } from "supertest";
import { Express } from "express";
import createApp from "../app";
import httpStatus from "http-status";
import exp from "constants";

describe("/health health check", () => {
  let app: Express;
  beforeAll(() => {
    // mongoose
    //   .connect("mongodb://localhost/express_tutorial_test")
    //   .then(() => console.log("Connected to Test Database"))
    //   .catch((err) => console.log(`Error: ${err}`));

    app = createApp();
  });

  it("should return health check status and message", async () => {
    const response: Response = await request(app).get("/health");
    expect(response.statusCode).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      timestamp: expect.any(String),
      environment: expect.any(String),
      port: expect.any(Number),
    });
  });

  afterAll(async () => {
    // await mongoose.connection.dropDatabase();
    // await mongoose.connection.close();
  });
});
