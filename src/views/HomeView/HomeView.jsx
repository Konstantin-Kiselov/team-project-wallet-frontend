import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Currency from '../../components/Currency/Currency';
import HomeTab from '../../components/HomeTab/HomeTab';

export default function HomeView() {
  return (
    <>
      <AppBar />
      <Currency />
      <HomeTab />
    </>
  );
}
