import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={`${headerStyles.header} mt-10 ml-10 mr-10`}>
      <nav className={`${headerStyles.content} pt-4 pb-4`}>
        <div className={headerStyles.wrapper}>
          <div className={headerStyles.item}>
            <BurgerIcon />
            <p
              className={`${headerStyles.text} text_type_main-default mt-4 mb-4 mr-5`}
            >
              Конструктор
            </p>
          </div>
          <div
            className={`${headerStyles.item} text text_type_main-default text_color_inactive`}
          >
            <ListIcon />
            <p className={`${headerStyles.text} mt-4 mb-4 mr-5`}>
              Лента заказов
            </p>
          </div>
        </div>
        <Logo />
        <div
          className={`${headerStyles.item} text text_type_main-default text_color_inactive`}
        >
          <ProfileIcon />
          <p className={`${headerStyles.text} mt-4 mb-4 mr-5 `}>
            Личный кабинет
          </p>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
