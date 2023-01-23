import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeEUdlXLnRabRLfo63p_6jmTyAPmvXiH4",
  authDomain: "react-firebase-authentif.firebaseapp.com",
  projectId: "react-firebase-authentif",
  storageBucket: "react-firebase-authentif.appspot.com",
  messagingSenderId: "445418268398",
  appId: "1:445418268398:web:25e738fc02045612c075ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
