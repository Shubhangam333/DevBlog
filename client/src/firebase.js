import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dev-blog-5d92a.firebaseapp.com",
  projectId: "dev-blog-5d92a",
  storageBucket: "dev-blog-5d92a.appspot.com",
  messagingSenderId: "544284646543",
  appId: "1:544284646543:web:6ef6e0cea6f9530ec524fa",
};

export const app = initializeApp(firebaseConfig);
