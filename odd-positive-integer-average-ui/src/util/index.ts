// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

const clientRequest = (userData) => {
  const sendData: number[] = userData.split(",").map(Number);
  return axios({
    method: "POST",
    url: "/odd-positive-average",
    data: sendData,
  })
    .then((res: any) => {
      console.log(`Average of all positive integers: ${res.data.average}`);
      return showOutput(res.data.average);
    })
    .catch((err: any) => {
      console.log(err + "No odd positive integers were supplied.");
    });
};

const showOutput = (avgData) => {
  return avgData;
};
export default clientRequest;
