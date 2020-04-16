// Common utility functions shared between both CLI and GUI should go here...

var axios = require("axios");

export const clientResponse = () => {
  console.log("making request");

  axios
    .get("/odd-positive-average")
    .then((response) => {
      console.log(`Average of all positive integers (GET): ${response.data}`);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export default clientResponse;
