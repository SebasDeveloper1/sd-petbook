/* eslint-disable no-shadow */
import {
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { db } from 'fbase/firebase';

export const userExists = async ({ userUid: uid } = {}) => {
  try {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef);
    return res.exists();
  } catch (error) {
    return error;
  }
};

export const existsUsername = async ({ username } = {}) => {
  try {
    const users = [];
    const docsRef = collection(db, 'users');
    const q = query(docsRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
      users.push(document.data());
    });

    return users.length > 0 ? users[0]?.uid : null;
  } catch (error) {
    return error;
  }
};

export const registerNewUser = async (user = {}) => {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user?.uid);
    return await setDoc(docRef, user);
  } catch (error) {
    return error;
  }
};

export const updateUser = async (user = {}) => {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user?.uid);
    return await setDoc(docRef, user);
  } catch (error) {
    return error;
  }
};

export const getUserInfo = async ({ userUid: uid } = {}) => {
  try {
    const docRef = doc(db, 'users', uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {
    return error;
  }
};

export const createNewPet = async (newPet = {}) => {
  try {
    const docRef = collection(db, 'pets');
    return await addDoc(docRef, newPet);
  } catch (error) {
    return error;
  }
};

export const getPets = async (uid = '') => {
  try {
    const pets = [];
    const docRef = collection(db, 'pets');
    const q = query(docRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const pet = { ...doc.data() };
      pet.docId = doc.id;
      pets.push(pet);
    });

    return pets;
  } catch (error) {
    return error;
  }
};
