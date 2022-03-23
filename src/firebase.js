import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf1gM8qwFSVZVsClRASDFhPcjW9nSfNJc",
  authDomain: "social-media-website-8b242.firebaseapp.com",
  projectId: "social-media-website-8b242",
  storageBucket: "social-media-website-8b242.appspot.com",
  messagingSenderId: "836223251997",
  appId: "1:836223251997:web:4a428a7a22cac7aa2ff8f4"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth }