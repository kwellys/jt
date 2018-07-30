import React, { Component, Fragment } from "react";
import Swiper from "react-id-swiper";
import "./styles.scss";

class SliderBig extends Component {
  state = {
    activeSlide: 0
  };

  onPreviewClick = index => {
    this.setState({ activeSlide: index });
  };

  render() {
    const {data} = this.props;
    const paramsBig = {
      containerClass: "swiper-container project-slider__big",
      allowTouchMove: false,
      hashNavigation: {
        watchState: true
      }
    };

    const paramsSmall = {
      slidesPerView: 5,
      spaceBetween: 20,
      containerClass: "swiper-container project-slider__small",
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        400: {
          sliderPerView: 1
        }
      }
    };

    return (
      <Fragment>
        <Swiper {...paramsBig}>
          {data.map((item, index) => (
            <div
              data-hash={`slide${index + 1}`}
              className="project-slider__big-slide"
              key={index}
            >
              <img src={item.img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Swiper>
        <Swiper
          {...paramsSmall}
          ref={node => {
            if (node) {
              this.swiper = node.swiper;
            }
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`project-slider__small-slide ${
                this.state.activeSlide === index
                  ? "project-slider__small-slide--current"
                  : ""
              }`}
            >
              <a
                onClick={e => this.onPreviewClick(index)}
                href={`#slide${index + 1}`}
              >
                <img src={item.img} alt={`Slide ${index + 1}`} />
              </a>
            </div>
          ))}
        </Swiper>
      </Fragment>
    );
  }
}

const ProjectSlider = ({data}) => (
  <section className="project-slider">
    <div className="project-slider__wrapper">
      <SliderBig data={data}/>
    </div>
  </section>
);

export default ProjectSlider;
