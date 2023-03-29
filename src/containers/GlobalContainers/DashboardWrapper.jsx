import React from 'react';
import { Header, Footer } from 'containers/indexContainers';

export function DashboardWrapper({ children } = {}) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <Footer className="" />
    </>
  );
}
