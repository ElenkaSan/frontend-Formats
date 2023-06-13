import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo.png';
import { useNavigate } from "react-router-dom";

const Header = ({currentUser, showModeratorBoard, showAdminBoard, logOut}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        logOut();
        navigate("/");
      //   localStorage.clear();
    }

    
    return ( 
        <> {['lg'].map((expand) => (
        <Navbar key={expand} bg="primary" variant="dark" expand={expand} className="navL fixed-top mb-3">
          <Container fluid>
            <Navbar.Brand className="text-success" href="/"><p className="m-2"> <img src={logo} alt="logo" style={{ maxWidth: "50px"}} /></p>
              Форматы
            </Navbar.Brand>
            <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto dark-mode" data-bs-toggle="mode">
              <input className="form-check-input" type="checkbox" id="theme-mode"/>
              <label className="form-check-label" htmlFor="theme-mode"><i className="ai-sun fs-lg text-success"> {" "} </i></label>
              <label className="form-check-label" htmlFor="theme-mode"><i className="ai-moon fs-lg text-dark"> { " "} </i></label>
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
                    <NavDropdown.Item href="/pay">Реквизиты компании
                     </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
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
                    {/* <NavDropdown.Divider /> */}
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
            <Nav.Link href="/" onClick={handleClick}>Выйти</Nav.Link>
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

        </>

    )

}

export default Header;