import firebase from "firebase/app";
import "firebase/auth";

// Setup Firebase
const config = {
  apiKey: "AIzaSyBT0TICHe05c0lbkogpMFHBFbma_enFokU",
  authDomain: "interview-assist-1563177459840.firebaseapp.com",
  databaseURL: "https://interview-assist-1563177459840.firebaseio.com",
  projectId: "interview-assist-1563177459840",
  storageBucket: "",
  messagingSenderId: "864469301619",
  appId: "1:864469301619:web:5a0a25f218ba9939"
};

firebase.initializeApp(config);

export default {
  socialLoginWith(service) {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        var provider = new firebase.auth[`${service}AuthProvider`]();
        return firebase
          .auth()
          .signInWithPopup(provider)
          .then(function(result) {
            return result;
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
};
