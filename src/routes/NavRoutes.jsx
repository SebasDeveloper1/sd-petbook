import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';
import {
  HomePage,
  LoginPage,
  SignoutPage,
  DashboardPage,
  ChooseUserNamePage,
  EditUserPage,
  PetViewPage,
  Page404,
} from 'pages/indexPages';

export function NavRoutes() {
  return (
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
  );
}
