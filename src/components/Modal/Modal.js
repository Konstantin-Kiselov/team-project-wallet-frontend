import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { ReactComponent as Close } from '../../img/icons/close.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ active, setActive, children }) {
  /* Закрытие модалки по esc */
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    /////////////
    // const body = document.querySelector('body');
    // body.classList.add('noScroll');
    return () => {
      ////////////
      // body.classList.remove('noScroll');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  if (active) {
    const body = document.querySelector('body');
    body.classList.add('noScroll');
  }

  function handleKeydown(e) {
    if (e.code === 'Escape') {
      console.log('Нажали Esc');
      setActive(false);
    }
  }
  return createPortal(
    <div
      className={active ? s.backdrop : s.backdrop.isHidden}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? s.modalContainer : s.modalContainer.isHidden}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          className={s.modalCloseBtn}
          onClick={() => setActive(false)}
        >
          <Close
            className={s.closeIcon}
            width={16}
            height={16}
            fill="#000000"
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
