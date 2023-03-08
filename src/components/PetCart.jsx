import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'components/indexComponents';

export function PetCart() {
  return (
    <Link
      to="/home"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <div>
        <Typography
          variant="h4"
          value="Merlin"
          styles="mb-2 text-2xl font-bold tracking-tight text-slate-900"
        />
        <Typography
          variant="p_base"
          value="Here are the biggest enterprise"
          styles="mb-2 text-2xl font-nor tracking-tight text-slate-600"
        />
      </div>
    </Link>
  );
}
