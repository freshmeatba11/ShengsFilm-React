import React from "react";
import { Link, NavLink } from "react-router-dom";
import BurgerComponent from "./burger-component";
import navList from "../constants/navList.json";

const NavComponent = () => {
  return (
    <div className="nav-component">
      <BurgerComponent />

      <Link to={"/"}>
        <h1>Sheng's Film </h1>
      </Link>

      <ul>
        {navList.map((nav) => (
          <li key={nav.name}>
            <NavLink to={nav.path}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavComponent;
