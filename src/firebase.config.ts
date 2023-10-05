import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyWhGBTTQNd1YWr4gjXAslvmLDLoppYug",
  authDomain: "food-delivery-b045a.firebaseapp.com",
  // databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  projectId: "food-delivery-b045a",
  storageBucket: "food-delivery-b045a.appspot.com",
  messagingSenderId: "314669461773",
  appId: "1:314669461773:web:b6c2161f4f6c5b5f9e4044",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
