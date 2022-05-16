import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { ref, onUnmounted } from "vue";
const config = {
  apiKey: "AIzaSyCaKVIpHo6BkgQAEf6g1hva5GMsstnZuz4",
  authDomain: "pet-sitter-e8ebe.firebaseapp.com",
  projectId: "pet-sitter-e8ebe",
  storageBucket: "pet-sitter-e8ebe.appspot.com",
  messagingSenderId: "221415322509",
  appId: "1:221415322509:web:0d1e69280a0cda97be43c4",
  measurementId: "G-161EJQ0Y9V",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
export const usersCollection = db.collection("users");

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
