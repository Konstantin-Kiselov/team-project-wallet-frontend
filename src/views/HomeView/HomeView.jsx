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
// import ModalAddTransaction from '../../components/ModalAddTransaction';
import Modal from '../../components/Modal';
import ModalContainer from '../../components/ModalContainer';
// import Toggle from '../../components/Toggle';
import ModalForm from '../../components/ModalForm';
import AddTransactContainer from '../../components/AddTransactContainer';
import { useLocation } from 'react-router-dom';
import { getCategory } from '../../services/walletAPI';
import TotalBalance from '../../components/TotalBalance/TotalBalance';

export default function HomeView() {
  // /*========== Получение всех категорий по клику на кнопку ButtonAddTransaction */
  const [allCategory, setAllCategory] = useState([]);
  console.log('5555555555555555', allCategory);

  const getAllCategory = () => {
    getCategory()
      .then(response => {
        console.log('ffffffffffffffffffff', response.data);
        setAllCategory(response.data);
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
                <div className={s.divider}></div>
                <div>
                  <div className={s.navIcons}>
                    <Navigation />
                  </div>
                  <Media
                    query="(min-width: 768px)"
                    render={() => <TotalBalance />}
                    // render={() => (
                    //   <TotalBalance allTransactions={allTransactions} />
                    // )}
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
                      location.pathname === '/home') && <TotalBalance />
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
                            {/* <Route path="/hometab" element={<Hometab />} /> */}
                            <Route
                              path="/hometab"
                              element={
                                <Hometab>
                                  <ButtonAddTransaction
                                    onClick={() => {
                                      setModalActive(true);
                                      getAllCategory();
                                    }}
                                  />
                                </Hometab>
                              }
                            />

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
                            <Route
                              path="/hometab"
                              element={
                                <Hometab>
                                  <ButtonAddTransaction
                                    onClick={() => {
                                      setModalActive(true);
                                      getAllCategory();
                                    }}
                                  />
                                </Hometab>
                              }
                            />
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
              </div>
            </div>
          </Container>
          <img className={s.pinkEllipse} src={pinkEllipse} alt="" />
          <img className={s.violetEllipse} src={violetEllipse} alt="" />
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

// Люда
////////////////////
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTransactions } from '../../redux/transactions/transactions-operations';
// import {
//   getAllTransactions,
//   getAddedTransactions,
// } from '../../redux/transactions/transactions-selector';

// // const [allTrans, setAllTrans] = useState([]);

//   const addedTransaction = useSelector(getAddedTransactions);
//   const allTransactions = useSelector(getAllTransactions);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTransactions());
//     // setAllTrans(allTransactions);
//   }, [dispatch, allTransactions]);

//   // console.log('Это тоталлллллллллллллллллллл', allTrans);
//   //////////////////////////////////////////////////////////////////////////
