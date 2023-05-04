import React, { useEffect, useState } from 'react';
import { useGetUserState } from 'hooks/useGetUserState';
import {
  DashboardWrapper,
  UserInfoSection,
  LoadingSkeletonUserView,
} from 'containers/indexContainers';
import { Typography } from 'components/indexComponents';

export default function UserViewPage() {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  /*
    Stages:
    0: initiated
    1: loading
    2: login completed
    3: login but no username
    4: not logged
    5: exists usuername
  */
  const handlerUserLoggedIn = (user) => {
    setCurrentUser(user);
    setLoading(false);
    return 2;
  };

  const handlerUserNotRegistered = () =>
    // navigate('/login');
    3;

  const handlerUserNotLoggedIn = () =>
    // navigate('/login');
    4;

  const { getStateUser } = useGetUserState({
    onUserLoggedIn: handlerUserLoggedIn,
    onUserNotLoggedIn: handlerUserNotLoggedIn,
    onUserNotRegistered: handlerUserNotRegistered,
  });

  useEffect(() => {
    getStateUser();
  }, []);

  return (
    <DashboardWrapper>
      {loading ? (
        <LoadingSkeletonUserView />
      ) : (
        <section className="flex justify-center w-full min-h-screen py-12 bg-BeamsCover bg-contain bg-top bg-no-repeat">
          <div className="w-11/12">
            <section className="grid grid-cols-3 justify-center gap-6 divide-y md:divide-x md:divide-y-0">
              <div className="col-span-3 md:col-span-1 flex flex-col items-center gap-6">
                <UserInfoSection userInfo={currentUser} />
              </div>
              <div className="col-span-3 md:col-span-2 pt-6 md:pl-6 md:py-0">
                <Typography
                  variant="h4"
                  value="Mascotas registradas"
                  styles="pb-8 max-w-prose font-semibold text-slate-900 truncate"
                />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
                  {/* <PetCart />
                  <PetCart />
                  <PetCart />
                  <PetCart /> */}
                </ul>
              </div>
            </section>
          </div>
        </section>
      )}
    </DashboardWrapper>
  );
}
