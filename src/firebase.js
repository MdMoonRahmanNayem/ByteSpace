import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS4FhFSzsA4Uk3zoMq-kEF9h6tmAlhdhY",
  authDomain: "bytespace-9f68a.firebaseapp.com",
  projectId: "bytespace-9f68a",
  storageBucket: "bytespace-9f68a.firebasestorage.app",
  messagingSenderId: "481860593786",
  appId: "1:481860593786:web:ab1adf01e961c57d6233c3",
  measurementId: "G-R1BPKSBDQ4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;