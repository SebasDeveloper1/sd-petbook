import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const SignoutPage = lazy(() => import('pages/SignoutPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const ChooseUserNamePage = lazy(() => import('pages/ChooseUserNamePage'));
const EditUserPage = lazy(() => import('pages/EditUserPage'));
const PetViewPage = lazy(() => import('pages/PetViewPage'));
const Page404 = lazy(() => import('pages/Page404'));

export function NavRoutes() {
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="login" element={<LoginPage />} />
            <Route exact path="dashboard" element={<DashboardPage />} />
            <Route
              exact
              path="choose-username"
              element={<ChooseUserNamePage />}
            />
            <Route exact path="p/:username/edit" element={<EditUserPage />} />
            <Route exact path="signout" element={<SignoutPage />} />
            <Route
              exact
              path="/u/:username/p/:petName"
              element={<PetViewPage />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}
