import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Currency from '../../components/Currency/Currency';
import ModalAddTransaction from '../../components/ModalAddTransaction';

export default function HomeView() {
  return (
    <>
      <AppBar />
      <Currency />
      <ModalAddTransaction />
    </>
  );
}
