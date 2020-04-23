import express, { Application, Request, Response } from "express";
import { averageOddPositiveIntegers } from "./util";

const app: Application = express();

app.set("json spaces", 2);

app.use(express.json());

// Shared Post request for CLI and GUI, returns average of user data array
app.post("/odd-positive-average", (req: Request, res: Response) => {
  res.set("Content-Type", "application/json");

  // Get data from body request
  const data: number[] = req.body;

  // Validate user input
  const checkInput = (data: number[]): boolean => {
    var flag: boolean = false;

    // Map user array data to Int
    data.map((num) => {
      if (Number.isInteger(num) != true) {
        return (flag = true);
      }
    });
    return flag;
  };

  // If data flagged as invalid respond with 400 status
  if (checkInput(data)) {
    res.status(400).json({ message: "Array should only be integers" });
  } else {
    // else find average and respond with 200 status
    const avg: number = averageOddPositiveIntegers(data);
    if (avg === 0) {
      res.status(400).json({
        message: "Your input array contained no odd, positive values",
      });
    } else {
      res.status(200).json({ average: avg.toString() });
    }
  }
});

app.listen(5001, () => console.log("Server is running on port 5001"));

export default app;
