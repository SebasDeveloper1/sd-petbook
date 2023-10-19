import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { IconButton } from 'components/indexComponents';
import defaultImage from 'images/loading-image.gif';

export function ImageViewDetails({
  imageInfo = {},
  handleCloseModal = null,
} = {}) {
  const { imageTitle, imageData = '' } = imageInfo;
  const [imageUrl, setImageUrl] = useState(defaultImage);

  useEffect(() => {
    if (imageData) setImageUrl(imageData);
  });

  return (
    <div
      className="overflow-hidden flex flex-col justify-center items-center w-fit max-w-[90%] h-fit max-h-[80vh] rounded-xl text-center bg-slate-800 focus"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <div className="z-10 flex justify-end w-full border-b border-slate-700">
        <IconButton
          type="button"
          variant="text"
          title="Cerrar"
          styles="w-14 h-14 text-slate-500 hover:text-sky-500"
          icon={<MdClose />}
          handleOnClick={handleCloseModal}
          ariaLabel="Cerrar"
        />
      </div>

      <div className="overflow-hidden w-fit bg-white shadow-lg">
        <img
          className="w-auto md:w-96 h-auto object-contain object-center"
          src={imageUrl}
          alt={imageTitle}
        />
      </div>
    </div>
  );
}
