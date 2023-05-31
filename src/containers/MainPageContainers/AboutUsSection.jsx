/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { AboutUs } from './AboutSection/AboutUs';
import { Advantages } from './AboutSection/Advantages';
import { HowWeWork } from './AboutSection/HowWeWork';

export function AboutUsSection() {
  return (
    <section className="overflow-hidden w-full bg-white">
      <AboutUs />
      <Advantages />
      <HowWeWork />
    </section>
  );
}
