import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlCpiE7WV9TFnB-EAyPcpIfNmgoeOZY7g",
    authDomain: "image-community-ba498.firebaseapp.com",
    projectId: "image-community-ba498",
    storageBucket: "image-community-ba498.appspot.com",
    messagingSenderId: "842473603906",
    appId: "1:842473603906:web:3419a5779c955ccba8bedb",
    measurementId: "G-4NSJLBHWG5",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
