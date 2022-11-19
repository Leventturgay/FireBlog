import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/totastNotify";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQgfDixuusOyvhm9wLmhFJu06RTS9gBg",
  authDomain: "fireblog-82376.firebaseapp.com",
  projectId: "fireblog-82376",
  storageBucket: "fireblog-82376.appspot.com",
  messagingSenderId: "1005003693762",
  appId: "1:1005003693762:web:1f6ba54d0c736a88a6e55b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCrediantial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccessNotify("Register successfully!");
    console.log(userCrediantial);
  } catch (error) {
    alert(error.message);
  }
};
export const signIn = async (email, password, navigate) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Log in successfully!");
  } catch (error) {
    alert(error.message);
  }
};
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user);
      // ...
    } else {
      setCurrentUser(false);
      console.log("user sign out");
      // User is signed out
      // ...
    }
  });
};
export const logOut = () => {
  signOut(auth);
};
export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Log in successfully!");
      // ...
    })
    .catch((error) => {
      console.log(error);
      // ...
    });
};
export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};
