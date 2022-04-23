import React from "react";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay.jsx";
import PropTypes from "prop-types";

const modalContainer = document.querySelector("#modals");

const Modal = (props) => {
  const { children, title, onClickSendOrder, onEscKeydown } = props;

  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);
    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);
  return createPortal(
    <>
      <section className={modalStyle.popup}>
        <aside className={`${modalStyle.header} mt-10 ml-10 mr-10`}>
          <h2 className="text text_type_main-large"> {title}</h2>
          <button type="button" className={modalStyle.button}>
            <CloseIcon type="primary" onClick={onClickSendOrder} />
          </button>
        </aside>
        {children}
      </section>
      <ModalOverlay
        onClick={() => {
          onClickSendOrder();
        }}
      />
    </>,
    modalContainer
  );
};

Modal.propTypes = {
  onClickSendOrder: PropTypes.func.isRequired,
  onEscKeydown: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default Modal;
