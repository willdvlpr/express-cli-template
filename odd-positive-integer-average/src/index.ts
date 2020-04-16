import express, { Application, Request, Response } from "express";
import { averageOddPositiveIntegers } from "./util";

const app: Application = express();

app.set("json spaces", 2);

app.use(express.json());

// Store data here instead of express session overhead
let respondData: string;

// Get request is for TSX GUI
app.get("/odd-positive-average", (req: Request, res: Response) => {
  res.send(respondData);
});

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
    respondData = avg.toString();
    res.status(200).json({ average: avg });
  }
});

app.listen(5001, () => console.log("Server is running on port 5001"));

export default app;
