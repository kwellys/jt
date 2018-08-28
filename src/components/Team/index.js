import React from 'react'
import './styles.scss'
import TeamTitle from '../../assets/images/titles/team.png'
import TeamMemberBlank from '../../assets/images/team/member.png'

const TeamMember = ({name, image, occupation, descr}) => (
  <li className="team__item">
    <div className="team__container">
      <div className="team__image-container">
        <img src={image ? image : TeamMemberBlank} alt={name}/>
      </div>
      <div className="team__info">
        <h3 className="team__name">{name}</h3>
        <p className="team__descr">{occupation}</p>
      </div>
    </div>
    <p className="team__skills">{descr}</p>
  </li>
);

const Team = ({description, hasTitle, members}) => (
  <section className="team">
    <div className="team__wrapper">
      {hasTitle ?
        <h2 className="team__title">
          <img src={TeamTitle} alt="Company & Team"/>
          <span className="visually-hidden">Company & Team</span>
        </h2>
        : null
      }
      <ul className="team__list">
        {members ? members.map((member, index) => <TeamMember key={index} {...member}/>) : null}
      </ul>
      {description ? <p className="team__about">{description}</p> : null}
    </div>
  </section>
);

export default Team;