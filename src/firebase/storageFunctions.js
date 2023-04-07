import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from 'fbase/firebase';

export const setImageToStorage = async ({
  uid = '',
  fileName = '',
  file = '',
} = {}) => {
  try {
    const imageRef = ref(storage, `images_${uid}/${fileName}`);
    const resUpload = await uploadBytes(imageRef, file);
    return resUpload;
  } catch (error) {
    return error;
  }
};

export const getStorageImageUrl = async ({ path = '' } = {}) => {
  try {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    return error;
  }
};
