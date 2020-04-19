#!/usr/bin/env npx ts-node
var axios = require("axios");
// store input localhost path
const path = process.argv[2];
const array = process.argv[3];

const arr_data: number[] = array.split(",").map(Number);

axios({
  method: "POST",
  url: path + "/odd-positive-average",
  data: arr_data,
})
  .then((res: any) => {
    console.log("Average of all odd positive integers: " + res.data.average);
  })
  .catch((err: any) => {
    if (err.response.status == 400) {
      console.log(err.response.data.message);
    }
  });
