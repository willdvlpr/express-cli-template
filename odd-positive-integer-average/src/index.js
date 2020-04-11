"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = require("./util");
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.set("json spaces", 2);
app.post("/odd-positive-average", (req, res) => {
    res.set("Content-Type", "application/json");
    const data = req.body;
    // data.map((num) => {
    //   if (Number.isInteger(num) == false) {
    //     res.status(400).json({ message: "Array should only be integers" });
    //   }
    // });
    res.status(200).json(util_1.averageOddPositiveIntegers(data));
});
app.listen(5001, () => console.log("Server is running on port 5001"));
exports.default = app;
