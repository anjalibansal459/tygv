import firebase from "firebase";
//require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyA-7DvYFgdVKaZXZVyfoN5ybpH4mJ-wDEI",
  authDomain: "class-71-eba59.firebaseapp.com",
  projectId: "class-71-eba59",
  storageBucket: "class-71-eba59.appspot.com",
  messagingSenderId: "498006343961",
  appId: "1:498006343961:web:3dff922f75db3ce2da0588"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()