import React, { Component } from "react";
import { Formik } from "formik";

class ApplicationTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    console.log("props from ApplicationTable:", this.props)
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
              console.log("item mapped:", item)
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
      </div>
    );
  }
}

export default ApplicationTable;
