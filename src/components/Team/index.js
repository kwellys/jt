import React from 'react'
import './styles.scss'
import TeamTitle from '../../assets/images/titles/team.png'
import TeamMemberBlank from '../../assets/images/team/member.png'

const TeamMember = ({name, image, occupation}) => (
  <li className="team__item">
    <div className="team__image-container">
      <img src={image ? image : TeamMemberBlank} alt={name}/>
    </div>
    <h3 className="team__name">{name}</h3>
    <p className="team__descr">{occupation}</p>
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