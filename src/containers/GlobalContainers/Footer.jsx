import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Typography } from 'components/indexComponents';

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-64 text-center bg-slate-800">
      <div className="flex flex-col items-center gap-3 w-11/12 ">
        <Typography
          variant="span_lg"
          value="PetBook ◉ @SebasDeveloper ◉ 2023"
          styles="inline-block font text-2xl tracking-tight text-blue-500 capitalize"
        />
        <Typography
          variant="span_base"
          value="Hecho con el 💙 por Sebastian Pedroza"
          styles="inline-block font-medium text-slate-50"
        />
        <div className="flex space-x-8 w-fit mt-8 text-3xl text-slate-400">
          <a
            href="https://github.com/SebasDeveloper1/sd-petbook"
            title="Github repository"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-50"
          >
            <FaGithub />
          </a>
          <a
            href="https://linktr.ee/sebasdeveloperoficial"
            title="@SebasDeveloper contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-50"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </footer>
  );
}
