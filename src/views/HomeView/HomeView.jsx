import React, { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Currency from '../../components/Currency/Currency';
import ButtonAddTransaction from '../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import Modal from '../../components/Modal';
import ModalContainer from '../../components/ModalContainer';
import Toggle from '../../components/Toggle';
import ModalForm from '../../components/ModalForm';
import AddTransactContainer from '../../components/AddTransactContainer';

export default function HomeView() {
  const [modalActive, setModalActive] = useState(false);

  const windowInnerWidth = document.documentElement.clientWidth;
  console.log('windowInnerWidth', windowInnerWidth);

  return (
    <>
      <AppBar />
      {!modalActive && windowInnerWidth < 768 && <Currency />}
      {windowInnerWidth >= 768 && <Currency />}

      <ButtonAddTransaction onClick={() => setModalActive(true)} />

      {modalActive && windowInnerWidth < 768 && (
        <AddTransactContainer title={'Добавить транзакцию'}>
          {/* <Toggle /> */}
          <ModalForm onClick={setModalActive} />
        </AddTransactContainer>
      )}

      {modalActive && windowInnerWidth >= 768 && (
        // <ModalAddTransaction active={modalActive} setActive={setModalActive} />
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalContainer title={'Добавить транзакцию'}>
            {/* <Toggle /> */}
            <ModalForm onClick={setModalActive} />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}
