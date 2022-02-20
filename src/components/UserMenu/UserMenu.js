import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import exitIcon from '../../img/appBar/Group 7.svg';
import s from './UserMenu.module.css';

/////////////////////////////
import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ModalLogoutContainer from '../../components/ModalLogoutContainer';
import Button from '../Button';
////////////////////////

export default function UserMenu() {
  //////////////////////////////
  const [modalActive, setModalActive] = useState(false);
  /////////////////////
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <>
      <div className={s.container}>
        {name ? (
          <span className={s.name}>{name}</span>
        ) : (
          <span className={s.name}>username</span>
        )}

        <button
          className={s.button}
          // onClick={() => dispatch(authOperations.logOut())}
          onClick={() => setModalActive(true)}
        >
          <img className={s.exitIcon} src={exitIcon} alt="" />
          <span className={s.exitWord}>Выйти</span>
        </button>
      </div>

      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalLogoutContainer
            title={'Вы действительно хотите выйти из акаунта?'}
          >
            <div className={s.buttonContainer}>
              <div className={s.buttonExit}>
                <Button
                  title={'Выйти'}
                  styleButton={true}
                  type={'button'}
                  onClick={() => {
                    dispatch(authOperations.logOut());
                    setModalActive(false);
                  }}
                />
              </div>

              <Button
                title={'Отмена'}
                styleButton={false}
                type={'button'}
                onClick={() => {
                  setModalActive(false);
                }}
              />
            </div>
          </ModalLogoutContainer>
        </Modal>
      )}
    </>
  );
}
