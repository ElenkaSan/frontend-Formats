import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";

// import logo from './img/logo.png';
import "./components/component.css"
import NavRrouters from "./navigate/NavRouters";
import Footer from "./components/Footer"
import Header from "./navigate/Header";
import UserContext from "./common/UserContext";
import GoToTopButton from './components/GoToTopButton';

// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/home.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
// import Aboutus from "./components/Aboutus"
// import Promo from "./components/Promo"

// import { Navbar, Nav, NavItem } from "reactstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.handleGoToTop = this.handleGoToTop.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      // isLoggedIn: null,
    };
  }

  handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // isLoggedIn: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
      }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <UserContext.Provider 
      value={{
        currentUser,
        showAdminBoard,
        showModeratorBoard,
      }}
       >

        <div className="App">
          <Header logout={this.logOut} />
          <NavRrouters />
          {/* <GoToTopButton handleGoToTop={this.handleGoToTop} /> */}
          <GoToTopButton />
          <Footer/>
        </div>
       
        {/* <AuthVerify logOut={this.logOut}/> */}
        </UserContext.Provider>
    );
  }
}

export default App;
