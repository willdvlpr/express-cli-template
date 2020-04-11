#!/usr/bin/env npx ts-node
var axios = require("axios");
// store input localhost path
const path = process.argv[2];
const array = process.argv[3];
// parse input string as JSON object and set as array of type 'number'
const arr_data: number[] = JSON.parse(process.argv[3]);

axios({
  method: "POST",
  url: path + "/odd-positive-average",
  data: arr_data,
})
  .then((res: any) => {
    console.log("Average of all positive integers: " + res.data.average);
  })
  .catch((err: any) => {
    if (err.response.status == 400) {
      console.log("No odd positive integers were supplied.");
    }
  });
