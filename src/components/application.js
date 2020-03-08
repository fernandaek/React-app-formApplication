import React, { Component } from 'react';
import Navbar from './navbar'
import SideNavbar from './sideNavbar'
import FormValidation from './formValidation';
import ApplicationTable from './tableComponent';


class Application extends Component {
    
    createApplication = () => {
        console.log("create app clicked")
        document.getElementById('form1').style.display = '';
    }

    render(){
        return (
          <div>
              <Navbar />
              <SideNavbar />
                <h1>Application Page</h1>
                <button className="btn btn-success float-right" onClick={this.createApplication}>Create new application</button>
                <div className="container">
                    <ApplicationTable />
                </div>
              {/* <FormValidation /> */}
          </div>
        );

    }
}


export default Application;
