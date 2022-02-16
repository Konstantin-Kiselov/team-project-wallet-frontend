import React from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import s from './AuthNav.module.css';

import walletIcon from '../../img/log&reg/wallet.svg';
import loginFrame from '../../img/log&reg/login/frame-log.png';
import registerFrame from '../../img/log&reg/registration/frame-reg.png';
import violetEllipse from '../../img/log&reg/ellipse_violet.svg';
import pinkEllipse from '../../img/log&reg/ellipse_pink.svg';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');

export default function AuthNav() {
  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <div className={s.commonContainer}>
      <div className={s.leftSide}>
        <img alt="login frame" src={loginFrame} className={s.frameLog} />
        <img
          alt="violet ellipse"
          src={violetEllipse}
          className={s.violetEllipse}
        />
        <h1 className={s.titleLeftSide}>Finance App</h1>
      </div>

      <div className={s.rightSide}>
        <img alt="pink ellipse" src={pinkEllipse} className={s.pinkEllipse} />
        <div className={s.form}>
          <div className={s.titleRightSideContainer}>
            <img src={walletIcon} alt="wallet icon" />
            <h2 className={s.titleRightSide}>Wallet</h2>
          </div>

          <Outlet />

          <NavLink
            onClick={''}
            to="/login"
            className={setActiveClass}
            data-name={'login'}
            id="login"
            style={({ isActive }) => ({
              marginBottom: isActive ? '20px' : '0px',
            })}
          >
            Вход
          </NavLink>
          <NavLink
            onClick={''}
            to="/register"
            className={setActiveClass}
            data-name={'register'}
            id="register"
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
