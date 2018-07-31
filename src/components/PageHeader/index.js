import React from "react";
import Link from "gatsby-link";
import classnames from "classnames";
import Button from "../Button";
import Navigation from "../Navigation";
import Logo from "../../assets/images/icons/logo.svg";
import "./styles.scss";

class PageHeader extends React.Component {
  state = {
    isOpen: false
  };
  headerClickHandler = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    const { handleModal, menuList } = this.props;
    let pageHeaderClass = classnames("page-header", {
      "page-header--opened": this.state.isOpen
    });

    return (
      <header className={pageHeaderClass}>
        <div className="page-header__wrapper">
          <button
            className="page-header__toggle"
            onClick={this.headerClickHandler}
          />
          <Link className="page-header__logo" to="/">
            <img src={Logo} alt="JetTechnical Logotype" />
          </Link>
          <Navigation listOfItems={menuList} clickHandler={this.headerClickHandler}/>
          <Button
            title={"Request a quote"}
            position={"header"}
            onClick={handleModal}
          />
        </div>
      </header>
    );
  }
}

export default PageHeader;
