import React, { useEffect, useState } from "react";
import app from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.jsx";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx";
import Modal from "../Modal/Modal.jsx";
import ModalDetails from "../ModalDetails/ModalDetails.jsx";
import OrderModal from "../OrderModal/OrderModal.jsx";

const url = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [clickedDetails, setClickedDetails] = useState({});
  const [details, setDetails] = useState(false);
  const [order, setOrder] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        //console.log(jsonResponse.data);
        setProduct(jsonResponse.data);
      } catch (e) {
        console.error(e);
      }
    };
    getProduct();
  }, []);

  const closeModals = () => {
    setOrder(false);
    setDetails(false);
  };

  const onEscFunction = (event) => {
    event.key === "Escape" && closeModals();
  };

  const ingredientsClick = (item) => {
    setClickedDetails(item);
    setDetails(true);
  };
  return (
    <>
      <AppHeader />
      <main className={app.main}>
        <BurgerIngredients data={product} clicked={ingredientsClick} />

        <BurgerConstructor data={product} onOverlayClick={setOrder} />
      </main>
      {order && (
        <Modal onOverlayClick={closeModals} onEscKeydown={onEscFunction}>
          <OrderModal onOverlayClick={setOrder} />
        </Modal>
      )}
      {details && (
        <Modal
          title="Детали ингредиента"
          onOverlayClick={closeModals}
          onEscKeydown={onEscFunction}
        >
          <ModalDetails item={clickedDetails} />
        </Modal>
      )}
    </>
  );
};

export default App;
