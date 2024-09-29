// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { isSupported } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIcm5Hcs-V4XiD3Rqcgyxga0VwxssXGSo',
  authDomain: 'braidery-fa8b7.firebaseapp.com',
  projectId: 'braidery-fa8b7',
  storageBucket: 'braidery-fa8b7.appspot.com',
  messagingSenderId: '377676144588',
  appId: '1:377676144588:web:3ac1e3f52ecbbde9024769',
  measurementId: 'G-QXK4VE9FND'
};

let analytics: ReturnType<typeof getAnalytics> | undefined;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics only if in browser
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
