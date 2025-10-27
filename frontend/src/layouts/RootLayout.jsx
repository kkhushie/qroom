import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../components/Loading';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <Loading />}
      <Outlet />
    </>
  );
};

export default RootLayout;
