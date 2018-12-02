//Constants
const distDir = __dirname + "/dist/mood-buddy";

 //Dependancies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sessions = require('client-sessions');
const userCollection = "users";


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
const settings = {
    timestampsInSnapshots:true
};
db.settings(settings);

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
  response.sendFile(path.join(distDir, "index.html"));
  console.log("GET /");
  console.log(request.headers);
  console.log("\n");
});
 app.get('/welcome', function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /welcome");
    console.log(request.headers);
    console.log("\n");
});
 app.get('/signup', function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /signup");
    console.log(request.headers);
    console.log("\n");
});
 app.get('/signin', function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /signin");
    console.log(request.headers);
    console.log("\n");
});
app.get('/dashboard/:uid', function(request,response){
    db.collection("users").doc(request.moodBuddySession.userID).get().then((doc)=>{
        if(!doc.exists){
            response.redirect("/page-not-found");
        } else {
            response.sendFile(path.join(distDir,"index.html"));
        }
    })
    console.log("GET /dashboard");
    console.log(request.headers);
    console.log("\n");
});
app.get('/journal', function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /journal");
    console.log(request.headers);
    console.log("\n");
});
app.get('/data-handler/:uid', function(request,response){
    response.json(request.moodBuddySession);
    console.log("GET /data-handler/:uid");
    console.log(request.headers);
    console.log("\n");
});
 app.get('**', function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /");
    console.log(request.headers);
    console.log("\n");
});
/**
 * This is where firebase post requests will be
 */
app.post('/signup', function(request, response) {
    console.log("You are signing up a student!");
    let responseTxt = "";
    db.collection(userCollection).where("email", "==", request.body.email).get().then(function(querySnapshot) {
        if (querySnapshot.size != 0) {
          responseTxt = "Email already associated with another account. Please sign in";
          response.status(401).send(responseTxt);
        } else if (request.body.password != request.body.confirm) {
          response.status(401).send("Passwords don't match. :\\");
        } else {
          console.log(`${request.body.color}`)
          db.collection(userCollection).add({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            buddy: request.body.buddy,
            color: request.body.color,
        }).then((docRef) => {
            const now = new Date()
            request.moodBuddySession.loginTime = now.getTime();
            request.moodBuddySession.userID = docRef.id;
            console.log("YEET");
            response.status(202).send(`/dashboard/${request.moodBuddySession.userID}`);
          }).catch((error)=>{
              response.status(500).send(`Error: ${error}`)
              console.log("Error adding to the database:",error);
          });
        }
      }).catch((error) => {
        response.status(500).send(`Error:${error}`);
        console.log("Error getting documents: ", error);
      });
});
 // Get port from environment
const port = process.env.PORT || 3000;
 app.listen(port);
console.log("Server started on port " + port);
