import app from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'




export const firebaseConfig = {
    apiKey: "AIzaSyCLgDJnX5mAN0ScMagU1xVAY4AnZ0lmatQ",
    authDomain: "burger-queen-a8441.firebaseapp.com",
    databaseURL: "https://burger-queen-a8441.firebaseio.com",
    projectId: "burger-queen-a8441",
    storageBucket: "burger-queen-a8441.appspot.com",
    messagingSenderId: "857096254623",
    appId: "1:857096254623:web:162e71df636d211da2deaa",
    measurementId: "G-PKBPCWLX3H"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  //const db = app.firestore();
  //const auth = app.auth();
  //export { db, auth }


  //FUNCION OFFLINE

  FirebaseDatabase.getInstance().setPersistenceEnabled(true);


  firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully




//TAMAÑO CACHE

// The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()
  

  
//SUPERVICION DE DATOS OFFLINE

db.collection("cities").where("state", "==", "CA")
  .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
              console.log("New city: ", change.doc.data());
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
  });
 