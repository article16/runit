import React from "react";

import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card-text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top img-thumbnail" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          blanditiis ad consectetur nesciunt ipsa non quas quia necessitatibus
          tempora aliquid?
        </p>
      </div>
    </div>
  );
};

export default Card;
