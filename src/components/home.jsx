import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar";
import SideNavbar from "../components/sideNavbar";
import LandingPage from "../components/landingPage";

class Home extends Component {

    render() { 
        return ( 
            <div className="wrapper">
                <Navbar />
                <SideNavbar />
                <LandingPage />
            </div>
         );
    }
}
 
export default Home;