import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHQohHyMMIjl5Q9E4xlM5EpiyXuLag89E",
  authDomain: "offices-app.firebaseapp.com",
  projectId: "offices-app",
  storageBucket: "offices-app.appspot.com",
  messagingSenderId: "427868697645",
  appId: "1:427868697645:web:896c31b1607f60f35034a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 5001);


export { db };