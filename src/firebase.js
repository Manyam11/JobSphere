import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbPLTZCRcHcBkTggcWUV3iJIZzvxMkRRc",
  authDomain: "jobsphere-80789.firebaseapp.com",
  projectId: "jobsphere-80789",
  storageBucket: "jobsphere-80789.firebasestorage.app",
  messagingSenderId: "623698633377",
  appId: "1:623698633377:web:514de0bb4c3eb7636546e0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);