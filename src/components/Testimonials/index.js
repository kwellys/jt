import React from "react";
import Swiper from "react-id-swiper";
import "./styles.scss";
import Title from "../../assets/images/titles/Testimonials.png";

const TestimonialsSlide = ({
                             company,
                             img,
                             personName,
                             occupation,
                             features,
                             review
                           }) => (
  <article className="swiper-slide references__article">
    <header className="references__header">
      <div className="references__image-container">
        <img src={img} alt={personName}/>
      </div>
      <div className="references__container">
        <h3 className="references__heading">{company}</h3>
        <p className="references__info">{personName + ","}</p>
        <p className="references__info">{occupation}</p>
      </div>
    </header>
    <p className="references__descr">{features}</p>
    <p className="references__descr">{review}</p>
  </article>
);

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.swiper = null;
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext();
  };

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev();
  };

  render() {
    const { data, key } = this.props;
    const params = {
      loop: true,
      loopFillGroupWithBlank: true,
      slidesPerView: 3,
      navigation: {
        nextEl: ".references__next",
        prevEl: ".references__prev"
      },
      pagination: {
        el: ".references__pagination",
        type: "bullets",
        clickable: true
      },
      breakpoints: {
        1000: {
          slidesPerView: 2
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    };
    return (
      <section className="references">
        <div className="references__wrapper">
          <div className="references__nav">
            <button
              className="swiper-button-prev references__prev"
              onClick={this.goPrev}
            />
            <button
              className="swiper-button-next references__next"
              onClick={this.goNext}
            />
          </div>
          <div className="references__pagination"/>
          <h2 className="references__title">
            <img src={Title} alt="References"/>
            <span className="visually-hidden">References</span>
          </h2>
          <Swiper
            {...params}
            ref={node => {
              if (node) {
                this.swiper = node.swiper;
              }
            }}
          >
            {data ? data.map(slide => <TestimonialsSlide key={`company_${slide.personName}_${slide.features}`} {...slide} />) : null}
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Testimonials;
