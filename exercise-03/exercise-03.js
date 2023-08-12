// Import packages, perform initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing to the "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Whenever a GET request is made to /gimmeJSON, send some JSON back to the client
// representing a person.
app.get("/gimmeJSON", function (req, res) {

    // The JSON object to return
    const person = {
        name: "Sebastian Thomas",
        address: "102 Old Street",
        city: "London",
        country: "United Kingdom"
    };

    // Send the JSON back to the client
    res.json(person);
});

app.get("/randomNumber", function (req, res) {

    // The JSON object to return

    let min = 0;
    let max = 100;
    let randomNumber =
        Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    const randomNumberjson= {
        number: randomNumber
    };

    // Send the JSON back to the client
    res.json(randomNumberjson);
});

// Start the webapp running
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});