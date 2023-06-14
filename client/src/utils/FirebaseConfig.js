import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBBt8winjUM5rbc0ewelz8ChzIjXx0-cZg",
    authDomain: "whatsapp-clone-9bb1c.firebaseapp.com",
    projectId: "whatsapp-clone-9bb1c",
    storageBucket: "whatsapp-clone-9bb1c.appspot.com",
    messagingSenderId: "65265836889",
    appId: "1:65265836889:web:9647222fe72e91cd26a248",
    measurementId: "G-ZYS0EZRYPX"
  };


  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app)