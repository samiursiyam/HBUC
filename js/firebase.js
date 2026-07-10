// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvXH2mp-4zSI9117m17_fHvxGzStZX-bw",
  authDomain: "hbuc-c4b55.firebaseapp.com",
  databaseURL: "https://hbuc-c4b55-default-rtdb.firebaseio.com",
  projectId: "hbuc-c4b55",
  storageBucket: "hbuc-c4b55.firebasestorage.app",
  messagingSenderId: "164304359749",
  appId: "1:164304359749:web:da22015654f2dca461ae2c",
  measurementId: "G-GDHNLB8L8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Export
export { auth, db, storage };