import { Link } from "react-router-dom";

const Cards = ({ to, cardText, cardImg }) => {
  return (
    <div className="cards">
      <Link to={to}>
        <div className="mobileFilter">
          <img className="cardInfo" src={cardText} alt="" />
        </div>
        <img src={cardImg} alt="" title="" />
      </Link>
    </div>
  );
};

export default Cards;
