// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const distDir = __dirname + "/dist/mood-buddy";

const sessions = require('client-sessions');

var admin = require('firebase-admin');
const firebaseConfig = __dirname + "/mood-buddy-firebase-adminsdk-u7omy-5241f4a0c9.json"
var serviceAccount = require(firebaseConfig);

// Get our API routes
const api = require('./server/routes/api');

const app = express();

//Initialize Firebase and Firestore
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<Mood-Buddy>.firebaseio.com'
  });
const db = admin.firestore();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Client sessions
app.use(sessions({
    cookieName: 'moodBuddySession',
    secret: 'largeunguessablestring',
    duration: 30 * 60 * 1000,
    cookie: {
        path: '/',
        ephemeral: true,
        httpOnly: true,
    }
}));

// Point static path to dist
app.use(express.static(distDir));

//Routes


// Set our api routes
app.use('/api', api);
//app.use(c.signup-page, signupRouter);

console.log(distDir);
// Catch all other routes and return the index file
app.get('/', function(request, response) {
  response.sendFile(path.join(distDir, "index.html"));
  console.log("GET /");
  console.log(request.headers);
  console.log("\n");
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(`Server running on localhost:${port}`));