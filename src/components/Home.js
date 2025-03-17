 // import React , { Component } from "react";
 import React, { useEffect, useState  } from 'react';

 import UserService from "../services/user.service";
 import kids from "../img/kids.png";
 import logoss from "../img/format.jpeg";
 import heart from "../img/heart.png";
 import arrow from "../img/arrow.png";
 
 import engTeach from "../img/englishT.jpg";
 import Anna from "../img/annaR.jpeg";
 import engTch from "../img/engTch.jpg"
 // import chest from "../img/chestT.jpg"
 import polina from "../img/polina.jpeg"
 import logoped from "../img/logoped.jpeg"
 import alex from "../img/alex.jpeg"

 // import mang from "../img/mang.png"
 import proforent from "../img/proforent.png"
 import create from "../img/crreate.JPG"
 
 // import "./navbar.css"
 import { register } from 'swiper/element/bundle';
 
 
 // import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/swiper-bundle.min.css';
 // import { Container, Row, Col, Carousel } from 'react-bootstrap';
 import Swiper from 'swiper';
 
 register();
 
 const Home = () => {
     const [content, setContent] = useState('');
     useEffect(() => {
         // Initialize Swiper
         const swiper = new Swiper('.swiper', {
           spaceBetween: 30,
           loop: true,
           bindedContent: true,
           autoHeight: true,
           pagination: {
             el: '.testimonials-count',
             type: 'fraction'
           },
           navigation: {
             prevEl: '#prev-testimonial',
             nextEl: '#next-testimonial'
           }
         });
     
         return () => {
           // Cleanup Swiper instance when component unmounts
           swiper.destroy();
         };
       }, []);
 
   useEffect(() => {
     UserService.getPublicContent()
       .then(response => {
         setContent(response.data);
       })
       .catch(error => {
         setContent(
           (error.response && error.response.data) ||
             error.message ||
             error.toString()
         );
       });
   }, []);
 
 // export default class Home extends Component {
 //   constructor(props) {
 //     super(props);
 
 //     this.state = {
 //       content: ""
 //     };
 //   }
 
 //   componentDidMount() {
 //     UserService.getPublicContent().then(
 //       response => {
 //         this.setState({
 //           content: response.data
 //         });
 //       },
 //       error => {
 //         this.setState({
 //           content:
 //             (error.response && error.response.data) ||
 //             error.message ||
 //             error.toString()
 //         });
 //       }
 //     );
 //   }
 
 //   render() {
     return (
       // <div className="container">
       <div>
         {/* <body> */}
         {/* <header className="jumbotron"> */}
           {/* <h3>{this.state.content}</h3> */}
         {/* </header> */} {content}
         {/* <main className="page-wrapper"> */}
          <section className="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" datajarallax dataspeed="0.65">
         <div className="jarallax-img"  style={{backgroundImage: 'url(assets/img/landing/corporate/hero-bg.jpg)'}}></div>
         <div className="container-fluid position-relative zindex-2 py-5 my-md-3 my-lg-5">
         <div className="row pb-3 pt-4 pt-sm-5">
             <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 offset-lg-1 pt-5">
             <div className="card dark-mode border-0 rounded-1 py-2 py-sm-3 py-md-4 bg-primary" 
             // style={{backgroundColor: '#004655'}}
             >
                 <div className="card-body">
                 <div className="mx-auto pt-2" style={{maxWidth: '535px'}}>
                     <h1 className="display-5 mb-4">За эффективным решением свяжитесь с нами </h1>
                     <p className="fs-lg pb-4 pb-lg-5 mb-2" style={{maxWidth: '410px'}}>Забронируйте бесплатную консультацию.</p>
                     <div className="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                     <a className="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" href="/">Телефон Центра</a>
                     <a className="d-flex align-items-center fw-semibold text-white text-decoration-none px-3 py-2" href="tel:+7(992)300-65-46"><i className="ai-phone fs-xl me-2"></i>+7 (992) 300-65-46 <br/> +7 (992) 300-65-23</a></div>
                     <ul className="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                     <li className="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Полный спектр услуг</li>
                     <li className="d-flex"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Гибкие часы работы</li>
                     <li className="d-flex"><i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>Мультиформатный центр</li>
                     </ul>
                 </div>
                 </div>
             </div>
             </div>
         </div>
         </div>
     </section>
     {/* Services*/}
     <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
         <h3 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
             На сегодняшний день ФОРМАТЫ - это атмосферный Центр развития личности для тех, кто развивает себя вместе с близкими.
         </h3>
         <h5 className="text-center pb-3 mb-3 mb-lg-4 lead">
            Наш Центр: 
            <br></br> Гибкое и удобное пространство для развития потенциала личности
            <br></br> Развитие и поддержка навыков детей и взрослых
            <br></br> Поддержка и помощь в развитии/масштабировании бизнеса юридических лиц
         </h5>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
         {/* Item*/}
         <div className="col">
             <card className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4" style={{backgroundImage: 'url(assets/img/landing/corporate/services/01.jpg'}}>
                 {/* <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div> */}
             </div>
             <div className="card-body pb-3">
                  <div className="d-block mt-1 mt-sm-0 mb-4" >
                     <img src={kids} alt="" width="50" height="50" />
                   </div>
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-info">
                     <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                 <h3 className="h4">Детские ФОРМАТЫ</h3>
                 <ul className="mb-0 fs-lg">
                 <li>«Полезная продлёнка» с 1-4 класс (6+)</li>
                 <li>Английский язык (7+)</li>
                 <li>Профориентация (12+)</li>
                 <li>Полезные каникулы (7+)</li>
                 <li>Бизнес клуб для подростков “STARtup” (12+)</li>
                 <li>Детские Арт-студия (5+)</li>
                 <li>Шахматы/шашки (5+)</li>
                 <li>Музыкальное направление (гитара, фортепиано, вокал) (7+)</li>
                 <li>Танцевальное направление (5+) </li>
                 <li>Студия «Я-артист» (7+)</li>
                 <li>Логопед (5+)</li>
                 <li>Скорочтение (5+)</li>
                 <li>Каллиграфия (5+)</li>
                 <li>Подготовка к школе (5+)</li>
                 <li>Подготовка к ВПР 4 класс</li>   
                 <li>Репетиторство (7+)</li>   
                 </ul>
             </div>
             {/* <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div> */}
             </card></div>
         {/* Item*/}
         <div className="col">
             <card className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4" style={{backgroundImage: 'url(assets/img/landing/corporate/services/02.jpg)'}}>
                 {/* <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div> */}
             </div>
             <div className="card-body pb-3">
                  <div className="d-block mt-1 mt-sm-0 mb-4" >
                     <img src={heart} alt="" width="50" height="50" />
                   </div>
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-info">
                     <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                 <h3 className="h4">Взрослые ФОРМАТЫ</h3>
                 <ul className="mb-0 fs-lg">
                     <li>Семейный коучинг</li>
                     <li>Личностный рост и мотивация</li>
                     <li>Life коучинг</li>
                     <li>Мини-тренинги с элементами коучинга</li>
                     <li>Женский клуб Women_art_trick</li>
                     <li>Клуб «Приятный возраст» (55+)</li>
                     <li>Английский язык </li>
                     <li>Психологический туризм</li> 
                 </ul>
             </div>
             {/* <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div> */}
             </card></div>
         {/* Item*/}
         <div className="col">
             <card className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/03.jpg)'}}>
                 {/* <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
                     <i className="ai-arrow-right"></i>
                 </div> */}
             </div>
             <div className="card-body pb-3">
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-primary">
                     <path d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z" fill="currentColor"></path>
                 </g>
                 <g className="text-info">
                     <path d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                  <div className="d-block mt-1 mt-sm-0 mb-4" >
                     <img src={arrow} alt="" width="50" height="50" />
                   </div>
                 <h3 className="h4">ФОРМАТЫ Бизнеса</h3>
                 <ul className="mb-0 fs-lg">
                 <li>Executive коучинг</li>
                 <li>Диагностика вашего Бизнеса</li>
                 <li>Систематизация бизнеса</li> 
                 <li>Оптимизация бизнес-процессов</li> 
                 <li>Бизнес-план & СТАРТАП</li> 
                 {/* <li>СТАРТАП</li>  */}
                 <li>Бизнес-тренинги</li> 
                 <li>Командный коучинг</li> 
                 <li>Разработка документов</li> 
                 <li>Создание отдела продаж</li>
                 <li>Аудит продаж</li>
                 <li>Сопровождение в бизнес-проектах </li> 
                 <li>Наставничество & Тимбилдинг</li> 
                 {/* <li>Тимбилдинг</li>  */}
                 </ul>
             </div>
             {/* <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div> */}
             </card>
             </div>
         {/* Item*/}
         <div className="col">
             <a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/promo">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/04.jpg)'}}>
                 <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
             </div>
             <div className="card-body pb-3">
                 <div className="d-block mt-1 mt-sm-0 mb-4" >
                        <img src={logoss} alt="" width="50" height="50" />
                      </div>
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-info">
                     <path d="M34.9811 16.2655C34.3635 26.3194 26.3194 34.3634 16.2656 34.981V40H40V16.2655H34.9811Z" fill="currentColor"></path>
                 </g>
                 <g className="text-info">
                     <path d="M15.0195 30.0413C23.3152 30.0413 30.0403 23.3163 30.0403 15.0205H15.0195V30.0413Z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M29.1953 10.0415C27.141 4.19328 21.571 0 15.0208 0C6.725 0 0 6.725 0 15.0208C0 21.571 4.19328 27.141 10.0415 29.1953V10.0415H29.1953Z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                 <h3 className="h4">Система лояльности</h3>
                 <p className="mb-0 fs-lg">
                 Делаем своих клиентов счастливее! <br/> Познакомьтесь пожалуйста с нашей бонусной системой. <br/> Она состоит из направлений: ПОДАРКИ, СЕРТИФИКАТЫ, ПРОМОКОД, АКЦИИ.</p>
             </div>
             <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div></a></div>
         {/* Item*/}
         <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/blog">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/master.jpg)'}}>
                 <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
             </div>
             <div className="card-body pb-3">
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-primary">
                     <path d="M19.9999 0C11.1313 0 3.61211 5.77313 0.992188 13.7659H39.0077C36.3877 5.77313 28.8686 0 19.9999 0Z" fill="currentColor"></path>
                 </g>
                 <g className="text-info">
                     <path d="M7.29328 16.1094H0.379453C0.131328 17.368 0 18.6684 0 19.9998C0 26.9291 3.52437 33.0348 8.87797 36.6237L18.3427 27.1589L7.29328 16.1094Z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M10.9688 37.848C13.6819 39.2238 16.7505 39.9998 20.0007 39.9998C31.0464 39.9998 40.0007 31.0455 40.0007 19.9998C40.0007 18.6684 39.8694 17.3679 39.6213 16.1094H32.7074L10.9688 37.848Z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                  <div className="d-block mt-1 mt-sm-0 mb-4" >
                     <img src={logoss} alt="" width="50" height="50" />
                   </div>
                 <h3 className="h4">Полезные выходные</h3>
                 <p className="mb-0 fs-lg">
                 Ежемесячно по выходным в нашем Центре проводятся разные полезные авторские мастер-классы для детей и взрослых. 
                 Направления: Рисование, Макраме, Вязание, Плетение бисером, Изготовление снудов и шапок из пуффи,  декупаж и не только, 
                 а также конкурсы, участие с родителями, сладкие подарки.
                 <br/> Тематика и формат событий отличаются друг от друга! Приходите и проведите день с пользой для себя и ребенка!
                 </p>
             </div>
             <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div></a></div>
         {/* Item*/}
         <div className="col"><a className="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="/">
             <div className="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"  style={{backgroundImage: 'url(assets/img/landing/corporate/services/06.jpg)'}}>
                 <div className="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3"><i className="ai-arrow-right"></i></div>
             </div>
             <div className="card-body pb-3">
                 {/* <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                 <g className="text-info">
                     <path d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z" fill="currentColor"></path>
                 </g>
                 <g className="text-primary">
                     <path d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z" fill="currentColor"></path>
                 </g>
                 </svg> */}
                  <div className="d-block mt-1 mt-sm-0 mb-4" >
                     <img src={logoss} alt="" width="50" height="50" />
                   </div>
                 <h3 className="h4">Фотогалерея</h3>
                 <p className="mb-0 fs-lg">События, которые уже состоялись вы всегда сможете посмотреть в фотогалерее.
                 </p>
             </div>
             <div className="card-footer border-0 pt-3 mb-3">
                 <div className="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none"><i className="ai-arrow-right"></i></div>
             </div></a></div>
         </div>
     </section>
     {/* Partners (Brands)*/}
     <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
     <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">Компании, которые нам доверяют</h2>
             <p className="text-center pb-2 pb-sm-3 fs-lg">Клиенты, которые стали нашими друзьями за этот год</p>
         <div className="row row-cols-3 row-cols-md-5 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5">
         <div className="col">
             <img className="d-block mx-auto" src="assets/img/brands/RSHB.png" width="220" alt="RCHB"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/AgriBrasil.jpg" width="220" alt="AgriBrasil"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/NassauGroup.jpg" width="220" alt="NassauGroup"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/RegenBogen.jpg" width="160" alt="RegenBogen"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/SeaVew.jpg" width="200" alt="SeaVew"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto" src="assets/img/brands/philips.svg" width="220" alt="Philips"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto bg-dark card" src="assets/img/brands/starcraft-light.svg" width="200" alt="Starcraft"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/Travel72.jpg" width="220" alt="Travel72"/>
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/GemoTest.jpg" width="280" alt="GemoTest"/>
             {/* <img className="d-none d-dark-mode-block mx-auto" src="assets/img/brands/GemoTest.jpg" width="220" alt="GemoTest"/> */}
         </div>
         <div className="col">
             <img className="d-block mx-auto card" src="assets/img/brands/Mebelier72.jpeg" width="220" alt="Mebelier72"/>
         </div>      
      
         </div>
     </section>
  
     <section className="bg-secondary py-5">
         <div className="container py-md-2 py-lg-4 my-xl-2 my-xxl-3">
         {/* Item*/}
         <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280" datadisableparallaxdown="md">
             <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
             <div className="position-relative">
                 <img className="d-block rounded-1" src="assets/img/landing/corporate/team/talant.jpeg" alt="Img"/>
                 <div className="d-none d-lg-block position-absolute top-0 end-0 translate-middle-y w-auto pe-1 me-4">
                 <div dataos="fade-up" dataAosDuration="950" dataAosOffset="280">
                     <svg className="text-info" width="107" height="107" viewBox="0 0 107 107" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M106.192 53.0468C106.225 63.5385 103.146 73.8042 97.3443 82.5459C91.5426 91.2875 83.279 98.1125 73.5985 102.158C63.918 106.203 53.2553 107.287 42.9589 105.272C32.6624 103.257 23.1946 98.2343 15.7528 90.8387C8.31094 83.4431 3.22928 74.0068 1.15039 63.7231C-0.92849 53.4394 0.0887821 42.7702 4.07357 33.0647C8.05836 23.3591 14.8317 15.0531 23.537 9.19711C32.2424 3.34107 42.4887 0.197979 52.9804 0.16529L53.1457 53.2121L106.192 53.0468Z"></path>
                     </svg>
                 </div>
                 </div>
             </div>
             </div>
             <div className="col-md-6 col-lg-5 col-xl-4 order-md-1" dataAos="fade-up" dataAosDuration="800" dataAosOffset="180" datadisableparallaxdown="md">
             <div className="pe-md-4 pe-lg-0">
             <h3 className="pb-sm-2 pb-lg-3">Успех Центра развития «Форматы» основывается на личности.</h3>
                 {/* <p className="fs-xl pb-3 mb-1 mb-sm-2 mb-md-3 mb-lg-4"> */}
                 <p className="mb-0 fs-lg">
                 Как педагоге/наставнике, так и на ученике. Здесь проходит большая обоюдная работа с вовлеченностью в материал и мотивацию к обучению.
                 <br/>Нам ЦЕННО:
                 <ol>
                     <li>Понимание талантов и особенностей ребенка.</li>
                     <li>Индивидуальный подход к каждому участнику.</li>
                     <li>Понимание психологии личности, фиксации мышления и мотивации учеников.</li> 
                     <li>Комплексное развитие личности.</li> 
                     <li>Результативность работы.</li>
                     <li>Развитие навыков и приобретение нового опыта.</li> 
                     <li>Формирование ценностей ребенка и его отношение к окружающим.</li>
                 </ol>
                 <p className='lh-lg fw-bold text-center'> МИССИЯ нашего центра:
                 <br/> СТРОИМ ЛИЧНОСТИ.  <br/> СТРОИМ ОТНОШЕНИЯ. <br/> СТРОИМ РЕЗУЛЬТАТ.
                 </p>
                 </p>
                 {/* <a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href="/">Learn more
                 <i className="ai-arrow-right fs-4 ms-2"></i></a> */}
             </div>
             </div>
         </div>
         {/* Item*/}
         <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280" datadisableparallaxdown="md">
             <div className="col-md-6 col-xxl-5 offset-xl-1 offset-xxl-2 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
             <div className="position-relative">
                 <img className="d-block rounded-1 position-relative zindex-2" src={proforent} alt="Img"/>
                 <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-x w-auto pt-3 mt-5">
                 <div dataAos="fade-up" dataAosDuration="950" dataAosOffset="280">
                     <svg className="text-primary" width="160" height="160" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="80" cy="80" r="80"></circle>
                     </svg>
                 </div>
                 </div>
             </div>
             </div>
             <div className="col-md-6 col-xl-5 order-md-1" dataAos="fade-up" dataAosDuration="800" dataAosOffset="180" datadisableparallaxdown="md">
             <div className="pe-md-4 pe-lg-0">
                 <h3 className="pb-sm-2 pb-lg-3">Наш профессиональный подход к вашему личностному росту</h3>
                 <div className="row row-cols-1 row-cols-sm-2 g-4">
                 <div className="col">
                     <div className="text-muted mb-2"><i className="ai-emoji-smile d-block h2 text-primary fw-normal pb-2 mb-1"></i>
                     </div>
                     <p className="mb-0 fs-lg">Мы показываем Вам понимание типа личности, его особенностей, мотивации, фиксации мышления, природные таланты и сильные стороны.</p>
                 </div>
                 <div className="col">
                     <div className="text-muted mb-2"><i className="ai-emoji-smile d-block h2 text-primary fw-normal pb-2 mb-1"></i>
                     </div>
                     <p className="mb-0 fs-lg">Вы увидите варианты образовательной и карьерной траектории с учетом ваших способностей , а также возможные хобби и интересы, чтобы уравновесить свои таланты.</p>
                 </div>
                 </div>
             </div>
             </div>
         </div>
         {/* Item*/}
         <div className="row align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280" datadisableparallaxdown="md">
             <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
             <div className="position-relative">
                 <img className="d-block rounded-1" src={create} alt="Img"/>
                 <div className="d-none d-lg-block position-absolute top-0 start-50 translate-middle w-auto ms-2">
                 <div dataAos="fade-up" dataAosDuration="950" dataAosOffset="280">
                     <svg className="text-danger" width="108" height="111" viewBox="0 0 108 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M68.9244 1.23484C69.1072 0.713703 69.6783 0.438641 70.1961 0.630706C78.5792 3.74012 86.1086 8.79818 92.1601 15.3932C98.4371 22.2339 102.93 30.5171 105.241 39.5091C107.552 48.501 107.61 57.9241 105.41 66.9438C103.209 75.9634 98.8179 84.3011 92.6254 91.2184C86.4328 98.1356 78.6299 103.419 69.9078 106.6C61.1857 109.782 51.8136 110.763 42.6217 109.457C33.4298 108.151 24.7018 104.598 17.2109 99.1136C9.98911 93.8259 4.13195 86.8998 0.117483 78.9106C-0.130486 78.4171 0.079957 77.8191 0.577752 77.5799L21.7446 67.4094C22.2425 67.1702 22.8384 67.3807 23.0936 67.8705C25.2883 72.084 28.4252 75.7403 32.2656 78.5522C36.3752 81.5612 41.1634 83.5102 46.2062 84.2266C51.2489 84.943 56.3905 84.4048 61.1756 82.6595C65.9606 80.9142 70.2414 78.0157 73.6387 74.2208C77.0359 70.426 79.4449 65.8518 80.6522 60.9036C81.8594 55.9553 81.8277 50.7857 80.5598 45.8526C79.2919 40.9196 76.827 36.3753 73.3834 32.6224C70.1654 29.1154 66.1855 26.4006 61.7558 24.6837C61.2409 24.4841 60.9659 23.9149 61.1488 23.3938L68.9244 1.23484Z"></path>
                     </svg>
                 </div>
                 </div>
             </div>
             </div>
             <div className="col-md-6 col-lg-5 col-xl-4 order-md-1" dataAos="fade-up" dataAosDuration="800" dataAosOffset="180" datadisableparallaxdown="md">
             <div className="pe-md-4 pe-lg-0">
                 <h3 className="pb-sm-2 pb-lg-3">Полезная продлёнка от «Форматы»</h3>
                 <p className="mb-0 fs-lg">Мы предлагаем вашему вниманию дополнительную развивающую программу для вашего ребенка, а именно: </p>
                 <ul className="list-unstyled">
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>английский язык,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>шахматы / шашки,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>занятия по каллиграфии и скорочтению,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>уроки на этикет и внимание,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>подготовка домашнего задания,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>рисование / лепка,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>современная хореография,</li>
                 <li className="d-flex pt-1 mt-2 mx-2 mx-md-0"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>мастер-класс/тематическая вечеринка 1 раз в месяц.</li>
                 </ul>
                 <p className="fs-lg mb-lg-4">А также мы встречаем и провожаем детей в школу! У нас вкусное питание завтрак/обед или обед/полдник согласно смене!
                 <br/> Учим дружить, уважать друг друга и предоставляем гармоничную атмосферу для развития личности и формирования навыков!</p>
                 <a className="btn" style={{backgroundColor: '#004655'}} href="/">Записаться на продленку</a>
             </div>
             </div>
         </div>
         </div>
     </section>
 
     <section className="bg-dark dark-mode position-relative pb-5 pb-lg-0 pt-md-2 pt-lg-4 pt-xl-5">
     <div className="container pb-sm-3 pb-md-4 pb-lg-0 pt-5">
     <div className="row pb-2 pb-lg-0 pt-1 pt-sm-4">
       <div className="col-md-5 col-xl-4">
         <h2 className="h1 text-center text-md-start pb-3 mb-0 mb-md-3 mb-lg-4">
           Отрасли, в которых мы работаем
         </h2>
       </div>
       <div className="col-md-7 col-lg-6 offset-lg-1 offset-xl-2">
         <div className="ps-md-4 ps-lg-0">
           {/* Accordion */}
           <div className="accordion accordion-alt" id="industries">
             <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
               <h3 className="accordion-header">
                 <button
                   className="accordion-button"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#finance"
                   aria-expanded="true"
                   aria-controls="finance"
                 >
                   Детские ФОРМАТЫ
                 </button>
               </h3>
               <div
                 className="accordion-collapse collapse show"
                 id="finance"
                 data-bs-parent="#industries"
               >
                 <div className="accordion-body">
                   Английский язык, Рисование/лепка, Шахматы, Логопед, Музыкальное
                   направление, Профориентация, Полезные каникулы
                 </div>
               </div>
             </div>
             <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
               <h3 className="accordion-header">
                 <button
                   className="accordion-button collapsed"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#tech"
                   aria-expanded="false"
                   aria-controls="tech"
                 >
                   Взрослые ФОРМАТЫ
                 </button>
               </h3>
               <div
                 className="accordion-collapse collapse"
                 id="tech"
                 data-bs-parent="#industries"
               >
                 <div className="accordion-body">
                   Семейный коучинг, Личностный рост, Управленческий коучинг,
                   Женский клуб Women_art_trick, Клуб «Приятный возраст»,
                   Психологический туризм
                 </div>
               </div>
             </div>
             <div className="accordion-item mb-n3 mb-lg-n2 mb-xl-1">
               <h3 className="accordion-header">
                 <button
                   className="accordion-button collapsed"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#medicine"
                   aria-expanded="false"
                   aria-controls="medicine"
                 >
                   ФОРМАТЫ Бизнеса
                 </button>
               </h3>
               <div
                 className="accordion-collapse collapse"
                 id="medicine"
                 data-bs-parent="#industries"
               >
                 <div className="accordion-body">
                   Групповой Коуч, Командный Коуч, Корпоративный Коуч, Групповое
                   Тестирование, Бизнес Тренинги
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Button visible on screens < 768px */}
     <div className="text-center d-md-none mt-4">
       <a className="btn btn-outline-primary" href="/aboutus">
         Подробнее о «Форматы»
       </a>
     </div>
   </div>
         {/* Shapes*/}
         <div className="d-none d-lg-flex align-items-end mt-xl-n5">
         <div dataAos="zoom-in" datAosAnchorPlacement="bottom-bottom">
             <svg className="text-info" width="116" height="191" viewBox="0 0 116 191" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M58 191C90.0325 191 116 165.033 116 133L116 4C116 1.79086 114.209 7.8281e-08 112 1.74846e-07L60 2.44784e-06C26.8629 3.89631e-06 4.54735e-07 26.8629 1.9032e-06 60L5.09413e-06 133C6.49432e-06 165.033 25.9675 191 58 191Z"></path>
             </svg>
         </div>
         <div dataAos="zoom-in" datAosAnchorPlacement="bottom-bottom" dataAosDelay="150">
             <svg className="text-warning" width="199" height="120" viewBox="0 0 199 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <rect width="199" height="120" rx="60"></rect>
             </svg>
         </div>
         <div dataAos="zoom-in" datAosAnchorPlacement="bottom-bottom" dataAosDelay="300">
             <svg className="text-danger" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <circle cx="84.5" cy="84.5" r="84.5"></circle>
             </svg>
         </div>
         <div dataAos="zoom-in" datAosAnchorPlacement="bottom-bottom" dataAosDelay="450">
             <svg className="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M7.38722e-06 84.5C5.92617e-06 101.213 4.95585 117.55 14.2408 131.446C23.5258 145.342 36.7229 156.172 52.1633 162.568C67.6036 168.963 84.5937 170.637 100.985 167.376C117.377 164.116 132.433 156.068 144.251 144.251C156.068 132.433 164.116 117.377 167.376 100.985C170.637 84.5937 168.963 67.6036 162.568 52.1632C156.172 36.7229 145.342 23.5258 131.446 14.2408C117.55 4.95584 101.213 -5.92617e-06 84.5 -7.38722e-06L84.5 84.5L7.38722e-06 84.5Z"></path>
             </svg>
         </div>
         </div>
     </section>
 
     {/* <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
         <div className="row pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-md-2">
         <div className="col-md-9 col-lg-7 order-md-2">
         <swiper-container >
           <swiper-slide>  
             <div className="swiper-slide" dataSwiperBinded="#testimonial-1">
                 <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                     <div className="ps-3">
                     <h3 className="h5 mb-0">Татьяна Шулъц</h3>
                     <p className="text-muted mb-0">Упрвляющая</p>
                     </div>
                 </div>
                 <h2 className="mb-lg-4">Thanks to your talented team for the strategy we dreamed about!</h2>
                 <p className="lead mb-0">Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.  </p>
                 </div>
           </swiper-slide>
           <swiper-slide>
             <div className="swiper-slide" dataSwiperBinded="#testimonial-2">
                 <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                     <div className="ps-3">
                     <h3 className="h5 mb-0">Лера Серкина</h3>
                     <p className="text-muted mb-0">Marketing Coordinator</p>
                     </div>
                 </div>
                 <h2 className="mb-lg-4">Exceptional work, delivery and flexibility. An excellent result.</h2>
                 <p className="lead mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.  </p>
                 </div>
           </swiper-slide>
           <swiper-slide>   
             <div className="swiper-slide" dataSwiperBinded="#testimonial-3">
                 <div className="d-flex d-md-none pt-3 mb-3"><i className="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                     <div className="ps-3">
                     <h3 className="h5 mb-0">Данил Войский</h3>
                     <p className="text-muted mb-0">CEO, Co-Founder</p>
                     </div>
                 </div>
                 <h2 className="mb-lg-4">Thanks to you, we have created a unique branding that is our pride!</h2>
                 <p className="lead mb-0">Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.  </p>
                 </div>
           </swiper-slide>
         </swiper-container>
         </div>
         <div className="col-md-3 offset-lg-1 order-md-1 mt-n3">
             <i className="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style={{fontSize: '150px'}}></i>
             <div className="binded-content h-auto d-none d-md-block">
             <div className="binded-item h-auto active" id="testimonial-1">
                 <h3 className="h5 mb-1">Татьяна Шулъц</h3>
                 <p className="text-muted mb-0">Head of Marketing</p>
             </div>
             <div className="binded-item h-auto" id="testimonial-2">
                 <h3 className="h5 mb-1">Лера Серкина</h3>
                 <p className="text-muted mb-0">Marketing Coordinator</p>
             </div>
             <div className="binded-item h-auto" id="testimonial-3">
                 <h3 className="h5 mb-1">Данил Войский</h3>
                 <p className="text-muted mb-0">CEO, Co-Founder</p>
             </div>
             </div>
             <div className="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
             <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial"><i className="ai-arrow-left"></i></button>
             <div className="testimonials-count fw-medium flex-shrink-0 text-center" style={{width: '2.5rem'}}></div>
             <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial"><i className="ai-arrow-right"></i></button>
             </div>
         </div>
         </div>
     </section> */}
 
 
    
     <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
       <div className="row pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-md-2">
         <div className="col-md-9 col-lg-7 order-md-2">
           {/* Swiper slider */}
           <div className="swiper" 
         //   data-swiper-options
           data-swiper 
           >
             <div className="swiper-wrapper">
               <div className="swiper-slide">
             
               {/* <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-1">
                      <p className="text-muted mb-0">Лера Серкина - Marketing Coordinator</p>
                   </div>
              </div> */}
               <figure>
                 <blockquote className="blockquote">
                 <h3 className="mb-lg-4">Мне бы хотелось сказать: "Огромное спасибо!" каждому сотруднику Форматов!</h3>
                 <p className="lead mb-0">
                 Ребёнок ходит с октября на полезную продленку. Это не первая наша продленка, поэтому есть с чем сравнивать. 
                 Ребёнка забирают с занятий, о чем каждый день ставят меня в известность. Кормят их очень вкусно, дочь приходит домой сытая. 
                 Уроки всегда выучены. Всё занятия ей очень нравятся, преподаватели умеют привить любовь к своим предметам. 
                 Отдельно хочется сказать, о том, что здесь постоянно проходят мероприятия, праздники, игры. 
                 А в те дни, когда школа по каким-то причинам не работает детей готовы принимать на полный день. 
                 И это лишь часть всего хорошего, что даёт нам замечательный коллектив Форматов. Я понимаю, как много труда и любви к детям 
                 и своему делу несут в себе люди. Мне бы хотелось сказать: "Огромное спасибо!" каждому сотруднику Форматов. 
                 Вы делаете бесценное дело! Мы вас очень любим ❤
                 </p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Олеся Сибирева</h3>
                 </figcaption>
               </figure>
               </div>
 
               {/* Item 2 */}
               <div className="swiper-slide">
 {/* 
               <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-2">
                      <p className="text-muted mb-0">Татьяна Шулъц - Head of Marketing</p>
                   </div>
              </div> */}
               <figure>
                 <blockquote className="blockquote">
                 <h3 className="mb-lg-4">Индивидуальный подход. Превосходный результат.</h3>
                 <p> Прошла профессиональную диагностику у Анны Владимировны, нахожусь под большим впечатлением! 
                     Очень интересно было узнать больше о своих личностных и профессиональных возможностях, 
                     здорово поможет в настоящем и будущем. Анна Владимировна даёт развёрнутый и подробный анализ,
                     у неё очень комфортный индивидуальный подход к каждому ☀ Очень советую! Спасибо большое!
                 </p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Елизавета S</h3>
                 </figcaption>
                </figure>
               </div>
 
               {/* Item 3 */}
               <div className="swiper-slide">
 
               {/* <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-3">
                      <p className="text-muted mb-0">Данил Войский - CEO, Co-Founder</p>
                   </div>
              </div> */}
 
               <figure>
                 <blockquote className="blockquote">
                 <h2 className="mb-lg-4">Спасибо вам за уникальность.</h2>
                 <p> В центре Форматы изучаем английский язык. Преподаватели грамотные, заинтересованные в успехах своих учеников. 
                     Грамотно встроена взаимосвязь лексики, фонетики, чтения. Есть задания для подготовки к ОГЭ.
                     Уроки ведут также носители языка. Сыну нравится. Спасибо большое Анне Владимировне, Елене и Раймонду!
                 </p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Татьяна Дерикот</h3>
                 </figcaption>
                </figure>
               </div>
 
               <div className="swiper-slide">
 
               {/* <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-3">
                      <p className="text-muted mb-0">Данил Войский - CEO, Co-Founder</p>
                   </div>
              </div> */}
 
               <figure>
                 <blockquote className="blockquote">
                 <h2 className="mb-lg-4">Отличный центр! Вы супер!!!</h2>
                 <p> Отличный центр! Ребёнок ходит с интересом. Все занятия наполнены смыслом и знаниями. 
                     Огромная благодарность руководителю центра Анне Владимировне и всем педогогам. 
                     Успехов в работе. Вы супер!!!
                 </p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Екатерина Кызымова</h3>
                 </figcaption>
                </figure>
               </div>
 
               <div className="swiper-slide">
 
               {/* <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-3">
                      <p className="text-muted mb-0">Данил Войский - CEO, Co-Founder</p>
                   </div>
              </div> */}
 
               <figure>
                 <blockquote className="blockquote">
                 <h2 className="mb-lg-4">Мы рады, что попали в вашу команду!</h2>
                 <p> Прекрасное время на каникулах провёл наш сын. Остался в восторге! 
                     Ещё ни разу от него не слышали слов "Очень хорошо". 
                     Мы рады, что попали в вашу команду! Спасибо вам большое! </p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Елена Яркова</h3>
                 </figcaption>
                </figure>
               </div>
 
               <div className="swiper-slide">
 
               {/* <div className="col-md-3 offset-lg-1 order-md-1">
                   <div className="binded-item h-auto active" id="testimonial-3">
                      <p className="text-muted mb-0">Данил Войский - CEO, Co-Founder</p>
                   </div>
              </div> */}
 
               <figure>
                 <blockquote className="blockquote">
                 <h2 className="mb-lg-4">Мы придем еще, обязательно.</h2>
                 <p> Ходили на полезные каникулы, ребята остались в восторге, придем на летние, обязательно!</p>
                 </blockquote>
                 <figcaption className="blockquote-footer"><h3 className="h5 mb-0">Мансур К</h3>
                 </figcaption>
                </figure>
               </div>
 
             </div>
           </div>
         </div>
         <div className="col-md-3 offset-lg-1 order-md-1 mt-n3">
 
           {/* Content binded to slider (on screens > 768px) */}
           <div className="binded-content h-auto d-none d-md-block">
             {/* <i className="ai-emoji-happy h1 float-left" id="next-testimonial"></i> */}
             <p className="h3 d-flex pb-2 pb-md-0 pt-4 mt-3">Отзывы клиентов</p>
           </div>
 
           {/* Swiper controls */}
           <div className="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
             <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial">
               <i className="ai-arrow-left"></i>
             </button>
             <div className="testimonials-count fw-medium flex-shrink-0 text-center" style={{ width: '2.5rem' }}></div>
             <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial">
               <i className="ai-arrow-right"></i>
             </button>
           </div>
         </div>
       </div>
     </section>
 
 
 
 
 
     <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
         <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
         <div className="col-lg-4 d-flex flex-column">
             <h2 className="display-2 d-none d-lg-block">Наша команда</h2>
             <h2 className="h1 d-lg-none text-center mb-0">Наша команда</h2>
             <div className="d-none d-lg-flex mt-auto mb-n3">
             <div dataAos="fade-left" dataAosDuration="700" dataAosAnchorPlacement="bottom-bottom">
                 <svg className="text-info" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="84.5" cy="84.5" r="84.5"></circle>
                 </svg>
             </div>
             <div dataAos="fade-right" dataAosDuration="700" dataAosAnchorPlacement="bottom-bottom">  
                 <svg className="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z"></path>
                 </svg>
             </div>
             </div>
         </div>
         {/* <div className="position-relative">
                 <img className="d-block rounded-1 position-relative zindex-2" src="assets/img/landing/corporate/features/02.jpg" alt="Img"/>
                 <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-x w-auto pt-3 mt-5">
                 <div dataAos="fade-up" dataAosDuration="950" dataAosOffset="280">
                     <svg className="text-primary" width="160" height="160" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="80" cy="80" r="80"></circle>
                     </svg>
                 </div>
                 </div>
             </div> */}
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={Anna} alt="AnnaR"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1">Рублева Анна Владимировна</h3>
                 <p className="mb-3">Руководитель Центра. Сертифицированный бизнес-тренер: 
                 International Коуч / Командный коуч/ Коуч переговоров</p>
                 <div className="d-flex justify-content-center">
                     <a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="https://www.facebook.com/profile.php?id=100035482865697"><i className="ai-facebook"></i></a>
                     <a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="https://www.instagram.com/women_art_trick/"><i className="ai-odnoklassniki"></i></a>
                     <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/anyuta_rubleva/"><i className="ai-linkedin"></i></a>
                     <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/rubleva_coach"><i className="ai-vk"></i></a>
                 </div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={engTeach} alt="Img"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1">Raymond</h3>
                 <p className="mb-3">Учитель Английского</p>
                 <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={engTch} alt="Img"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1">Елена Леонидовна</h3>
                 <p className="mb-3">Учитель Английского</p>
                 <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-lg-4 d-none d-lg-flex flex-column justify-content-center text-center">
             <p className="lead px-3 mb-0">
             Мы обеспечиваем Продуктивную атмосферу для достижения целей и развития навыков - лучше написать! Выбери свой ФОРМАТ! ДЕЛАЙСМЕЛО. 
             {/* <br/>МИССИЯ нашего центра: СТРОИМ ЛИЧНОСТИ. <br/>СТРОИМ ОТНОШЕНИЯ. СТРОИМ РЕЗУЛЬТАТ. */}
                 </p>
         </div>
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={polina} alt="Img"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1"> Вершинина Полина</h3>
                 <p className="mb-3">- главный администратор</p>
                 <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-behance rounded-circle mx-2" href="/"><i className="ai-behance"></i></a><a className="btn btn-icon btn-sm btn-light btn-dribbble rounded-circle mx-2" href="/"><i className="ai-dribbble"></i></a></div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={logoped} alt="Img"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1">Татьяна Ильинична</h3>
                 <p className="mb-3">Логопед и психолог</p>
                 <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="/"><i className="ai-twitter"></i></a><a className="btn btn-icon btn-sm btn-light btn-stack-overflow rounded-circle mx-2" href="/"><i className="ai-stack-overflow"></i></a></div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-sm-6 col-md-4">
             <div className="card-hover border-0 rounded-1 overflow-hidden">
                 <img src={alex} alt="Img"/>
             <div className="position-absolute p-1 top-0 start-0 w-100 h-100 opacity-0">
                 <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                 <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
                 <h3 className="h5 mb-1">Зуев Алексей</h3>
                 <p className="mb-3"> - администратор, куратор «Полезные каникулы, фотограф, дизайнер, вожатый </p>
                 <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="/"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="/"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="/"><i className="ai-linkedin"></i></a></div>
                 </div>
             </div>
             </div>
         </div>
         <div className="col-lg-4 d-flex flex-column justify-content-center text-center">
             <div className="mx-auto" style={{maxWidth: '245px'}}>
             <h3 className="h2 mb-4">Познакомится  с нашей командой поближе</h3><a className="btn btn-outline-primary" href="/aboutus">О нас</a>
             </div>
         </div>
         </div>
     </section>
 
     <section className="container py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5">
         <h2 className="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">Наши события</h2>
         <div className="row">
         <div className="col-lg-6 pb-3 mb-2 mb-sm-3">
             <a className="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center" href="/blog" style={{maxWidth: '600px', minHeight: '300px', backgroundImage: 'url(assets/img/landing/corporate/blog-img.jpg)'}}>
             <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
             <div className="card-body dark-mode d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2">
                 <h3>Наши Форматы и новости нашего центра</h3>
                 <p className="mb-0">Приходите и примите участие...</p>
             </div></a></div>
         <div className="col-lg-6">
             <div className="row row-cols-1 row-cols-sm-2 g-4">
             <article className="col">
                 <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                 <h3 className="h4"><a href="/blog">Cобытие, которое состоялось в честь Дня Защиты Детей 1 июня 2023 года.</a></h3>
                 <p className="mb-4">Приятный день с пользой для семьи! Мы познакомим вас с концепцией нашего центра, вы и ваш ребенок...</p>
                 <div className="d-flex align-items-center"><span className="fs-sm text-muted">Июнь 1, 2023</span>
                 {/* <span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Strategy</a> */}
                 </div>
                 </div>
             </article>
             <article className="col">
                 <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                 <h3 className="h4"><a href="/blog">Наши траектории Форматы</a></h3>
                 <p className="mb-4">Форматы...</p>
                 <div className="d-flex align-items-center"><span className="fs-sm text-muted">Июнь 10, 2023</span>
                 {/* <span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Business</a> */}
                 </div>
                 </div>
             </article>
             <article className="col">
                 <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                 <h3 className="h4"><a href="/blog">Наши траектории Форматы</a></h3>
                 <p className="mb-4">Наши траектории Форматы...</p>
                 <div className="d-flex align-items-center"><span className="fs-sm text-muted">July 27, 2023</span>
                 {/* <span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Analytics</a> */}
                 </div>
                 </div>
             </article>
             <article className="col">
                 <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                 <h3 className="h4"><a href="/blog">Наши траектории Форматы</a></h3>
                 <p className="mb-4">Какие новости...</p>
                 <div className="d-flex align-items-center"><span className="fs-sm text-muted">July 25, 2023</span>
                 {/* <span className="fs-xs opacity-20 mx-3">|</span><a className="badge text-nav fs-xs border" href="/">Strategy</a> */}
                 </div>
                 </div>
             </article>
             </div>
         </div>
         </div>
         <div className="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4">
             <a className="d-inline-flex align-items-center fw-semibold text-decoration-none" href="/blog">Все новости<i className="ai-arrow-right fs-4 ms-2"></i></a></div>
     </section>
 
     <section className="position-relative mt-n5 mt-lg-0">
         <div className="bg-secondary position-absolute bottom-0 start-0 w-100" style={{height: 'calc(100% - 3rem)'}}></div>
         <div className="container position-relative zindex-2">
         <div className="row">
             <div className="col-lg-6 py-5 pb-lg-0 mb-sm-2 mb-md-3 mb-lg-0 mt-3 mt-sm-4 mt-md-5">
             <h2 className="h1 text-center text-lg-start pt-3 mt-3 mb-4">Стать частью <br className='d-none d-lg-inline'/>нашей команды</h2>
 
             <div className="text-center text-lg-start pt-4"><a className="btn btn-outline-dark" href="mailto:developskillsnow@yandex.ru">Подать заявку на работу</a></div>
             <div className="d-none d-lg-flex justify-content-end mt-n4 me-n4">
                 <div dataAos="fade-left" dataAosDuration="700" dataAosAnchorPlacement="bottom-bottom">
                 <svg className="text-danger" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z"></path>
                 </svg>
                 </div>
                 <div dataAos="fade-right" dataAosDuration="700" dataAosAnchorPlacement="bottom-bottom">  
                 <svg className="text-info" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="58.5" cy="58.5" r="58.5"></circle>
                 </svg>
                 </div>
             </div>
             </div>
             <div className="col-lg-6">
             <div className="Header bg-primary d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-1 rounded-bottom-0 p-5">
                 <div className="dark-mode position-relative zindex-2 py-sm-3 py-md-4" style={{maxWidth: '360px'}}>
                 <h2 className="h1">Приглашаем в гости</h2>
                 {/* add logo */}
                 <p className="mb-0">Мы команда, которая поможет Вам подобрать программу.</p>
                 <div className="d-flex flex-column flex-sm-row align-items-center pt-3 mt-3 mt-lg-4">
                     <a className="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" href="mailto:developskillsnow@yandex.ru">Связаться с нами</a>
                     <a className="d-inline-block text-white fw-medium p-2" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a>
                 </div>
                 </div>
             </div>
             </div>
         </div>
         </div>
     </section>
     {/* </main> */}
 
 {/* Back to top button*/}
 <a className="btn-scroll-top" href="#top" data-scroll>
   <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></circle>
   </svg><i className="ai-arrow-up"></i></a>
   {/* </body> */}
       </div>
     );
   }
 // }
 
 export default Home;