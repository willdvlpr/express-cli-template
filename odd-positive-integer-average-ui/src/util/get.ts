// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

export const clientResponse = () => {
  axios
    .get("/odd-positive-average")
    .then((response: any) => {
      console.log(`Average of all positive integers (GET): ${response.data}`);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export default clientResponse;
