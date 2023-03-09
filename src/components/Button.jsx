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
} = {}) {
  const buttonVariant = {
    contained:
      'group inline-flex items-center justify-center gap-2 rounded-md py-2.5 px-6 text-md font-medium text-white bg-blue-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-slate-100 hover:bg-blue-500 focus-visible:outline-blue-600',
    outlined:
      'group inline-flex items-center justify-center gap-2 rounded-md py-2.5 px-6 ring-1 text-md font-medium text-slate-700 ring-slate-200 bg-white focus:outline-none hover:text-slate-900 hover:ring-slate-300 hover:bg-blue-50 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    text: 'group inline-flex items-center justify-center gap-2 rounded-md py-2.5 px-6 text-md font-medium text-slate-700 bg-white focus:outline-none hover:text-slate-900 hover:bg-blue-50 focus-visible:outline-blue-600',
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
      <IconContext.Provider value={{ className: 'text-3xl' }}>
        {startIcon}
      </IconContext.Provider>
      {value}
      <IconContext.Provider value={{ className: 'text-3xl' }}>
        {endIcon}
      </IconContext.Provider>
    </button>
  );
}
