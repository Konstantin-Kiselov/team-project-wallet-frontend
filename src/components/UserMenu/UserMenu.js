import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import exitIcon from '../../img/appBar/Group 7.svg';
import s from './UserMenu.module.css';

/////////////////////////////
import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ModalContainer from '../../components/ModalContainer';
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
          <span className={s.exitWord}>Выход</span>
        </button>
      </div>

      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalContainer title={'Выйти'}>
            <Button
              title={'Выйти'}
              styleButton={true}
              type={'button'}
              onClick={() => {
                dispatch(authOperations.logOut());
                setModalActive(false);
              }}
            />
            <Button
              title={'Отмена'}
              styleButton={false}
              type={'button'}
              onClick={() => {
                setModalActive(false);
              }}
            />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}
