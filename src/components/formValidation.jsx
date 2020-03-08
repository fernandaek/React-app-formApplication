import React, { Component } from "react";

class FormValidation extends Component {
    
render() {
    return (
      <div>
        <form
          className="form-validation"
          id="form1"
          style={{ display: "none" }}
        >
          <div className="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">URL address</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  .my.sweetcloud.se
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">
              Connect a domain you already own
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <label className="text-success">Add more</label>
          <div className="text-right">
            <span className="display-5">Cancel </span>
            <button className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormValidation;
