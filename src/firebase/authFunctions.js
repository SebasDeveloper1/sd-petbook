/* eslint-disable no-unused-vars */
import { auth } from 'fbase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    return error;
  }
};
