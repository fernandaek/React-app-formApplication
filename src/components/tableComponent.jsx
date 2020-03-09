import React, { Component } from "react";
import { Formik } from "formik";

class ApplicationTable extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: [
      {
        name: "Dashboard",
        date: "08/03/2020",
        createdBy: "Magica Dimitrova",
        url: "dashboard"
      }
    ],
    name: "",
    date: "09/03/2020",
    createdBy: "Magica Dimitrova",
    url: ""
  };
  handleFormSubmit = event => {
    event.preventDefault();
    let items = [...this.state.items];
    console.log("...this.state.items", items);
    items.push({
      name: this.state.name,
      date: this.state.date,
      createdBy: this.state.createdBy,
      url: this.state.url
    });
    this.setState({
      items,
      name: "",
      date: "09/03/2020",
      createdBy: "Magica Dimitrova",
      url: ""
    });
  };

  onChangeHandler = event => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;
    // console.log("onChangeHandler", name, value)

    this.setState({
      [name]: value
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead className="table-secondary text-secondary">
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Date created</th>
              <th scope="col">Created by</th>
              <th scope="col">URL address</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td scope="row">
                    <input type="checkbox" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.createdBy}</td>
                  <td>
                    <a href={item.url + ".my.sweetcloud.se"}>
                      {item.url}.my.sweetcloud.se
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

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

export default ApplicationTable;
