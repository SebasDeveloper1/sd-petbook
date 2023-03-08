import React from 'react';

export function PetList({ children }) {
  return (
    <ul className="mx-auto mt-16 grid w-11/12 grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </ul>
  );
}
