import express, { Application, Request, Response } from "express";
import session from "express-session";

import { averageOddPositiveIntegers } from "./util";

const app: Application = express();

app.set("json spaces", 2);

app.use(express.json());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/odd-positive-average", (req: Request, res: Response) => {
  console.log("session data");
  console.log(req.session.userData);
  console.log(req.session.avg);
  console.log("sending data as average to GET");
  console.log(req.session.avg.toString());

  res.send(req.session.avg.toString());
});

app.post("/odd-positive-average", (req: Request, res: Response) => {
  // res.set("Content-Type", "application/json");

  const data: number[] = req.body;
  req.session.userData = req.body;

  const checkInput = (data: number[]): boolean => {
    var flag: boolean = false;

    data.map((num) => {
      if (Number.isInteger(num) != true) {
        return (flag = true);
      }
    });
    return flag;
  };

  if (checkInput(data)) {
    res.status(400).json({ message: "Array should only be integers" });
  } else {
    const avg: number = averageOddPositiveIntegers(data);
    req.session.avg = avg;
    console.log(`session avg value: ${req.session.avg}`);
    res.status(200).json({ average: avg });
  }
});

app.listen(5001, () => console.log("Server is running on port 5001"));

export default app;
