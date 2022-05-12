import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { ref, onUnmounted } from "vue";
const config = {
  apiKey: "AIzaSyBK-5MD7qGWtTlNKjoS-YE9DRicMaEzzjY",
  authDomain: "pet-sitters-69807.firebaseapp.com",
  databaseURL:
    "https://pet-sitters-69807-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pet-sitters-69807",
  storageBucket: "pet-sitters-69807.appspot.com",
  messagingSenderId: "440870005397",
  appId: "1:440870005397:web:4020e43d536c8eed83c99c",
  measurementId: "G-Z9EHP492D2",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  console.log(user);
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export default db;
