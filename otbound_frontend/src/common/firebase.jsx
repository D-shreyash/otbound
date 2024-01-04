// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTvdyaIYZJdAlWJREUrsqPaoV77FpPIM",
  authDomain: "otbound-fd4c7.firebaseapp.com",
  projectId: "otbound-fd4c7",
  storageBucket: "otbound-fd4c7.appspot.com",
  messagingSenderId: "585805451864",
  appId: "1:585805451864:web:814003c936ab8d6b93f02d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
 let user = null;

 await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });
 return user;
};