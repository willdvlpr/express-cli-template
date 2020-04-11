import express, { Application, Request, Response } from "express";

import { averageOddPositiveIntegers } from "./util";

const app: Application = express();

app.use(express.json());

app.set("json spaces", 2);

app.post("/odd-positive-average", (req: Request, res: Response) => {
  res.set("Content-Type", "application/json");

  const data: number[] = req.body;

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
    res.status(200).json({ average: avg });
  }
});

app.listen(5001, () => console.log("Server is running on port 5001"));

export default app;
