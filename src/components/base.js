import Rebase from 're-base';
import firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: "AIzaSyBx0ZdIwawIP8a_EeXXhiklxKN6sbiBLyM",
  authDomain: "antique-taco-group-project.firebaseapp.com",
  databaseURL: "https://antique-taco-group-project.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();