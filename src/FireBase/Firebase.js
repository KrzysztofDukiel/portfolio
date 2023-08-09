// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDInwGDeE4FG9haK5vWJDo-dIRXHiQl3q4",
    authDomain: "fir-86c8f.firebaseapp.com",
    projectId: "fir-86c8f",
    storageBucket: "fir-86c8f.appspot.com",
    messagingSenderId: "527544055634",
    appId: "1:527544055634:web:448886d41750e845ff6c8b",
    measurementId: "G-GEX3KXCM4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth