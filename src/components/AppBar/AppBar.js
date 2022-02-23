import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './AppBar.module.css';
import walletIcon from '../../img/log&reg/wallet.svg';
import walletNameIcon from '../../img/appBar/Wallet.svg';
import copyrightIcon from '../../img/icons/copyright.png';

import UserMenu from '../UserMenu/UserMenu.js';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import ModalTeamContainer from '../ModalTeamContainer';

export default function AppBar() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Link className={s.logo} to="/home">
            <img className={s.logoImg} src={walletIcon} alt="logo" />
            <img className={s.logoWord} src={walletNameIcon} alt="logo" />
          </Link>
          <img
            className={s.copyrightIcon}
            src={copyrightIcon}
            alt="copyright"
            onClick={() => setModalActive(true)}
          />

          <UserMenu />
        </div>
      </Container>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          {/* <ModalContainer title={'Добавить транзакцию'}>
            <ModalForm allCategory={allCategory} onClick={setModalActive} />
          </ModalContainer> */}
          <ModalTeamContainer />
        </Modal>
      )}
    </header>
  );
}
