// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvJiTGfvrcfKEiN-Xk7B6_v8oYcBDvQ7s",
    authDomain: "user-email-password-auth-38b07.firebaseapp.com",
    projectId: "user-email-password-auth-38b07",
    storageBucket: "user-email-password-auth-38b07.appspot.com",
    messagingSenderId: "825767728585",
    appId: "1:825767728585:web:b86ece3820f42f56124418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;