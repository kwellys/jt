import React, {Component} from "react";
import Link from "gatsby-link";
import "./styles.scss";

const NavigationSublist = ({ sublist, link, isOpen, clickHandler }) => (
  <ul className={isOpen ? "main-nav__sublist main-nav__sublist--opened" : "main-nav__sublist"}>
    {sublist.map(element => (
      <li key={element.fields.slug} onClick={clickHandler} className="main-nav__subitem">
        <Link
          to={element.fields.slug}
          className="main-nav__sublink"
        >
          {element.frontmatter.title}
        </Link>
      </li>
    ))}
  </ul>
);

class NavigationItem extends Component {
  state = {
    openSublist: null
  };

  menuItemHandler = () => {
    this.setState(prevState => {
      return {
        openSublist: !prevState.openSublist
      }
    })
  };
  handleMenuClick = (sublist) => {
    if(sublist.length)
    {
      event.preventDefault();
      this.menuItemHandler();
    }
    else{
      this.props.clickHandler();
    }
  };

  render () {
    const { title, link, sublist, clickHandler } = this.props;
    return (
      <li onClick={() => this.handleMenuClick(sublist)} className="main-nav__item">
        {
          link === 'services' ? <a className="main-nav__link">{title}</a> :
          link === 'technologies' ? <a href='/#technologies' className="main-nav__link">{title}</a> :
          link === 'expertise' ? <a href='/#industries' className="main-nav__link">{title}</a> :
          <Link to={`/${link}`} className="main-nav__link">{title}</Link>
        }

        {sublist.length ? <NavigationSublist isOpen={this.state.openSublist} sublist={sublist} link={link} clickHandler={clickHandler}/> : null}
      </li>
    )
  }
}

const Navigation = ({listOfItems, clickHandler}) => (
  <nav className="main-nav">
    <ul className="main-nav__list">
      {listOfItems.map(elem => (
        <NavigationItem clickHandler={clickHandler} key={elem.title} {...elem} />
      ))}
    </ul>
  </nav>
);

export default Navigation;