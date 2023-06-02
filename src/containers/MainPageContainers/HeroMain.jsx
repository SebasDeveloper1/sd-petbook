import React from 'react';
import { Typography, Logo } from 'components/indexComponents';
import imageHero1 from 'images/main-hero1.webp';
import imageHero2 from 'images/main-hero2.webp';

export function HeroMain() {
  return (
    <section className="overflow-hidden bg-slate-900">
      <div className="flex flex-col md:flex-row justify-center items-center min-h-[50vh] md:min-h-[80vh] py-8 bg-BlurCyan2 bg-cover bg-center">
        <div className="w-full md:w-1/4 md:h-[60vh]">
          <img
            className="hidden md:block w-full h-full object-cover object-right animate-slide-in-right"
            src={imageHero1}
            alt="hero"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <Typography
            variant="h2"
            value="Bienvenido a"
            styles="mb-2 text-2xl font-bold tracking-tight text-white"
          />
          <Logo className="w-72 md:w-96 mb-10" alt="PetBook" />
          <Typography
            variant="span_lg"
            value="¡Amor y cuidado para tus peluditos al alcance de tu mano!"
            styles="w-10/12 mb-8 font-medium tracking-tight text-slate-200 text-center"
          />
        </div>

        <div className="w-full md:w-1/4 md:h-[60vh]">
          <img
            className="w-full h-full object-cover object-left animate-slide-in-left"
            src={imageHero2}
            alt="hero"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
