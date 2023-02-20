import {
  getFirestore,
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { app } from 'fbase/firebase';

const db = getFirestore(app);
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
