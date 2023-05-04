import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ScrollWrapper = React.lazy(() => import('utils//ScrollWrapper'));
const MainPage = lazy(() => import('pages/MainPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ChooseUserNamePage = lazy(() => import('pages/ChooseUserNamePage'));
const UserViewPage = lazy(() => import('pages/UserViewPage'));
const EditUserPage = lazy(() => import('pages/EditUserPage'));
const CreatePetPage = lazy(() => import('pages/CreatePetPage'));
const PetViewPage = lazy(() => import('pages/PetViewPage'));
const Page404 = lazy(() => import('pages/Page404'));

export function NavRoutes() {
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <ScrollWrapper>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="login" element={<LoginPage />} />
            <Route exact path="home" element={<HomePage />} />
            <Route
              exact
              path="choose-username"
              element={<ChooseUserNamePage />}
            />
            <Route exact path="p/:username" element={<UserViewPage />} />
            <Route exact path="p/edit" element={<EditUserPage />} />
            <Route exact path="pet/:petName" element={<PetViewPage />} />
            <Route exact path="create-pet" element={<CreatePetPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ScrollWrapper>
      </BrowserRouter>
    </Suspense>
  );
}
