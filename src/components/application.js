import React, { Component } from "react";
import Navbar from "./navbar";
import SideNavbar from "./sideNavbar";
import FormValidation from "./formValidation";
import ApplicationTable from "./tableComponent";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Dashboard",
          date: "08/03/2020",
          createdBy: "Magica Dimitrova",
          url: "dashboard"
        }
      ],
      name: "",
      date: "13/03/2020",
      createdBy: "Magica Dimitrova",
      url: ""
    };
  }

  tableComponentUpdate = newItems => { //
    this.setState({
      items: newItems
    });
  };

  
  createApplication = () => {
    console.log("create app clicked");
    document.getElementById("form1").style.display = "";
  };

  render() {
      console.log("State Application:",this.state.items)
    return (
      <div>
        <Navbar />
        <SideNavbar />
        <h1>Application Page</h1>
        <button
          className="btn btn-success float-right"
          onClick={this.createApplication}
        >
          Create new application
        </button>
        <div className="container">
          <ApplicationTable 
            items={this.state.items}
            name={this.state.name}
            date={this.state.date}
            createdBy={this.state.createdBy}
            url={this.state.url}
          />
        </div>
        <FormValidation
            items={this.state.items}
            name={this.state.name}
            date={this.state.date}
            createdBy={this.state.createdBy}
            url={this.state.url}
            tableComponentUpdate={this.tableComponentUpdate.bind(this)}
        />
      </div>
    );
  }
}

export default Application;
