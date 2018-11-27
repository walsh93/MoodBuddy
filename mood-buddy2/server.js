//Constants
const distDir = __dirname  + "/src/app";

//Dependancies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sessions = require('client-sessions');


var admin = require('firebase-admin');
const firebaseConfig = __dirname + "/mood-buddy-firebase-adminsdk-u7omy-5241f4a0c9.json"
var serviceAccount = require(firebaseConfig);


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Initialize Firebase and Firestore
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<Mood-Buddy>.firebaseio.com'
  });
const db = admin.firestore();


// Point static path to /local/path/to/CheckedIn/checkedIn/dist
app.use(express.static(__dirname));
app.use(express.static(distDir));

//Client sessions
app.use(sessions({
    cookieName: 'moodBuddySession',
    secret: 'largeunguessablestring',
    duration: 30 * 60 * 1000,
    cookie:{
        path: '/',
        ephemral:true,
        httpOnly:true
    }
}));

// GET requests sent when routing to the page
app.get('/', function(request, response) {
  response.sendFile(path.join(distDir, "/welcome-page/welcome-page.component.html"));
  console.log("GET /");
  console.log(request.headers);
  console.log("\n");
});

app.get('/welcome', function(request, response) {
    response.sendFile(path.join(distDir, "/welcome-page/welcome-page.component.html"));
    console.log("GET /welcome");
    console.log(request.headers);
    console.log("\n");
});

app.get('/signup', function(request, response) {
    response.sendFile(path.join(distDir, "/signup-page/signup-page.component.html"));
    console.log("GET /signup");
    console.log(request.headers);
    console.log("\n");
});

app.get('/signin', function(request,response){
    response.sendFile(path.join(distDir, "/signin-page/signin-page.component.html"));
    console.log("GET /signin");
    console.log(request.headers);
    console.log("\n");
});

app.get('/dashboard', function(request,response){
    response.sendFile(path.join(distDir, "/dashboard/dashboard.component.html"));
    console.log("GET /dashboard");
    console.log(request.headers);
    console.log("\n");
});

app.get('/log', function(request,response){
    response.sendFile(path.join(distDir, "/mood-log/mood-log.component.html"));
    console.log("GET /log");
    console.log(request.headers);
    console.log("\n");
});

app.get('/journal', function(request,response){
    response.sendFile(path.join(distDir, "/journal/journal.component.html"));
    console.log("GET /journal");
    console.log(request.headers);
    console.log("\n");
});

app.get('**', function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /");
    console.log(request.headers);
    console.log("\n");
});


// Get port from environment
const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server started on port " + port);