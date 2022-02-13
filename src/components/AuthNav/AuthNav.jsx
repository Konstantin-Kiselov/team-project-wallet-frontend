import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <div className={s.commonContainer}>
        <div className={s.frame}></div>
        <div className={s.rightSide}></div>
        <div className={s.form}>
          <NavLink to="/login" className={s.link}>
            <button type="button" className={s.buttonLogin}>
              Вход
            </button>
          </NavLink>
          <NavLink to="/register" className={s.link}>
            <button type="button" className={s.buttonRegister}>
              Регистрация
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
