import React, { useEffect, useState } from "react";
import app from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.jsx";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx";
import Modal from "../Modal/Modal.jsx";
import IgrendientDetails from "../IgrendientDetails/IgrendientDetails";
import OrderModal from "../OrderModal/OrderModal.jsx";
import { ProductContex } from "../../contex.js";

export const baseUrl = "https://norma.nomoreparties.space/api";

const App = () => {
  const [clickedDetails, setClickedDetails] = useState({});
  const [details, setDetails] = useState(false);
  const [order, setOrder] = useState(false);
  const [product, setProduct] = useState([]);
  const [orderDetailsModalData, setOrderDetailsModalData] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${baseUrl}/ingredients`);
        if (!response.ok) {
          throw new Error(
            `Ошибка по адресу ${baseUrl}, статус ошибки ${response.status}`
          );
        }
        const jsonResponse = await response.json();
        setProduct(jsonResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  const closeModals = () => {
    setOrder(false);
    setDetails(false);
  };

  const handleEscape = (event) => {
    event.key === "Escape" && closeModals();
  };

  const handleIngredientsClick = (item) => {
    setClickedDetails(item);
    setDetails(true);
  };

  return (
    <>
      <ProductContex.Provider value={product}>
        <AppHeader />
        <main className={app.main}>
          <BurgerIngredients onClick={handleIngredientsClick} />
          <BurgerConstructor
            onClickSendOrder={setOrder}
            setOrderData={setOrderDetailsModalData}
          />
        </main>
      </ProductContex.Provider>
      {order && orderDetailsModalData && (
        <Modal onClickSendOrder={closeModals} onEscKeydown={handleEscape}>
          <OrderModal
            onClickSendOrder={setOrder}
            orderNumber={orderDetailsModalData.order.number}
          />
        </Modal>
      )}

      {details && (
        <Modal
          title="Детали ингредиента"
          onClickSendOrder={closeModals}
          onEscKeydown={handleEscape}
        >
          <IgrendientDetails item={clickedDetails} />
        </Modal>
      )}
    </>
  );
};

export default App;
