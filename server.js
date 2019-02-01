const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


// Database Requirements
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myfinfriend");
const db = require("./models");

// Getting Users
app.get("/users", function (req, res) {
  console.log("All users route was hit!");
  // Getting all holdings and send them back in a json blob
  db.User
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})
// Getting holdings
app.get("/holdings", function (req, res) {
  console.log("All holdings route was hit!");
  // Getting all holdings and send them back in a json blob
  db.Holding
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
