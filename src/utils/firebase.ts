
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpnyPJy9fZT9il4dofc8OsMUc0FQrFBc",
  authDomain: "braideryweb.firebaseapp.com",
  projectId: "braideryweb",
  storageBucket: "braideryweb.appspot.com",
  messagingSenderId: "200045150665",
  appId: "1:200045150665:web:6d1c3f47f930472d87e818",
  measurementId: "G-1DL7W0FJ56"
};


let analytics: ReturnType<typeof getAnalytics> | undefined;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics only if in browser
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };