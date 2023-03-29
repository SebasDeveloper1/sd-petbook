import React from 'react';
import {
  DashboardWrapper,
  HeroSection,
  VaccinesSection,
  OwnerInfoSection,
} from 'containers/indexContainers';

export default function PetViewPage() {
  return (
    <DashboardWrapper>
      <section className="flex justify-center w-full">
        <div className="overflow-hidden relative flex justify-center w-full h-fit bg-BeamsCover bg-contain bg-no-repeat">
          <div className="z-10 w-full">
            <HeroSection />
            <VaccinesSection />
            <OwnerInfoSection />
          </div>
        </div>
      </section>
    </DashboardWrapper>
  );
}
