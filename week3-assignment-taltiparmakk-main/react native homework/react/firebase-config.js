// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT_GrhZl1bmhBjvPUMlddIMcH5WfqPXdw",
  authDomain: "denemeprj-722df.firebaseapp.com",
  projectId: "denemeprj-722df",
  storageBucket: "denemeprj-722df.appspot.com",
  messagingSenderId: "465285459750",
  appId: "1:465285459750:web:7690046c295013b2439be7",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
const background = firebase.functions();

export { fireStore, auth };
