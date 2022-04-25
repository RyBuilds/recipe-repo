import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZMLDJiVjIVmSGMoaqxA9l2EYjnkg9PCw",
  authDomain: "recipe-ly.firebaseapp.com",
  databaseURL: "https://recipe-ly-default-rtdb.firebaseio.com",
  projectId: "recipe-ly",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
