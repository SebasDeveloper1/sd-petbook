import React, { useEffect, useRef } from 'react';
import QRCode from 'react-qr-code';
import { MdFileDownload, MdClose } from 'react-icons/md';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { Typography, Button, IconButton } from 'components/indexComponents';

export function QrLayout({ qrInfo = {}, handleCloseModal = null } = {}) {
  const downloadFile = (data, fileName) => {
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = data;
    downloadLink.click();
  };

  const onImageDownload = (format) => {
    const svgElement = document.getElementById('QRCode');
    const svgData = new XMLSerializer().serializeToString(svgElement);

    if (format === 'png') {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const img = new Image();
      img.onload = () => {
        canvas.width = img.width + 30; // Agregar 30 unidades de padding horizontal (izquierda y derecha)
        canvas.height = img.height + 30; // Agregar 30 unidades de padding vertical (arriba y abajo)
        context.fillStyle = '#ffffff'; // Establecer color de fondo blanco para el padding
        context.fillRect(0, 0, canvas.width, canvas.height); // Dibujar el fondo blanco
        context.drawImage(img, 15, 15, img.width, img.height); // Dibujar la imagen QR con padding de 15 unidades
        const pngFile = canvas.toDataURL('image/png');
        downloadFile(pngFile, `${qrInfo.petName}QR.png`);
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    } else if (format === 'svg') {
      const svgFile = `data:image/svg+xml;base64,${btoa(svgData)}`;
      downloadFile(svgFile, `${qrInfo.petName}QR.svg`);
    }
  };

  const myRefElement1 = useRef(null);
  useOnClickOutside(myRefElement1, handleCloseModal);

  useEffect(() => {
    if (myRefElement1.current) {
      myRefElement1.current.focus();
    }
  }, []);

  return (
    <article
      ref={myRefElement1}
      className="relative flex flex-col justify-center items-center gap-6 w-10/12 max-w-md h-fit p-6 pt-8 rounded-xl text-center bg-slate-800 shadow-2xl focus"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <IconButton
        type="button"
        variant="text"
        title="Cerrar"
        styles="absolute top-0 right-0 w-14 h-14 text-slate-500 hover:text-sky-500"
        icon={<MdClose />}
        handleOnClick={handleCloseModal}
        ariaLabel="Cerrar"
      />
      <img
        src={qrInfo?.petImage}
        alt={qrInfo?.petName}
        className="absolute top-0 left-1/2 -translate-y-7 -translate-x-7 w-14 aspect-square rounded-full object-cover object-center border-2 border-slate-800"
        loading="lazy"
      />
      <div className="flex flex-col justify-center items-center gap-1">
        <Typography
          variant="h5"
          styles="font-semibold text-white"
          value={qrInfo?.petName}
        />
        <Typography
          variant="p_sm"
          styles="w-5/6 font-normal text-slate-400"
          value="Escanea este QR para acceder fácilmente a la hoja de vida de tu mascota."
        />
      </div>
      <div className="w-1/2 aspect-square p-3 rounded-2xl shadow-lg bg-white">
        <QRCode id="QRCode" className="w-full h-full" value={qrInfo?.qrValue} />
      </div>
      <Typography
        variant="p_sm"
        styles="w-4/5 font-normal text-sky-400"
        value="Recuerda que si cambias el nombre de tu mascota o la reemplazas, el código QR también cambiará."
      />
      <div className="flex justify-center items-center gap-4 w-full mx-w-4 text-white">
        <Button
          type="button"
          variant="text"
          styles="w-full border border-slate-500 hover:bg-slate-700/50"
          value="SVG"
          startIcon={<MdFileDownload />}
          handleOnClick={() => {
            onImageDownload('svg');
          }}
          ariaLabel="Descargar SVG"
        />
        <Button
          type="button"
          variant="text"
          styles="w-full border border-slate-500 hover:bg-slate-700/50"
          value="PNG"
          startIcon={<MdFileDownload />}
          handleOnClick={() => {
            onImageDownload('png');
          }}
        />
      </div>
    </article>
  );
}
