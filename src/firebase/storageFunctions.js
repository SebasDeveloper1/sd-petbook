import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from 'fbase/firebase';

export const setImageToStorage = async ({
  file = '',
  fileName = '',
  petId = '',
  type = '',
  uid = '',
} = {}) => {
  try {
    let imageRef = '';
    if (type === 'user') {
      imageRef = ref(storage, `images_${uid}/${fileName}`);
    }
    if (type === 'pet') {
      imageRef = ref(
        storage,
        `images_${uid}/pet_${fileName}/petPhoto_${fileName}`
      );
    }
    if (type === 'vaccine') {
      imageRef = ref(
        storage,
        `images_${uid}/pet_${petId}/vaccines/${fileName}`
      );
    }

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
