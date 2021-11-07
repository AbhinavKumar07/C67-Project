import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBSTqycxmKxnqTmAVcPku-sbWQu0qeUkPA",
    authDomain: "c67-voting-app.firebaseapp.com",
    projectId: "c67-voting-app",
    storageBucket: "c67-voting-app.appspot.com",
    messagingSenderId: "37600025298",
    appId: "1:37600025298:web:8fcae45625766ec1876b0b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();