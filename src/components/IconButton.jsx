/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/button-has-type */
import React from 'react';
import { IconContext } from 'react-icons';

export function IconButton({
  type = 'button',
  variant = 'contained',
  styles = '',
  title = '',
  ariaLabel = '',
  icon = null,
  disabled = null,
  handleOnClick = null,
  refElement = null,
} = {}) {
  const buttonVariant = {
    contained: 'button-contained rounded-full p-2.5',
    outlined: 'button-outlined rounded-full p-2.5',
    text: 'button-text rounded-full p-2.5',
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
      title={title}
      aria-label={ariaLabel}
    >
      <IconContext.Provider value={{ className: 'text-3xl' }}>
        {icon}
      </IconContext.Provider>
    </button>
  );
}
