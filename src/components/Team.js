import {React, useEffect, useRef } from 'react';
// import UserService from "../services/user.service";
import Parallax from 'parallax-js';

import 'swiper/swiper-bundle.min.css';

import rub from "../img/teamcoach.jpg";
import team from "../img/teamc.jpg";
import "./images.css";



export default function Team() {
       const sceneRef = useRef(null); // Reference for the container
    
        useEffect(() => {
          if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current, {
              relativeInput: true, // Adjusts movement based on mouse or scroll
            });
    
            return () => parallaxInstance.destroy(); // Cleanup on unmount
          }
        }, []);
      return (
        <div>
          {/* <img src={require("../img/executive.jpg")} alt="executive" className="w-100" /> */}
          <section className="overflow-hidden">
            <div className="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
              <div className="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
                <div className="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
                  <div className="parallax me-lg-n4 me-xl-n5" style={{ maxWidth: '667px' }}>
                  <div ref={sceneRef} className="container mt-4">
                    <div className="parallax-container position-relative" dataDepth="0.1"><img className="img-fluid custom-image shadow-lg" src={rub} alt="Team Coach"/></div>
                    <br/>
                    <div className="parallax-container position-relative" dataDepth="0.1"><img className="img-fluid custom-image shadow-lg" src={team} alt="Team Sertificate"/></div>
                    {/* <div className="parallax-layer" data-depth="0.1"><img src="assets/img/landing/business-consulting/hero/01.png" alt="Layer"/></div> */}
                    {/* <div className="parallax-layer stat-box" dataDepth="-0.25"><img src="assets/img/landing/business-consulting/hero/02.png" alt="Layer"/></div> */}
                    {/* <div className="parallax-layer" data-depth="0.25"><img src="assets/img/landing/business-consulting/hero/03.png" alt="Layer"/></div> */}
                  </div>
                  </div>
                </div>
                <div className="col-lg-5 order-lg-0">
                  <h2 className="display-6 text-center text-lg-start pb-sm-2 pb-md-3">Командный коучинг</h2>
                  <h2 className="lead text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style={{ maxWidth: '620px' }}>Высоко результативный трансформационный коучинг, сфокусированный на решении.</h2>
                  <ul className="list-unstyled fs-lg text-center text-lg-start pb-5 mx-auto mx-lg-0 mb-5" style={{ maxWidth: '620px' }}>
                    <p className="h4">Влияет на создание командного результата:</p>
                    <li className="mb-2">✔️ объединение личных и организационных целей в команде;</li>
                    <li className="mb-2">✔️ разработка и написание формулировки миссии;</li>
                    <li className="mb-2">✔️ практика мозгового штурма;</li>
                    <li className="mb-2">✔️ коучинг командного прорыва;</li>
                    <li className="mb-2">✔️ разрешение конфликта внутри команды;</li>
                    <li className="mb-2">✔️ упражнения на вовлеченность и развитие мотивации команды.</li>
                    <br/>
                    {/* <p className="lead fs-xl text-center text-lg-start">Задача - получать удовольствие от развития бизнеса и собственного развития.</p> */}
                  {/* <div className="input-group mx-auto mx-lg-0" style={{maxWidth: '420px'}}><span class="input-group-text text-muted"><i class="ai-mail"></i></span>
                    <input className="form-control" type="email" placeholder="Enter your email" />
                    <button className="btn btn-primary" type="button">Book a call</button>
                  </div> */}
                  <br/>
                  <p  className="lead fs-lg">Продолжительность: от 3-х часов</p>
                  {/* <p className="mb-lg-3 fw-semibold">Рекомендуется 4-6 продвинутых сессий.</p> */}
                  <p  className="lead fs-lg">Стоимость: от 15 000 рублей (до 5 человек)</p>
                  <a className="nav-link lead fs-lg" href="tel:+7(922)471-44-34">Запись по телефонам: + 7(922)471-44-34</a>
                  <br/>  
                  <p className="mb-lg-3 fw-semibold" style={{ maxWidth: '490px' }}> Подробности о направлении и наличие мест уточняйте у администратора
                  {/* <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a> */}
                  {/* <p className="lead"> */}
                  <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/rubleva_coach"><i className="ai-vk"> </i> </a> 
                  <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/anyuta_rubleva?igsh=NHIwdWYxNGJhdWY2"><i className="ai-instagram"> </i> </a> 
                  </p>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      );

//   return (
//     <div className="container py-5">
//       <h1 className="display-5 fw-bold text-center mb-4">Our Team</h1>
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
//         <div className="col">
//           <div className="card h-100">
//             <img src="assets/img/landing/corporate/team/1.jpg" className="card-img-top" alt="Team Member 1" />
//             <div className="card-body">
//               <h5 className="card-title">John Doe</h5>
//               <p className="card-text">Founder &amp; CEO</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card h-100">
//             <img src="assets/img/landing/corporate/team/2.jpg" className="card-img-top" alt="Team Member 2" />
//             <div className="card-body">
//               <h5 className="card-title">Jane Doe</h5>
//               <p className="card-text">Co-Founder &amp; CTO</p>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card h-100">
//             <img src="assets/img/landing/corporate/team/3.jpg" className="card-img-top" alt="Team Member 3" />
//             <div className="card-body">
//               <h5 className="card-title">Bob Smith</h5>
//               <p className="card-text">Software Engineer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}
