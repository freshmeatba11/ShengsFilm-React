import React from "react";
import { Link, NavLink } from "react-router-dom";
import BurgerComponent from "./burger-component";

const NavComponent = () => {
  return (
    <div className="nav-component">
      <BurgerComponent />

      <Link to={"/"}>
        <h1>Sheng's Film </h1>
      </Link>

      <ul>
        <li>
          <NavLink to={"/direct"}>Direct</NavLink>
        </li>
        <li>
          <NavLink to={"/trailer"}>Trailer</NavLink>
        </li>
        <li>
          <NavLink to={"/interview"}>Interview</NavLink>
        </li>
        <li>
          <NavLink to={"/behind_the_scene"}>Behind the Scene</NavLink>
        </li>
        <li>
          <NavLink to={"/edit"}>Edit</NavLink>
        </li>
        <li>
          <NavLink to={"/commercial"}>Commercial</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavComponent;
