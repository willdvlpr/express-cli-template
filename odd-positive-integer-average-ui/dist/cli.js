#!/usr/bin/env npx ts-node
"use strict";
var axios = require("axios");
// store input localhost path
var path = process.argv[2];
var array = process.argv[3];
// parse input string as JSON object and set as array of type 'number'
var arr_data = JSON.parse(process.argv[3]);
axios({
    method: "POST",
    url: path + "/odd-positive-average",
    data: arr_data
})
    .then(function (res) {
    console.log("Average of all positive integers: " + res.data.average);
})["catch"](function (err) {
    if (err.response.status == 400) {
        console.log("No odd positive integers were supplied.");
    }
});
//# sourceMappingURL=cli.js.map