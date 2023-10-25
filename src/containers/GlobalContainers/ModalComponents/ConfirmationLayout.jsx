import React from 'react';
import { Typography, Button } from 'components/indexComponents';

export function ConfirmationLayout({ title, paragraph, handlerButton } = {}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-fit p-6 rounded-md max-w-sm text-center bg-white shadow-2xl z-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Typography
          variant="h4"
          styles="font-bold text-slate-900"
          value={title}
        />
        <span className="block text-5xl">🎉</span>
        <Typography
          variant="p_base"
          styles="font-medium text-slate-600"
          value={paragraph}
        />
      </div>

      <Button
        type="button"
        variant="contained"
        styles="w-full mx-w-4"
        value="Continuar"
        handleOnClick={handlerButton}
      />
    </div>
  );
}
