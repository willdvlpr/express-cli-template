import request from "supertest";
import app from "./index";

// Test POST
describe("Post Endpoint", () => {
  // Good input data with 200 status
  it("should create a new post status OK", async (done) => {
    const res = await request(app)
      .post("/odd-positive-average")
      .send([1, 2, 3, 4])
      .expect("Content-Type", /json/);
    expect(res.status).toEqual(200);
    done();
  });
  //   Bad input data with 400 status
  it("new post status 400", async (done) => {
    const res = await request(app)
      .post("/odd-positive-average")
      .send([1.2, 6, -4, 3, 5]);
    expect(res.status).toEqual(400);
    done();
  });
});
