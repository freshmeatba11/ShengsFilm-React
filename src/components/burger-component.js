import React from "react";
import { Link } from "react-router-dom";

const BurgerComponent = () => {
  const burgerBtnHandler = (e) => {
    let btn = document.querySelector("label.burger").children;
    btn[0].classList.toggle("change");
    let burgerNav = document.querySelector("#burgerNav");
    burgerNav.classList.toggle("open");
  };

  return (
    <div className="burgerComponent">
      <input type="checkbox" name="menu-switcher" id="menu-switcher" />
      <label htmlFor="menu-switcher" className="burger">
        <div className="container" onClick={burgerBtnHandler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </label>
      <nav id="burgerNav">
        <Link to={"/"} onClick={burgerBtnHandler}>
          Sheng's Film
        </Link>
        <ul>
          <li>
            <Link to={"/direct"} onClick={burgerBtnHandler}>
              Direct
            </Link>
          </li>
          <li>
            <Link to={"/trailer"} onClick={burgerBtnHandler}>
              Trailer
            </Link>
          </li>
          <li>
            <Link to={"/interview"} onClick={burgerBtnHandler}>
              Interview
            </Link>
          </li>
          <li>
            <Link to={"/behind_the_Scene"} onClick={burgerBtnHandler}>
              Behind the Scene
            </Link>
          </li>
          <li>
            <Link to={"/edit"} onClick={burgerBtnHandler}>
              Edit
            </Link>
          </li>
          <li>
            <Link to={"/contect"} onClick={burgerBtnHandler}>
              Contect
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerComponent;
