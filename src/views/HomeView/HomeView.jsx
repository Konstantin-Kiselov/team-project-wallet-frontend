import { Container } from '@mui/material';
import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Currency from '../../components/Currency/Currency';
import s from './HomeView.module.css';
import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';
import Navigation from '../../components/Navigation/Navigation';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import Hometab from '../../components/Hometab/Hometab';
import Diagramtab from '../../components/Diagramtab/Diagramtab';

export default function HomeView() {
  return (
    <>
      <AppBar />
      <section className={s.homeviewSection}>
        <Container>
          <div className={s.flexContainer}>
            <div className={s.leftSide}>
              <div className={s.navIcons}>
                <Navigation />
              </div>
              <div className={s.futureBalance}></div>
              <Currency />
            </div>
            <div className={s.rightSide}>
              <Routes>
                <Route path="/hometab" element={<Hometab />}></Route>
                <Route path="/diagramtab" element={<Diagramtab />}></Route>
              </Routes>
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
    </>
  );
}
