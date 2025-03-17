import React from "react";

// import "./navbar.css"

class Footer extends React.Component {

    render() {
        return (
        <footer className="footer dark-mode bg-dark pb-3 pt-sm-3 py-md-4 py-lg-5">
            <div className="container pb-4 pt-5">
                <div className="d-md-flex align-items-center justify-content-between pb-1 pb-md-0 mb-4 mb-md-5">
                <nav className="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3">
                    <a className="nav-link py-1 px-0 mx-3" href="/promo">Система лояльности</a>
                    <a className="nav-link py-1 px-0 mx-3" href="/aboutus">Наша команда</a>
                    <a className="nav-link py-1 px-0 mx-3" href="/photos">Фото & Видео</a>
                    <a className="nav-link py-1 px-0 mx-3" href="/publications">Блог & Новости</a>
                    <a className="nav-link py-1 px-0 mx-3" href="/contact">Контакты</a>
                </nav>
                <div className="d-flex justify-content-center justify-content-md-start me-md-n2">
                    <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" href="https://www.instagram.com/women_art_trick"><i className="ai-instagram"></i></a>
                    <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" href="/https://www.facebook.com/profile.php?id=100035482865697"><i className="ai-facebook"></i></a>
                    <a className="btn btn-icon btn-sm btn-secondary btn-twitter rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"></i></a>
                    <a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"></i></a>
                </div>
            </div>
            <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
               <p className="nav-link d-inline-block text-muted fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0">
               <span className="">&copy; Все права принадлежат Мультиформатному Центру Развития "Форматы". <br/> Сайт создала </span>
               <a className="nav-link d-inline fw-normal p-0" href="https://www.instagram.com/elenka_san/" target="blank" rel="noopener">Elenka_San</a></p>
           
                {/* <a className="nav-link d-inline-block text-muted fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0" href="/">Все права принадлежат Мультиформатному Центру Развития "Форматы".</a> */}
              <p className="fs-sm order-md-1 mb-0">
                <span className="opacity-70">&copy; All rights reserved by Development Center - Formats, 2022-2024. <br/> Made by </span>
              <a className="nav-link d-inline fw-normal p-0" href="https://github.com/ElenkaSan/" target="blank" rel="noopener">Elenka_San</a></p>
            </div>
          </div>
        </footer>
        )
    }
}


export default Footer;