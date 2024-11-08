import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyD4zuPQAmMmZmd_KHvJcWm8zMiaMQC27Iw",
        authDomain: "limaoh2.firebaseapp.com",
        projectId: "limaoh2",
        storageBucket: "limaoh2.firebasestorage.app",
        messagingSenderId: "721273686146",
        appId: "1:721273686146:web:577b210acdc49030fa0c9b",
        measurementId: "G-RJGV7678V9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const collectionRef = collection(db, "produtos");

const data = [];
console.log("caindo");

async function getAll() {
  try {
    const res = await getDocs(collectionRef);

    const data = res.docs.map((item) => ({
      ...item.data(),
    }));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAll();