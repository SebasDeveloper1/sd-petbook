import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'components/indexComponents';

export function PetCart() {
  return (
    <Link
      to="/home"
      className="Block max-w-md p-4 space-y-3 border border-gray-200 rounded-lg shadow-lg bg-white hover:bg-gray-100"
    >
      <div className="flex items-center space-x-4 w-full">
        <img
          className="w-14 h-14 rounded-full shadow-lg object-cover object-center"
          src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Bonnie"
        />
        <div className="w-full">
          <Typography
            variant="h5"
            value="Merlin"
            styles="text-2xl font-bold tracking-tight text-slate-900 truncate"
          />
          <Typography
            variant="span_sm"
            value="15/Julio/1999"
            styles="font-medium tracking-tight text-slate-500 truncate"
          />
        </div>
      </div>
      <div>
        <Typography
          variant="p_base"
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          styles="text-2xl font-medium tracking-tight text-slate-600 truncate"
        />
      </div>
    </Link>
  );
}
