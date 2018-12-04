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
app.get('/', userNeedsToBeLoggedOut, function(request, response) {
  response.sendFile(path.join(distDir, "index.html"));
  console.log("GET /");
  console.log(request.headers);
  console.log("\n");
});
 app.get('/welcome', userNeedsToBeLoggedOut, function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /welcome");
    console.log(request.headers);
    console.log("\n");
});
 app.get('/signup', userNeedsToBeLoggedOut, function(request, response) {
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /signup");
    console.log(request.headers);
    console.log("\n");
});
 app.get('/signin', userNeedsToBeLoggedOut, function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /signin");
    console.log(request.headers);
    console.log("\n");
});
app.get('/dashboard/:uid', userNeedsToBeLoggedIn, function(request,response){
    db.collection("users").doc(request.moodBuddySession.userID).get().then((doc)=>{
        if(!doc.exists){
            response.redirect("/page-not-found");
        } else {
            //response.json(doc.data);
            response.sendFile(path.join(distDir,"index.html"));
        }
    })
    console.log("GET /dashboard");
    console.log(request.headers);
    console.log("\n");
});
app.get('/journal', userNeedsToBeLoggedIn, function(request,response){
    response.sendFile(path.join(distDir, "index.html"));
    console.log("GET /journal");
    console.log(request.headers);
    console.log("\n");
});
app.get('/data-handler/:uid', function(request,response){
    db.collection("users").doc(request.moodBuddySession.userID).get().then((doc)=>{
        if(!doc.exists){
            response.redirect("/page-not-found");
        } else {
            response.json(doc.data());
        }
    });
    //response.json(request.moodBuddySession);
    console.log("GET /data-handler/:uid");
    console.log(request.headers);
    console.log("\n");
//    console.log(doc.data.name);
  //  console.log("\n");

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
    let responseTxt = "";
    db.collection(userCollection).where("email", "==", request.body.email).get().then(function(querySnapshot) {
        if (querySnapshot.size != 0) {
          responseTxt = "Email already associated with another account. Please sign in";
          response.status(401).send(responseTxt);
        } else if (request.body.password != request.body.confirm) {
          response.status(401).send("Passwords don't match. :\\");
        } else {
          db.collection(userCollection).add({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            buddy: request.body.buddy,
            color: request.body.color,
        }).then((docRef) => {
            //Set Session Data //
            request.moodBuddySession.name = request.body.name;
            request.moodBuddySession.email = request.body.email;
            request.moodBuddySession.buddy = request.body.buddy;
            request.moodBuddySession.color = request.body.color;
            request.moodBuddySession.errorHasOccured = false;
            request.moodBuddySession.errorMessage = "";
            const now = new Date()
            request.moodBuddySession.loginTime = now.getTime();
            request.moodBuddySession.userID = docRef.id;
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

app.post('/signin', function (request, response) {
    let responseTxt = "";
    db.collection(userCollection).where("email", "==", request.body.email).get().then(function(querySnapshot) {
      if (querySnapshot.size == 0) {
        request.moodBuddySession.errorHasOccured = true;
        request.moodBuddySession.errorMessage = `This ${request.body.email} is not associated with an account.`;
        response.status(401).send('This email does not exist in our database');
      } else {
        const doc = querySnapshot.docs[0]
        const docData = doc.data();
        if (request.body.password == docData.password) {
          // Set session data
          request.moodBuddySession.name = docData.name;
          request.moodBuddySession.email = docData.email;
          request.moodBuddySession.buddy = docData.buddy;
          request.moodBuddySession.color = docData.color;
          request.moodBuddySession.userID = doc.id;
          request.moodBuddySession.errorHasOccured = false;
          request.moodBuddySession.errorMessage = "";
  
          // Construct route
          const route = `/dashboard/${request.moodBuddySession.userID}`;
          response.status(202).send(route);
        } else {
          request.moodBuddySession.errorHasOccured = true;
          request.moodBuddySession.errorMessage = "Your password was incorrect.";
          response.status(500).send('Your Password does not match');
        }
      }
    }).catch((error) => {
      response.status(500).send(`Error:${error}`);
      console.log("Error getting documents: ", error);
    });
  });

app.post(`/dashboard/:uid`, function(request,response){
    if(request.body.sign_out= "sign_out"){
        request.moodBuddySession.reset();
        response.redirect("/welcome");
    }
});
//*User Helper Functions*//

function userNeedsToBeLoggedIn(request,response,next){
    const loggedIn = request.moodBuddySession.userID;
    if(!loggedIn){
        response.redirect("/welcome");
    } else {
        next();
    }
}
function userNeedsToBeLoggedOut(request,response,next){
    const loggedIn = request.moodBuddySession.userID;
    if(loggedIn){
        response.redirect(`/dashboard/${request.moodBuddySession.docID}`);
    } else {
        next();
    }
}
 // Get port from environment
const port = process.env.PORT || 3000;
 app.listen(port);
console.log("Server started on port " + port);
