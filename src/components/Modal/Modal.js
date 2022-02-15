import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ active, setActive, children }) {
  return createPortal(
    <div
      className={active ? s.backdrop : s.backdrop.isHidden}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? s.modalContainer : s.modalContainer.isHidden}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}
