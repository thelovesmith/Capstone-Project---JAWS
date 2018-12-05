import firebase from 'firebase/app';
import 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

// Initialize Firebase
var config = {
  apiKey: `${process.env.REACT_APP_POPPIN_POTLUCK_API_KEY}`,
  authDomain: "jaws-d6870.firebaseapp.com",
  databaseURL: "https://jaws-d6870.firebaseio.com",
  projectId: "jaws-d6870",
  storageBucket: "jaws-d6870.appspot.com",
  messagingSenderId: "939003764479"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

const db = firebase.firestore();
export default db;