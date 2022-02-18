import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ active, setActive, children }) {
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
          {/* <svg
            class="modal-close-btn__icon"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <use href="./images/icons/sprite.svg#close-modal"></use>
          </svg> */}
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
