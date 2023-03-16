/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/button-has-type */
import React from 'react';
import { IconContext } from 'react-icons';

export function IconButton({
  type = 'button',
  variant = 'contained',
  styles = '',
  icon = null,
  title = '',
  disabled = null,
  handlerOnClick = null,
} = {}) {
  const buttonVariant = {
    contained: 'button-contained rounded-full p-2.5',
    outlined: 'button-outlined rounded-full p-2.5',
    text: 'button-text rounded-full p-2.5',
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
      onClick={handlerOnClick}
      title={title}
    >
      <IconContext.Provider value={{ className: 'text-3xl' }}>
        {icon}
      </IconContext.Provider>
    </button>
  );
}
