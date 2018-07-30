import React from "react";
import "./styles.scss";

const ProjectTestimonial = ({ description, person }) => (
  <section className="testimonial">
    <div className="testimonial__wrapper">
      <h2 className="testimonial__title">Testimonial</h2>
      <div className="testimonial__columns">
        <div className="testimonial__column">
          {description ? description.split("\n").map(item => <p key={item.length + item[0]} className="testimonial__descr">{item}</p>) : null}
        </div>
        {person ? (
          <div className="testimonial__column">
            <div className="testimonial__person">
              <div className="testimonial__image-container">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="testimonial__container">
                <h3 className="testimonial__name">{person.name}</h3>
                <p className="testimonial__occupation">{person.occupation}</p>
              </div>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  </section>
);

export default ProjectTestimonial;
