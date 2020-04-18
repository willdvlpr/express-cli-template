import request from "supertest";
import app from "./index";

// Test GET
describe("Get Endpoints", () => {
  // Test endpoint 'testing'
  it("Gets the test endpoint", async (done) => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("pass!");
    done();
  });

  // Get Average data endpoint test
  it("Gets the GET '/odd-positive-average' endpoint", async (done) => {
    const res = await request(app).get("/odd-positive-average");
    expect(res.status).toBe(200);
    done();
  });
});

// Test POST
describe("Post Endpoint", () => {
  // Good input data with 200 status
  it("should create a new post status OK", async () => {
    const res = await request(app)
      .post("/odd-positive-average")
      .send([1, 2, 3, 4])
      .expect("Content-Type", /json/);
    expect(res.status).toEqual(200);
  });
  //   Bad input data with 400 status
  it("new post status 400", async () => {
    const res = await request(app)
      .post("/odd-positive-average")
      .send([1.2, 6, -4, 3, 5]);
    expect(res.status).toEqual(400);
  });
});
