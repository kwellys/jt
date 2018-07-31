import React, {Fragment, Component} from "react";
import {navigateTo} from 'gatsby-link'
import "./styles.scss";
import Button from "../Button";

const FormField = ({ placeholder, name, type, handleChange, handleFiles, fileName }) => (
  <div className="input__container">
    <label htmlFor={name} className="label">
      {name}
    </label>
    {type !== "textarea" ? (
      <input
        className="input"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        required
      />
    ) : (
      <Fragment>
        <textarea
          name={name}
          id={name}
          className="input input--textarea"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <ul className="input__files">
          {fileName.attachment ? <li className="input__file">{fileName.attachment.name}</li> : null}
        </ul>
        <label className="label label--file">
          <input
            type="file"
            name="attachment"
            id="fileInput"
            className="input input--file"
            onChange={handleFiles}
          />
        </label>
      </Fragment>
    )}
  </div>
);

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAttachment = e => {
    this.setState({[e.target.name]: e.target.files[0]});
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        this.props.clickHandler
      })
      .catch(error => alert(error));
  };

  render() {
    const {fields, formClass, clickHandler} = this.props;
    return (
      <form
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name={formClass}
        method="post"
        className={formClass}
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value={formClass}/>
        <div hidden>
          <label>
            Don't fill this out: {""}
            <input name="bot-field" onChange={this.handleChange}/>
          </label>
        </div>
        {fields.map(field => (
          <FormField
            key={`form_${field.name}`}
            placeholder={field.placeholder}
            name={field.name}
            type={field.type}
            handleChange={this.handleChange}
            handleFiles={this.handleAttachment}
            fileName={this.state}
          />
        ))}
        <Button type="submit" title="Send" onClick={clickHandler}/>
      </form>
    );
  }
}

export default Form;
