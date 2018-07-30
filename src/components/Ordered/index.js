import React from "react";
import "./styles.scss";

const Ordered = ({ num, heading, descr }) => (
  <div className="ordered">
    <header className="ordered__header">
      <div className="ordered__num">{num + 1}</div>
      <h3 className="ordered__heading">{heading}</h3>
    </header>
    <div className="ordered__info">
      <p className="ordered__descr">{descr}</p>
    </div>
  </div>
);

export default Ordered;
