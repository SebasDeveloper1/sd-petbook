import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { storage } from 'fbase/firebase';

export const setImageToStorageTypes = {
  USER: 'user',
  PET: 'pet',
  PET_OWNER: 'petOwner',
  VACCINE: 'vaccine',
};

export const setImageToStorage = async ({
  file = '',
  fileName = '',
  petId = '',
  type = '',
  uid = '',
} = {}) => {
  try {
    let imageRef = '';
    if (type === setImageToStorageTypes.USER) {
      imageRef = ref(storage, `images_${uid}/${fileName}`);
    }
    if (type === setImageToStorageTypes.PET) {
      imageRef = ref(
        storage,
        `images_${uid}/pet_${fileName}/petPhoto_${fileName}`
      );
    }
    if (type === setImageToStorageTypes.PET_OWNER) {
      imageRef = ref(
        storage,
        `images_${uid}/pet_${petId}/petOwnerPhoto_${fileName}`
      );
    }
    if (type === setImageToStorageTypes.VACCINE) {
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
export const deleteStorageImage = async ({ path = '' } = {}) => {
  try {
    const imageRef = ref(storage, path);
    return await deleteObject(imageRef);
    // Archivo eliminado exitosamente
  } catch (error) {
    return error;
  }
};
