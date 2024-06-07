import React, { useState } from "react";
import { Link } from "react-router-dom";
import navList from "../constants/navList.json";

const BurgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const burgerBtnHandler = () => setIsOpen((prev) => !prev);

  return (
    <div className="burgerComponent">
      <input type="checkbox" name="menu-switcher" id="menu-switcher" />
      <label htmlFor="menu-switcher" className="burger">
        <div
          className={`container ${isOpen ? "change" : ""}`}
          onClick={burgerBtnHandler}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </label>
      <nav id="burgerNav" className={`${isOpen ? "open" : ""}`}>
        <Link to={"/"} onClick={burgerBtnHandler}>
          Sheng's Film
        </Link>
        <ul>
          {navList.map((item) => (
            <li key={item.name}>
              <Link to={item.path} onClick={burgerBtnHandler}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerComponent;
