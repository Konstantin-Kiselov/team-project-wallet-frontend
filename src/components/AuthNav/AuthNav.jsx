import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import s from './AuthNav.module.css';

const setActiveClass = ({ isActive }) => (isActive ? 'active-link' : 'link');

export default function AuthNav() {
  return (
    <div className={s.commonContainer}>
      <div className={s.frame}></div>
      <div className={s.leftSide}>
        <img className={s.frameLog} src="/frame-log.png" alt="" />
        <h1 className={s.titleLeftSide}>Finance App</h1>
      </div>

      <div className={s.rightSide}>
        <div className={s.form}>
          <h2 className={s.titleRightSide}>Wallet</h2>

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
