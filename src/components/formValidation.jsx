import React, { Component } from "react";
import { Formik } from "formik";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      name: this.props.name,
      date: this.props.date,
      createdBy: this.props.createdBy,
      url: this.props.url
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let items = [...this.state.items];
    items.push({
      name: this.state.name,
      date: this.state.date,
      createdBy: this.state.createdBy,
      url: this.state.url
    });
    this.setState({
      items: items
    });
    this.props.tableComponentUpdate(items);
  };

  onChangeHandler = event => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;

    console.log("onChangeHandler", name, value);

    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("State formValidation:",this.state)
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="form-validation"
          id="form1"
          style={{ display: "none" }}
        >
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              name="name"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">URL address</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="url"
                onChange={this.onChangeHandler}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  .my.sweetcloud.se
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Connect a domain you already own
            </label>
            <input
              name="domain"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <label className="text-success">Add more</label>
          <div className="text-right">
            <span className="display-5">Cancel </span>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormValidation;
