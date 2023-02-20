/* eslint-disable no-unused-vars */
import { app } from 'fbase/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    return error;
  }
};
