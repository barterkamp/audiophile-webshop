import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// for setting up database with users
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI87FZclfpc71qeaDoiGnCUdmmPF6nNTk",
  authDomain: "audiophile-webshop.firebaseapp.com",
  projectId: "audiophile-webshop",
  storageBucket: "audiophile-webshop.appspot.com",
  messagingSenderId: "717796627017",
  appId: "1:717796627017:web:35e70257c05f9c16e6a598",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

////////////////////////////
// authentication section //
////////////////////////////

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  else {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  else {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const signOutUser = async () => await signOut(auth);

//////////////////////
// database section //
//////////////////////

export const database = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  const userDocReference = doc(database, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocReference);

  // if the user exists return userDocReferencedoes, if not set the document with the data from userAuth in the database collection

  if (userSnapshot.exists()) {
    return userDocReference;
  } else {
    const { displayName, email } = userAuth;
    const date = new Date();

    try {
      await setDoc(userDocReference, {
        displayName,
        email,
        date,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating a user", error.message);
    }
  }
};
