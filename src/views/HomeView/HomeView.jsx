import Container from '../../components/Container/Container';
import s from './HomeView.module.css';
import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';
import Navigation from '../../components/Navigation/Navigation';
import Media from 'react-media';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hometab from '../../components/Hometab/Hometab';
import Diagramtab from '../../components/Diagramtab/Diagramtab';
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
import { useLocation } from 'react-router-dom';
import { getCategory } from '../../services/walletAPI';

export default function HomeView() {
  /*========== Получение всех категорий по клику на кнопку ButtonAddTransaction */
  const [allCategory, setAllCategory] = useState([]);
  const getAllCategory = () => {
    getCategory()
      .then(response => {
        console.log(response);
        setAllCategory(response);
      })
      .catch(error => console.log(error));
  };
  /*========== */

  const [modalActive, setModalActive] = useState(false);

  const windowInnerWidth = document.documentElement.clientWidth;
  console.log('windowInnerWidth', windowInnerWidth);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <AppBar />

      {((!modalActive && windowInnerWidth < 768) ||
        windowInnerWidth >= 768) && (
        <section className={s.homeviewSection}>
          <Container>
            <div className={s.flexContainer}>
              <div className={s.leftSide}>
                <div>
                  <div className={s.navIcons}>
                    <Navigation />
                  </div>
                  <Media
                    query="(min-width: 768px)"
                    render={() => (
                      <div className={s.futureBalance}>ВАШ БАЛАНС:</div>
                    )}
                  />
                </div>
                <Media
                  query="(min-width: 768px)"
                  render={() => (
                    <div>
                      <Currency />
                    </div>
                  )}
                />
                <Media
                  query="(max-width: 767px)"
                  render={() =>
                    (location.pathname === '/home/hometab' ||
                      location.pathname === '/home') && (
                      <div className={s.futureBalance}>ВАШ БАЛАНС:</div>
                    )
                  }
                />
              </div>
              <div className={s.rightSide}>
                <Media
                  queries={{
                    small: '(max-width: 767px)',
                    other: '(min-width: 768px)',
                  }}
                >
                  {matches => (
                    <>
                      {matches.small && (
                        <div>
                          <Routes>
                            <Route path="/hometab" element={<Hometab />} />
                            <Route
                              path="/diagramtab"
                              element={<Diagramtab />}
                            />
                            <Route path="/currency" element={<Currency />} />
                            <Route
                              path="*"
                              element={<Navigate to="hometab" replace />}
                            />
                          </Routes>
                        </div>
                      )}
                      {matches.other && (
                        <div>
                          <Routes>
                            <Route path="/hometab" element={<Hometab />} />
                            <Route
                              path="/diagramtab"
                              element={<Diagramtab />}
                            />
                            <Route
                              path="/currency"
                              element={<Navigate to="hometab" replace />}
                            />
                            <Route
                              path="*"
                              element={<Navigate to="hometab" replace />}
                            />
                          </Routes>
                        </div>
                      )}
                    </>
                  )}
                </Media>

                <ButtonAddTransaction
                  onClick={() => {
                    setModalActive(true);
                    getAllCategory();
                  }}
                />
              </div>
            </div>
          </Container>
          <div className={s.imageContainer}>
            <div className={s.pinkContainer}>
              <img className={s.pinkEllipse} src={pinkEllipse} alt="" />
            </div>
            <div className={s.violetContainer}>
              <img className={s.violetEllipse} src={violetEllipse} alt="" />
            </div>
          </div>
        </section>
      )}

      {modalActive && windowInnerWidth < 768 && (
        <AddTransactContainer title={'Добавить транзакцию'}>
          <ModalForm allCategory={allCategory} onClick={setModalActive} />
        </AddTransactContainer>
      )}

      {modalActive && windowInnerWidth >= 768 && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalContainer title={'Добавить транзакцию'}>
            <ModalForm allCategory={allCategory} onClick={setModalActive} />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}
