/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';

export function Button({
  type = 'button',
  variant = 'contained',
  styles = '',
  value = '',
  startIcon = null,
  endIcon = null,
  disabled = null,
  onClick = null,
}) {
  const buttonVariant = {
    contained:
      'group inline-flex items-center justify-center rounded-md py-2.5 px-6 text-md font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    outlined:
      'group inline-flex items-center justify-center rounded-md py-2.5 px-6 ring-1 text-md font-medium focus:outline-none ring-slate-200 text-slate-700 bg-white hover:text-slate-900 hover:ring-slate-300 hover:bg-blue-50 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    text: 'group inline-flex items-center justify-center rounded-md py-2.5 px-6 text-md font-medium focus:outline-none text-slate-700 bg-white hover:text-slate-900 hover:bg-blue-50 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600',
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={
        disabled
          ? `${buttonVariant[variant]} ${styles} opacity-50`
          : `${buttonVariant[variant]} ${styles}`
      }
      onClick={onClick}
    >
      <IconContext.Provider value={{ className: 'text-3xl mr-3' }}>
        {startIcon}
      </IconContext.Provider>
      {value}
      <IconContext.Provider value={{ className: 'text-3xl ml-3' }}>
        {endIcon}
      </IconContext.Provider>
    </button>
  );
}
