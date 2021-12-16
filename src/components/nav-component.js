import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/direct"}>Direct</Link>
        </li>
        <li>
          <Link to={"/trailer"}>Trailer</Link>
        </li>
        <li>
          <Link to={"/interview"}>Interview</Link>
        </li>
        <li>
          <Link to={"/behind_the_Scene"}>Behind the Scene</Link>
        </li>
        <li>
          <Link to={"/edit"}>Edit</Link>
        </li>
        <li>
          <Link to={"/contect"}>Contect</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavComponent;
