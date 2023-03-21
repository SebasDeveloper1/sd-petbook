import React from 'react';
import { DashboardWrapper, EditForm } from 'containers/indexContainers';

export default function EditUserPage() {
  return (
    <DashboardWrapper>
      <div className="flex justify-center w-full h-full py-12 bg-BeamsCover bg-contain bg-top bg-no-repeat">
        <EditForm />
      </div>
    </DashboardWrapper>
  );
}
