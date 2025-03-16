import React from "react";
// import UserService from "../services/user.service";
// import "./navbar.css"

import june from '../img/1june.jpg'
import masterv from '../img/masterv.jpeg'
import onejune from '../img/1june24.jpeg'
import june24 from '../img/profjune24.jpeg'
import opend from '../img/foropen.jpeg'
// import cert from '../img/certificates2.jpg'

const Blog = () => {


    return ( 
      <div className="">
       <br/>
      <div className="container pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      {/* Page title + filters*/}
      <div className="row align-items-center gy-2 mb-4 pb-1 pb-sm-2 pb-lg-3">
        <div className="col-lg-5">
          <h1 className="mb-lg-0">Блог & Новости</h1>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-3 col-sm-5">
          <select className="form-select">
            <option>Все категории</option>
            <option>Детские Форматы</option>
            <option>Рукоделие</option>
            <option>Связаться с нами</option>
            <option>Взрослые Форматы</option>
            <option>Travel &amp; Vacation</option>
          </select>
        </div>
        <div className="col-lg-4 col-sm-7">
          <div className="position-relative"><i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input className="form-control ps-5" type="search" placeholder="Enter keyword"/>
          </div>
        </div>

        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" databstoggle="tooltip" dataBsPlacement="left" title="Back to home"><i className="ai-home"></i></a>
         </div>

      </div>
      {/* <div className="text-center bg-size-cover bg-repeat-0">
      <h2>Ближайшие события</h2>
      </div> */}
      {/* Post*/}
        <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
        <img className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" src={opend} alt="formats info"/>
         <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3><a href="/">В нашем Центре развития «Форматы» 1 раз в квартал проходит День открытых дверей 
            </a></h3>
            <p className="d-sm-none d-md-block">
            Такие как профессиональные мастер-классы, конкурсы, участие с родителями, сладкие подарки. Тематика и формат событий отличаются друг от друга!
                <br/>Приходите и проведите день с пользой для себя и ребенка! 
            <br/>Дополнительная информация по номеру: +7 (992) 300-65-46, + 7(992) 300-65-23 Адрес: ул.Попова, 7, стр.2 (вход с торца)
            </p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">10<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">4<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-muted mt-2">12 hours ago</span><span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="/contact">Связаться с нами</a></div>
          </div>
        </div>
      </article>
      {/* Post*/}
      <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
        <img className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" src={masterv} alt="master class"/>
         <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3><a href="/">Ежемесячно по выходным в нашем центре проводятся разные полезные авторские мастер-классы для детей и взрослых</a></h3>
            <p className="d-sm-none d-md-block">
              Направления: Рисование, Макраме, Вязание, Плетение бисером, Изготовление снудов и шапок из пуффи,  декупаж и не только. 
              а также конкурсы, участие с родителями, сладкие подарки.
                <br/> Тематика и формат событий отличаются друг от друга! Приходите и проведите день с пользой для себя и ребенка!
            </p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">10<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">4<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-muted mt-2">12 hours ago</span><span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="/class">Рукоделие</a></div>
          </div>
        </div>
      </article>
      {/* Post*/}
      <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
        <img className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" src={onejune} alt="June"/>
         <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3><a href="/">1 ИЮНЯ — Детский ПРАЗДНИК во дворе вместе с командой Форматы!</a></h3>
            <p className="d-sm-none d-md-block">ФОРМАТЫ - это про ЛЮБОВЬ К РАЗВИТИЮ ДЕТЕЙ и ВЗРОСЛЫХ 💟 Время развлекаться пришло! 
            <br/>Участвуй в локациях по выбору, получай отметки в КАРТЕ НАВИГАЦИИ и участвуй в РОЗЫГРЫШЕ призов от нас! Множество направлений как внутри так и снаружи центра для вас и ваших детей.
            <br/> Участие бесплатно! Регистрация обязательна по телефону: 8(992)300-65-46, 8(992)300-65-23
            </p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">10<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">4<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-muted mt-2">12 hours ago</span><span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="/vacation">Детские Форматы</a></div>
          </div>
        </div>
      </article>
      {/* Post*/}
      <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
        <img className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" src={june24} alt="June"/>
         <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3><a href="/">Летняя Смена: Все профессии важны 17.06-28.06.2024 Тема: Профориентация.</a></h3>
            <p className="d-sm-none d-md-block">
            Были невероятные дни для детей возраста 7+ с полноценными обедами и программами.
            </p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">10<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">4<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-muted mt-2">12 hours ago</span><span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="/vacation">Детские Форматы</a></div>
          </div>
        </div>
      </article>
            {/* Post*/}
            <article className="row g-0 border-0 mb-4">
        <img className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" src={june} alt="June"/>
        <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3>Cобытие, которое состоялось в честь Дня Защиты Детей 1 июня 2023 года.</h3>
            <p className="d-sm-none d-md-block">
            Приятный день с пользой для семьи! Мы познакомим вас с концепцией нашего центра, вы и ваш ребенок может поучаствовать в любом из направлений, 
            которые предлагаем, вы познакомитесь с нашими чуткими преподавателями. ВХОД: свободный.
            <br/>Специально для Вас мы приготовили программу:
            </p>
            <ul> НА УЛИЦЕ:
              <li>Сцена с веселым ведущим</li>
              <li>Отчетные выступления учеников "Музыкалка 2.0"</li>
              <li>Турнир по шахматам среди детей и взрослых</li>
              <li>Мастер-класс по рисованию и лепке</li>
              <li>Игры на площадке</li>
            </ul>
            <ul> ВНУТРИ ЦЕНТРА:
              <li>Диагностика знаний, умений и навыков английского языка</li>
              <li>Съёмки, интервью и репортажи из Центра "Форматы"</li>
              <li>Розыгрыш и другие сюрпризы</li>
            </ul>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">6<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">12<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              {/* <span className="fs-sm text-muted mt-2">8 hours ago</span>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span> */}
              <a className="badge text-nav fs-xs border mt-2" href="/vacation">Детские Форматы</a></div>
          </div>
        </div>
      </article>
      {/* Post*/}
      {/* <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
        <a className="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" href="/" style={{backgroundImage: 'url(assets/img/blog/list/05.jpg)', minHeight: '16rem'}}></a>
        <div className="col-sm-7 col-lg-8">
          <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
            <h3><a href="blog-single-v2.html">New series from Netflix</a></h3>
            <p className="d-sm-none d-md-block">Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra etiam non, vitae tristique eu in morbi felis nulla. Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel morbi ...</p>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <a className="nav-link text-muted fs-sm fw-normal p-0 mt-2 me-3" href="/">19<i className="ai-share fs-lg ms-1"></i></a>
              <a className="nav-link text-muted fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="/">7<i className="ai-message fs-lg ms-1"></i></a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-muted mt-2">December 15, 2022</span><span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="/">TV shows</a></div>
          </div>
        </div>
      </article> */}
      {/* Pagination*/}
      {/* <div className="row gy-3 align-items-center mt-lg-5 pt-2 pt-md-3 pt-lg-0 mb-md-2 mb-xl-4">
        <div className="col col-md-4 col-6 order-md-1 order-1">
          <div className="d-flex align-items-center"><span className="text-muted fs-sm">Show</span>
            <select className="form-select form-select-flush w-auto">
              <option value="6">6</option>
              <option value="9" selected>9</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
          </div>
        </div>
        <div className="col col-md-4 col-12 order-md-2 order-3 text-center">
          <button className="btn btn-primary w-md-auto w-100" type="button">Load more posts</button>
        </div>
        <div className="col col-md-4 col-6 order-md-3 order-2">
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm justify-content-end">
              <li className="page-item active" aria-current="page">
                <span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
              <li className="page-item"><a className="page-link" href="/">2</a></li>
              <li className="page-item"><a className="page-link" href="/">3</a></li>
              <li className="page-item"><a className="page-link" href="/">4</a></li>
              <li className="page-item"><a className="page-link" href="/">5</a></li>
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
    </div>
);

};

export default Blog;