import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Minitraining = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        effect: "creative",
        loop: true,
        allowTouchMove: false,
        speed: 450,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          el: "#thumbnails",
          clickable: true,
          renderBullet: function (index, className) {
            const images = [
              "/assets/img/landing/corporate/r01.jpg",
              "/assets/img/landing/corporate/r02.jpg",
              "/assets/img/landing/corporate/r03.jpg",
              "/assets/img/landing/corporate/r04.jpg",
              "/assets/img/landing/corporate/r05.jpg",
            ];
            return `<li class="${className} swiper-thumbnail swiper-pagination-bullet">
                      <img src="${images[index]}" alt="Thumbnail">
                    </li>`;
          },
        },
      });
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
    };
  }, []);

//   return (
//     <section className="bg-dark dark-mode position-relative py-5">
//       <div
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{
//           backgroundImage: "url(/assets/img/landing/conference/noise.png)",
//           mixBlendMode: "soft-light",
//           opacity: "12%",
//         }}
//       ></div>
//       <div className="container position-relative zindex-2 py-md-3 py-lg-4 py-xl-5">
//         <div className="row align-items-center justify-content-center pt-5 pb-2 pb-sm-3 mt-sm-4">
//           {/* Swiper Container */}
//           <div className="col-10 col-sm-8 col-md-6 col-xl-5 offset-lg-1 offset-xl-2 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
//             <div ref={swiperRef} className="swiper" style={{ borderRadius: "50%", borderBottomRightRadius: "0" }}>
//               <div className="swiper-wrapper">
//                 {/* Slides */}
//                 {[
//                   { name: "Esther Howard", title: "VP of Strategy, Stretto Inc.", img: "/assets/img/landing/conference/hero/01.jpg" },
//                   { name: "Albert Flores", title: "Product Manager, Google", img: "/assets/img/landing/conference/hero/02.jpg" },
//                   { name: "Kathryn Murphy", title: "VP of Marketing, Glassdoor", img: "/assets/img/landing/conference/hero/03.jpg" },
//                 ].map((speaker, index) => (
//                   <div className="swiper-slide" key={index}>
//                     <div className="position-relative overflow-hidden" style={{ borderBottomLeftRadius: "50%", borderTopLeftRadius: "50%" }}>
//                       <img src={speaker.img} alt={speaker.name} />
//                       <div
//                         className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
//                         style={{
//                           height: "215px",
//                           background: "linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)",
//                         }}
//                       >
//                         <div className="text-end pe-4 pb-4">
//                           <h3 className="h5 mb-1">{speaker.name}</h3>
//                           <p className="fs-sm mb-0">{speaker.title}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Thumbnails */}
//             <div className="swiper-thumbnails swiper-thumbnails-circle flex-nowrap justify-content-end pt-4" id="thumbnails"></div>
//           </div>
//           {/* Text Content */}
//           <div className="col-sm-10 col-md-6 col-lg-5 order-md-1">
//             <div className="d-flex align-items-center lead pb-3 pb-sm-4 pb-lg-5 mb-2 mb-md-3 mb-lg-0 mb-xl-2">
//               <div className="text-light">Nov 15-16, '23</div>
//               <div className="text-warning mx-3 mx-sm-4">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z"></path>
//                 </svg>
//               </div>
//               <div className="text-light">Berlin, GE</div>
//             </div>
//             <h1 className="display-3 text-uppercase d-none d-lg-block pb-3 mb-4">The biggest international conference</h1>
//             <h1 className="display-5 text-uppercase d-lg-none pb-1 pb-sm-2">The biggest international conference</h1>
//             <p className="fs-lg pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-xl-2">
//               Mattis aliquet faucibus senectus feugiat sapien mi diam nibh velit nunc purus elementum faucibus lectus et mauris.
//             </p>
//             <div className="d-sm-flex">
//               <a className="btn btn-lg btn-primary w-100 w-md-auto mb-3 mb-sm-0 me-sm-3 me-lg-4" href="#tickets">
//                 Buy access pass<i className="ai-arrow-down ms-2 me-n2"></i>
//               </a>
//               <a className="btn btn-lg btn-outline-light w-100 w-md-auto" href="/">
//                 <i className="ai-calendar me-2 ms-n2"></i>Add to calendar
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h1 className="display-4">Тестирование</h1>
//       <p className="lead">
//         Тестирование сотрудников действительно является важным аспектом управления персоналом, 
//         особенно когда речь идет о подборе команды, мотивировании работников и повышении эффективности их труда. 
//         Понимание индивидуальных особенностей каждого сотрудника помогает создать более продуктивную рабочую среду 
//         и улучшить результаты компании.
//       </p>
//     </section>
//   );
// };

return (
  <div>
    <section className="position-relative py-5">
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundImage: 'url(assets/img/landing/conference/noise.png)', mixBlendMode: 'soft-light', opacity: '12%' }}
      ></div>
      
      <div className="container position-relative zindex-2 py-md-3 py-lg-4 py-xl-5">
        <div className="row align-items-center justify-content-center pt-5 pb-2 pb-sm-3 mt-sm-4">
          <div className="col-10 col-sm-8 col-md-6 col-xl-5 offset-lg-1 offset-xl-2 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
            <div 
              ref={swiperRef} 
              className="swiper" 
              style={{ borderRadius: '50%', borderBottomRightRadius: 0 }}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div 
                    className="position-relative overflow-hidden"
                    style={{ borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' }}
                  >
                    <img src="/assets/img/landing/corporate/r01.jpg" alt="Anna Rubleva" />
                    <div 
                      className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                      style={{ height: '215px', background: 'linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)' }}
                    >
                      <div className="text-end pe-4 pb-4">
                        <h3 className="h4 mb-1 text-info">Рублева Анна Владимировна</h3>
                        <p className="fs-sm mb-0 text-secondary">Руководитель Центра</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div 
                    className="position-relative overflow-hidden"
                    style={{ borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' }}
                  >
                    <img src="/assets/img/landing/corporate/r02.jpg" alt="" />
                    <div 
                      className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                      style={{ height: '215px', background: 'linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)' }}
                    >
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div 
                    className="position-relative overflow-hidden"
                    style={{ borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' }}
                  >
                    <img src="/assets/img/landing/corporate/r03.jpg" alt="Anna Rubleva" />
                    <div 
                      className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                      style={{ height: '215px', background: 'linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)' }}
                    >
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div 
                    className="position-relative overflow-hidden"
                    style={{ borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' }}
                  >
                    <img src="/assets/img/landing/corporate/r04.jpg" alt="Anna Rubleva" />
                    <div 
                      className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                      style={{ height: '215px', background: 'linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)' }}
                    >
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div 
                    className="position-relative overflow-hidden"
                    style={{ borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%' }}
                  >
                    <img src="/assets/img/landing/corporate/r05.jpg" alt="Anna Rubleva" />
                    <div 
                      className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                      style={{ height: '215px', background: 'linear-gradient(0deg, rgba(15, 17, 21, 0.8) 0%, rgba(16, 20, 24, 0) 100%)' }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-thumbnails swiper-thumbnails-circle flex-nowrap justify-content-end pt-4" id="thumbnails"></div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-5 order-md-1">
            <h1 className="lead h1 d-none d-lg-block pb-3">Мини-тренинги с элементами коучинга
            </h1>
            <ul className="list-unstyled fs-lg text-center text-lg-start pb-3 mx-auto mx-lg-0 mb-1" style={{ maxWidth: '620px' }}>
                <p className="h4">Научат:</p>
                <li className="mb-2">✔️ Разбираться в людях и самом себе.</li>
                <li className="mb-2">✔️ Выстраивать личные продажи с точки зрения психологии личности.</li>
                <li className="mb-2">✔️ Определять мотивы и ценности клиентов.</li>
                <li className="mb-2">✔️ Грамотно аргументировать свое предложение.</li>
                <li className="mb-2">✔️ Отрабатывать возражения клиентов разными техниками.</li>
                <li className="mb-2">✔️ Проводить win=win переговоры.</li>
                <li className="mb-2">✔️ Калибровке «да»/«нет» в переговорах.</li>
                <li className="mb-2">✔️ Тактике и маневрам в переговорах.</li>
                <li className="mb-2">✔️ Уметь создавать альтернативные предложения.</li>
            </ul>
            <p className="lead fs-lg m-0">Продолжительность: от 1 дня до 3 дней</p>
            <p className="fs-lg position-relative mb-0">Стоимость: 10 000 рублей час (до 10 человек)</p>
            <p className="fs-lg position-relative mb-0"> Есть возможность в формате конструктора собрать нужные темы в тренинг.</p>
            <br/>  
            <p className="fs-lg position-relative mb-0"><strong className="text-dark">ВНИМАНИЕ!</strong> Данные тренинги с элементами коучинга развивают МОТИВАЦИЮ И ПРИВЕРЖЕННОСТЬ сотрудников, тем самым способствуют вовлеченности и как следствие росту продаж.</p>
         
          </div>
        </div>
        <p className="fs-lg">Если вас заинтересовало данное предложение, рекомендую уточнить детали услуги, включая стоимость, сроки выполнения работ и возможные гарантии результата. Это позволит сделать осознанный выбор и принять решение о сотрудничестве с нами. </p>
              
              <div className="pb-2">
                        <h4 className="mb-lg-3"> Подробности о направлении и наличие мест уточняйте у администратора или Developskillsnow 
                        {/* <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a> */}
                        {/* <p className="lead"> */}
                        <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"> </i> </a> 
                        <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"> </i> </a> 
                        </h4>
                       <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46">По всем интересующим вопросам можно обратиться: +7 (992) 300-65-46, +7 (992) 300-65-23</a>
              </div>
      </div>
    </section>
  </div>
);
};

export default Minitraining;
