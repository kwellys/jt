import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'
import GeoMap from '../../assets/images/content/map.svg'
import LinkedIn from '../../assets/images/icons/linkedin.png'
import UpWork from '../../assets/images/icons/upwork.png'

const GeographyLabel = ({company = 'Company name', isInternal = false, link = 'Link to company site', logo = '', position = {top: 50, left: 50}}) => (
  <div className="geography__label" style={{top: position.top + '%', left: position.left + '%'}}>
    <div className="geography__info">
      <div className="geography__icon">
        <img src={logo} alt={company}/>
      </div>
      <div className="geography__content">
        <h3 className="geography__title">{company}</h3>
        {isInternal ? <Link to={link} className="geography__link">View</Link> : <a href={'http://' + link} className="geography__link">{link}</a>}
      </div>
    </div>
  </div>
);

const Geography = ({data}) => (
  <section className="geography">
    <h2 className="visually-hidden">Our clients geography</h2>
    <div className="geography__wrapper">
      <div className="geography__statistics">
        <div className="geography__stat">
          <img src={UpWork} alt="UpWork" className="geography__image"/>
          <p className="geography__descr">97% Job Success</p>
        </div>
        <div className="geography__stat">
          <img src={LinkedIn} alt="LinkedIn" className="geography__image"/>
          <p className="geography__descr">In reviews</p>
        </div>
      </div>
      <div className="geography__container">
        <div className="geography__map">
          <img src={GeoMap} alt="Our clients geography"/>
          {data ? data.map(label => <GeographyLabel key={label.company} {...label}/>) : null}
        </div>
      </div>
    </div>
  </section>
);

export default Geography;