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

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      // isLoggedIn: null,
    };
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

      // let mode = window.localStorage.getItem('mode'),
      // root = document.getElementsByTagName('html')[0];
      // if (mode !== undefined && mode === 'dark') {
      //   root.classList.add('dark-mode');
      // } else {
      //  root.classList.remove('dark-mode');
      // }

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
      {/* <> {['lg'].map((expand) => (
        <Navbar key={expand} bg="primary" variant="dark" expand={expand} className="navL fixed-top mb-3">
          <Container fluid>
            <Navbar.Brand className="text-success" href="/"><p className="m-2"> <img src={logo} alt="logo" style={{ maxWidth: "50px"}} /></p>
              Форматы
            </Navbar.Brand>
            <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto dark-mode" data-bs-toggle="mode">
              <input className="form-check-input" type="checkbox" id="theme-mode"/>
              <label className="form-check-label" htmlFor="theme-mode"><i className="ai-sun fs-lg text-success"></i></label>
              <label className="form-check-label" htmlFor="theme-mode"><i className="ai-moon fs-lg text-dark"></i></label>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-success shadow-none bg-body-tertiary rounded"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="bg-danger" closeButton>
                <Offcanvas.Title className="text-success"  id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Наши Форматы
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-primary text-light">
                <Nav className="justify-content-end flex-grow-1 pe-3 bg-primary text-light"  style={{ color: "#fff" }}>
                  
                  <NavDropdown 
                    title="О нас"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/aboutus">Наша Команда
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/programs">Расписание 
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Контакты
                     </NavDropdown.Item>
                  </NavDropdown>
                 
                  <NavDropdown
                    title="Детские ФОРМАТЫ"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/english">Английский язык
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/class">Рисование/лепка
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/chest">Шахматы
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/music">Музыкальное направление
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/prof">Профориентация
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/vacation">Полезные каникулы
                     </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Взрослые ФОРМАТЫ"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/family">Семейный коучинг
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/personal">Личностный рост
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/manage">Управленческий коучинг
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/women">Женский клуб Women_art_trick
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/niceage">Клуб «Приятный возраст»
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/travel">Психологический туризм
                     </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="ФОРМАТЫ Бизнеса"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/group">Групповой Коуч
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/team">Командный Коуч
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/corporate">Корпоративный Коуч
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/testing">Групповое Тестирование
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/business">Бизнес Тренинги
                     </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Публикации"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/promo">Система лояльности
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/publications">Блог & Новости
                     </NavDropdown.Item>
                    <NavDropdown.Item href="/photos">Фото & Видео
                     </NavDropdown.Item>
                  </NavDropdown>
               
          <div className="navbar-nav mr-auto">
            {showModeratorBoard && (
              <Nav.Link href="/mod">Moderator Board</Nav.Link>
            )}

            {showAdminBoard && (
              <Nav.Link href="/admin">Admin Board</Nav.Link>
            )}

            {currentUser && (
              <Nav.Link href="/user">Личный кабинет</Nav.Link>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
              <Nav.Link href="/" onClick={this.logOut}>Выйти</Nav.Link>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <Nav.Link href="/login" className="nav-link text-success">Зайти</Nav.Link>
              <Nav.Link href="/register" className="nav-link text-success">Создать Аккаунт </Nav.Link>
            </div>
          )}

              </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </> */}

        <div className="App">
          <Header logout={this.logOut} />
          < NavRrouters />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />

            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/programs" element={<Home />} />
            <Route path="/contact" element={<Home />} />

            <Route path="/english" element={<Home />} />
            <Route path="/class" element={<Home />} />
            <Route path="/chest" element={<Home />} />
            <Route path="/music" element={<Home />} />
            <Route path="/prof" element={<Home />} />
            <Route path="/vacation" element={<Home />} />

            <Route path="/family" element={<Home />} />
            <Route path="/personal" element={<Home />} />
            <Route path="/manage" element={<Home />} />
            <Route path="/women" element={<Home />} />
            <Route path="/niceage" element={<Home />} />
            <Route path="/travel" element={<Home />} />

            <Route path="/group" element={<Home />} />
            <Route path="/team" element={<Home />} />
            <Route path="/corporate" element={<Home />} />
            <Route path="/testing" element={<Home />} />
            <Route path="/business" element={<Home />} />

            <Route path="/promo" element={<Promo />} />
            <Route path="/publications" element={<Home />} />
            <Route path="/photos" element={<Home />} />
          </Routes> */}

          <Footer/>
        </div>
       
        {/* <AuthVerify logOut={this.logOut}/> */}
        </UserContext.Provider>
    );
  }
}

export default App;
