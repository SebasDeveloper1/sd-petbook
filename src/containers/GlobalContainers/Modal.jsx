import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children } = {}) {
  useEffect(() => {
    document.getElementById('modal').focus();
  }, []);

  return createPortal(
    <section className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-900/70 z-50">
      {children}
    </section>,
    document.getElementById('modal')
  );
}
