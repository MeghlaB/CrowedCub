
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXTNYbmCHLXYVQ75YM3XvzLBnM_ZjKyuc",
  authDomain: "assignment-10tulip.firebaseapp.com",
  projectId: "assignment-10tulip",
  storageBucket: "assignment-10tulip.firebasestorage.app",
  messagingSenderId: "931342125995",
  appId: "1:931342125995:web:3b9aa4c9fb27517f4020ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth