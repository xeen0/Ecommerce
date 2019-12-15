import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// unique key to connect with firestore
var config = {
  apiKey: "AIzaSyD5ll7OTXQAs-YARb7ZKjwn-P6O4mwOt2w",
  authDomain: "crown-ecomerce.firebaseapp.com",
  databaseURL: "https://crown-ecomerce.firebaseio.com",
  projectId: "crown-ecomerce",
  storageBucket: "",
  messagingSenderId: "932871776509",
  appId: "1:932871776509:web:dfe5df364f6577460d3694",
  measurementId: "G-H8Y78KLL7M"
};

//converting userprofile to firestore type, to ake sure no conflict arise
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = await userAuth;
    const createdAt = await new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error in creating user", err.message);
    }
  }
  return userRef;
};

//converting collection to firestore objects
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(document => {
    const { title, items } = document.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items
    };
  });
  return transformedCollections.reduce((accumulator, collections) => {
    accumulator[collections.title.toLowerCase()] = collections;
    return accumulator;
  }, {});
};

//check the current user, in order to maintain persistance in application
export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });
};

// initial connection with firestore
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ "prompt ": "Select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
