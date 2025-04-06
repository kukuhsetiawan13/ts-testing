import request from "supertest";

import createApp from "../app";

describe("/api/auth", () => {
  let app: any;
  beforeAll(() => {
    // mongoose
    //   .connect("mongodb://localhost/express_tutorial_test")
    //   .then(() => console.log("Connected to Test Database"))
    //   .catch((err) => console.log(`Error: ${err}`));

    app = createApp();
  });

  it("should return health check status and message", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(202);
  });

  afterAll(async () => {
    // await mongoose.connection.dropDatabase();
    // await mongoose.connection.close();
  });
});
