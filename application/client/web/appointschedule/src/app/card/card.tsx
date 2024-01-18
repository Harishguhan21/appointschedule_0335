import React from "react";
import "./card.css"; // Import your CSS file

const Card = (props: any) => {
  return (
    <div className="card">
      <input
        type="radio"
        className="card-checkbox"
        checked={props.selected}
        onChange={props.onChange}
      />
      <img
        src={props.data.image} // Replace with your image URL
        alt="Card Image"
        className="card-image"
      />
      <p className="card-name">{props.data.name}</p>
    </div>
  );
};

export default Card;
