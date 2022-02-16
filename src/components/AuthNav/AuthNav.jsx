import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import s from './AuthNav.module.css';

import walletIcon from '../../img/log&reg/wallet.svg';
import loginFrame from '../../img/log&reg/login/frame-log.png';
import registerFrame from '../../img/log&reg/registration/frame-reg.png';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');
const setActiveImg = ({ isActive }) =>
  isActive ? 'loginFrame' : 'registerFrame';

export default function AuthNav() {
  return (
    <div className={s.commonContainer}>
      <div className={s.frame}></div>
      <div className={s.leftSide}>
        <img alt="login frame" src={loginFrame} className={setActiveImg} />
        <h1 className={s.titleLeftSide}>Finance App</h1>
      </div>

      <div className={s.rightSide}>
        <div className={s.form}>
          <div className={s.titleRightSideContainer}>
            <img src={walletIcon} alt="wallet icon" />
            <h2 className={s.titleRightSide}>Wallet</h2>
          </div>

          <Outlet />

          <NavLink
            to="/login"
            className={setActiveClass}
            style={({ isActive }) => ({
              marginBottom: isActive ? '20px' : '0px',
            })}
          >
            Вход
          </NavLink>
          <NavLink
            to="/register"
            className={setActiveClass}
            style={({ isActive }) => ({
              marginTop: isActive ? '20px' : '0px',
              marginBottom: '0px',
            })}
          >
            Регистрация
          </NavLink>
        </div>
      </div>

      {/*<div className={s.form}></div>*/}
    </div>
  );
}
