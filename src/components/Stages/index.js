import React, { Component } from "react";
import "./styles.scss";

const Stage = ({ stage }) => (
  <ul className="stages__subitem">
    {stage.stageDetails.split("\n").map(detail => <li key={detail.length + detail[0]}>{detail}</li>)}
  </ul>
);

class Stages extends Component {

  renderHeight = () => {
    return (100 / this.props.data.length) * this.props.data.map(item => item.isComplete).filter(item => item).length
  }

  render () {
    const {data} = this.props;
    return (
      <section className="stages">
        <div className="stages__wrapper">
          <h2 className="stages__title">Project Stages</h2>
          <div className="stages__container">
            <div className="stages__fill">
              <div className="stages__progress" style={{ height: `${this.renderHeight()}%` }}/>
            </div>
            <ul className="stages__list">
              {data[0].hasOwnProperty('stageDetails') ? data.map(stage => <ul key={stage.stageDetails.length + stage.stageDetails[0]} className={!stage.isComplete ? 'stages__item' : 'stages__item stages__item--complete'}><Stage stage={stage}/></ul>) : null}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default Stages;