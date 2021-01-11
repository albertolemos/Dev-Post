import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAZAVkX58up2hyUb8eqxa6ZfywckT3aGkA",
    authDomain: "vueapp-de9d9.firebaseapp.com",
    projectId: "vueapp-de9d9",
    storageBucket: "vueapp-de9d9.appspot.com",
    messagingSenderId: "705745206078",
    appId: "1:705745206078:web:755c41e034c9e8bbc20a6f",
    measurementId: "G-G24BJYL8G1"
  };
  
  firebase.initializeApp(firebaseConfig);

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;