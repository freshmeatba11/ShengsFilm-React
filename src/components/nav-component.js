import React from "react";
import { Link } from "react-router-dom";
import BurgerComponent from "./burger-component";

const NavComponent = () => {
  const clickHandler = (e) => {
    //用localStorage儲存這次按的button
    let buttonPath = e.target.innerText.toLowerCase();
    localStorage.setItem("buttonPath", buttonPath);
  };

  const isActive = (path) => {
    //比對path是不是上一個按的button
    let buttonPath = localStorage.getItem("buttonPath");
    if (buttonPath === path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="nav-component">
      <BurgerComponent />

      <Link to={"/"} onClick={clickHandler}>
        <h1>Sheng's Film </h1>
      </Link>

      <ul>
        <li className={isActive("direct") ? "active" : ""}>
          <Link to={"/direct"} onClick={clickHandler}>
            Direct
          </Link>
        </li>
        <li className={isActive("trailer") ? "active" : ""}>
          <Link to={"/trailer"} onClick={clickHandler}>
            Trailer
          </Link>
        </li>
        <li className={isActive("interview") ? "active" : ""}>
          <Link to={"/interview"} onClick={clickHandler}>
            Interview
          </Link>
        </li>
        <li className={isActive("behind the scene") ? "active" : ""}>
          <Link to={"/behind_the_scene"} onClick={clickHandler}>
            Behind the Scene
          </Link>
        </li>
        <li className={isActive("edit") ? "active" : ""}>
          <Link to={"/edit"} onClick={clickHandler}>
            Edit
          </Link>
        </li>
        <li className={isActive("contact") ? "active" : ""}>
          <Link to={"/contact"} onClick={clickHandler}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavComponent;
