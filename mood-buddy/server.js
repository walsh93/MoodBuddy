//Constants
const distDir = __dirname + "/dist/mood-buddy";

//Dependancies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to /local/path/to/CheckedIn/checkedIn/dist
app.use(express.static(__dirname));
app.use(express.static(distDir));

// GET requests sent when routing to the page
app.get('/', function(request, response) {
  response.sendFile(path.join(distDir, "index.html"));
  console.log("GET /");
  console.log(request.headers);
  console.log("\n");
});

app.get('/welcome', function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /");
    console.log(request.headers);
    console.log("\n");
});

app.get('/signup', function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /");
    console.log(request.headers);
    console.log("\n");
});

// Get port from environment
const port = process.env.PORT || 4200;

app.listen(port);
console.log("Server started on port " + port);