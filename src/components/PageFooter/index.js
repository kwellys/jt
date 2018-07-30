import React from "react";
import "./styles.scss";
import Logo from "../../assets/images/icons/logo.svg";

const PageFooter = () => (
  <footer className="page-footer">
    <div className="page-footer__wrapper">
      <div className="page-footer__col">
        <img src={Logo} alt="Jet Technical" />
        <p className="page-footer__copyright">All rights reserved</p>
      </div>
      <div className="page-footer__col">
        <p className="page-footer__descr">877-JET-Tech,</p>
        <p className="page-footer__descr">88 West Center Street Logan, UT</p>
        <p className="page-footer__descr">info@jettechnical.com</p>
      </div>
      <div className="page-footer__col">
        <p className="page-footer__descr">+77-888 888 888 888</p>
        <p className="page-footer__descr">+77-888 557 057 869</p>
        <p className="page-footer__descr">+77-888 878 835 790</p>
      </div>
    </div>
  </footer>
);

export default PageFooter;
