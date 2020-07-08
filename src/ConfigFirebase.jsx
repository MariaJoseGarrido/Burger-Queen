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
