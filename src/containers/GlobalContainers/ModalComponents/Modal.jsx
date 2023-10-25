import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useEvents } from 'hooks/useEvents';

export function Modal({ children } = {}) {
  const { stateEvents } = useEvents();
  const { openModal } = stateEvents;

  useEffect(() => {
    document.getElementById('modal').focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal?.modalState]);

  return createPortal(
    <section className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-slate-900/20 backdrop-blur-sm z-50">
      {children}
    </section>,
    document.getElementById('modal')
  );
}
