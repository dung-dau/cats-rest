import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccGFua2gH1fIL8w64DP61Vd59kd2HtNU",
  authDomain: "linkedin-clone-391e0.firebaseapp.com",
  projectId: "linkedin-clone-391e0",
  storageBucket: "linkedin-clone-391e0.appspot.com",
  messagingSenderId: "947857127300",
  appId: "1:947857127300:web:9e6db1cb636d933f998fd1"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth }