import React from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children } = {}) {
  return createPortal(
    <section className="absolute top-0 left-0 w-full h-screen z-50 bg-red-600">
      {children}
    </section>,
    document.getElementById('modal')
  );
}
