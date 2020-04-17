// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

const clientRequest = (userData: any) => {
  // split input string and map to numbers in new array of user data
  const sendData: number[] = userData.split(",").map(Number);
  // Post request to server port 5001
  axios({
    method: "POST",
    url: "/odd-positive-average",
    data: sendData,
  })
    .then((res: any) => {
      console.log(`Average of all positive integers: ${res.data.average}`);
    })
    .catch((err: any) => {
      if (err.response.status === 400) {
        console.log(err + " No odd positive integers were supplied.");
      }
    });
};

export default clientRequest;
