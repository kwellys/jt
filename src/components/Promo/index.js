import React from "react";
import Button from "../Button";
import "./styles.scss";
const Promo = ({ image, bigLogo, descr, heading, sub, link, handleModal }) => {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        {image ? <img src={image} alt="JetTech" className="promo__title"/> : null}
        {bigLogo ? <div className="promo__image-container"><img src={bigLogo} alt="JetTech" className="promo__big"/></div> : null}
        {descr ? <p className="promo__descr">{descr}</p> : null}
        {heading ? <h1 className="promo__heading">{heading}</h1> : null}
        {sub ? sub.split("\n").map(item => {
          if (item.length > 0) {
            return <p key={item.length + item[0]} className="promo__sub">{item}</p>;
          }
        }) : null}
        {link ? (
          <a className="promo__link" href={`https://${link}`}>
            {link}
          </a>
        ) : null}

        <Button title="Request a quote" position="promo" onClick={handleModal}/>
      </div>
    </section>
  );
};

export default Promo;
