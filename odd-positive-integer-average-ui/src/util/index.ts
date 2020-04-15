// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

export const clientRequest = (userData) => {
  console.log("sending request");

  const sendData: number[] = userData.split(",").map(Number);

  console.log(sendData);

  axios({
    method: "POST",
    url: "/odd-positive-average",
    data: sendData,
  })
    .then((res: any) => {
      console.log(`Average of all positive integers: ${res.data.average}`);
    })
    .catch((err: any) => {
      console.log("No odd positive integers were supplied.");
    });
};

export default clientRequest;
