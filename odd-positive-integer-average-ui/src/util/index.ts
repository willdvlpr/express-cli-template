// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

export const clientRequest = () => {
  console.log("request sent");

  axios({
    method: "POST",
    url: "/odd-positive-average",
    data: [1],
  })
    .then((res: any) => {
      console.log("Average of all positive integers:");
    })
    .catch((err: any) => {
      console.log("No odd positive integers were supplied.");
    });
};
