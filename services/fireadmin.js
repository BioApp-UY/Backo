
var admin = require("firebase-admin");

var serviceAccount = require("../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bioapp-uruguay.firebaseio.com"
});


module.exports = { admin } ;