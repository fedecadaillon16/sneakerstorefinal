// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // PEGÁ ACÁ TU CONFIGURACIÓN DE FIREBASE (la que copiaste al principio)
  apiKey: "AIzaSy...",  // ← tu apiKey real
  authDomain: "sneakerstore-2025.firebaseapp.com",
  projectId: "sneakerstore-2025",
  storageBucket: "sneakerstore-2025.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  // ← SOLO ESTA LÍNEA PARA db