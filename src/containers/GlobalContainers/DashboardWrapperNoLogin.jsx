import React from 'react';
import { HeaderNoLogin, Footer } from 'containers/indexContainers';

export function DashboardWrapperNoLogin({ children } = {}) {
  return (
    <>
      <HeaderNoLogin />
      <main className="w-full">{children}</main>
      <Footer className="" />
    </>
  );
}
