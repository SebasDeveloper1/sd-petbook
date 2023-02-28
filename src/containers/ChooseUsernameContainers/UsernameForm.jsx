import React from 'react';
import { Typography, Button, TextField } from 'components/indexComponents';

export function UsernameForm({
  exeptionUser,
  handlerInput,
  handlerButton,
} = {}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-fit p-6 rounded-xl max-w-sm bg-white shadow-2xl z-10">
      <div className="flex flex-col justify-center items-center space-y-3 w-full text-center">
        <Typography
          variant="h3"
          styles="font-black sm:text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500"
          value="¡Hola!"
        />
        <Typography
          variant="p_base"
          styles="font-medium text-slate-600"
          value="Antes de continuar por favor  selecciona tu nombre de usuario."
        />
      </div>
      <div className="grid grid-cols-1 justify-center items-center space-y-3 w-full">
        <TextField
          placeholder="Nombre de usuario"
          status={exeptionUser ? 'warning' : 'normal'}
          exceptionMessage={exeptionUser}
          onChange={handlerInput}
        />
        <Button
          type="button"
          variant="contained"
          styles="mx-w-4"
          value="Registrar"
          onClick={handlerButton}
        />
      </div>
    </div>
  );
}
