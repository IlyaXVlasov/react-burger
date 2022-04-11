import React from "react";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay.jsx";
import PropTypes from "prop-types";

const modalContainer = document.querySelector("#modals");

const Modal = (props) => {
  const { children, title, onOverlayClick, onEscKeydown } = props;
  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);
    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, [onEscKeydown]);
  return createPortal(
    <>
      <section className={modalStyle.popup}>
        <header className={`${modalStyle.header} mt-10 ml-10 mr-10`}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button type="button" className={modalStyle.button}>
            <CloseIcon type="primary" onClick={onOverlayClick} />
          </button>
        </header>
        {children}
      </section>
      <ModalOverlay onClick={onOverlayClick} />
    </>,
    modalContainer
  );
};

Modal.propTypes = {
  onOverlayClick: PropTypes.func.isRequired,
  onEscKeydown: PropTypes.func.isRequired,
};

export default Modal;
