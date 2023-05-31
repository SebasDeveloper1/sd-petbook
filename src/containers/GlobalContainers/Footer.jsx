/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { Typography } from 'components/indexComponents';

export function Footer() {
  return (
    <footer className="w-full py-20 bg-slate-800">
      <div className="flex flex-col items-center gap-3 w-11/12 h-full mx-auto">
        <Typography
          variant="span_lg"
          value="PetBook ◉ @SebasDeveloper ◉ 2023"
          styles="inline-block font text-2xl tracking-tight text-sky-500 capitalize"
        />
        <Typography
          variant="span_base"
          value="Hecho con el 💙 por Sebastian Pedroza"
          styles="inline-block font-medium text-slate-400"
        />
        <div className="flex space-x-8 w-fit mt-8 text-3xl text-sky-400">
          <a
            href="https://github.com/SebasDeveloper1/sd-petbook"
            title="Github repository"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-50"
          >
            <IconContext.Provider value={{ className: 'text-4xl' }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </footer>
  );
}
