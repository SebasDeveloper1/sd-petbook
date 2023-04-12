/* eslint-disable consistent-return */
import { setImageToStorage } from 'fbase/storageFunctions';

const readFileAsArrayBuffer = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (event) => {
      resolve(event.target.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });

export const imageLoadController = async ({
  fileInput = [],
  fileName = '',
  petId = '',
  type = '',
  uid = '',
} = {}) => {
  if (fileInput && fileInput.length > 0) {
    const imageData = await readFileAsArrayBuffer(fileInput[0]);
    const res = await setImageToStorage({
      file: imageData,
      fileName,
      petId,
      type,
      uid,
    });

    if (res) {
      return res.metadata.fullPath;
    }
  }
};
