/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';

export function Button({
  type = 'button',
  variant = 'contained',
  styles = '',
  value = '',
  ariaLabel = '',
  startIcon = null,
  endIcon = null,
  disabled = null,
  handleOnClick = null,
  refElement = null,
} = {}) {
  const buttonVariant = {
    contained: 'button-contained rounded-xl py-2.5 px-6',
    outlined: 'button-outlined rounded-xl py-2.5 px-6',
    text: 'button-text rounded-xl py-2.5 px-6',
  };
  return (
    <button
      ref={refElement}
      type={type}
      disabled={disabled}
      className={
        disabled
          ? `${buttonVariant[variant]} ${styles} opacity-50`
          : `${buttonVariant[variant]} ${styles}`
      }
      onClick={handleOnClick}
      aria-label={ariaLabel}
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
