import React, { useEffect, useState  } from 'react';
import UserService from "../services/user.service";
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Swiper from 'swiper';
// import vac from "../img/vacation.jpg";
import kido from "../img/forms.jpg"
import vac1 from "../img/vac1.jpg";
import vac8 from "../img/vac8.jpg";
import vac3 from "../img/vac3.jpg";
import vac4 from "../img/vac4.jpg";
import vac5 from "../img/vac5.jpg";
import vac6 from "../img/vac6.jpg";
import vac7 from "../img/vac7.jpg";

import vac2 from "../img/vac2.jpg";
import zvac0 from "../img/zvac0.jpg";
import zvac1 from "../img/zvac1.jpg";
import zvac2 from "../img/zvac2.jpg";
import zvac3 from "../img/zvac3.jpg";

function Vacation() {

  const [content, setContent] = useState('');
  useEffect(() => {
      // Initialize Swiper
      const swiper = new Swiper('.swiper', {
        spaceBetween: 16,
        slidesPerView: 3, 
        loop: true,
        // bindedContent: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '#prev',
          nextEl: '#next'
        },
        breakpoints: {
          600: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }
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

  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" datajarallax dataspeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/anfo.jpg'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">Полезные каникулы.</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      Каждый раз как начинается новый учебный период дети уже хотят вернуть каникулы обратно. 
      <strong className="lead-bold"> Наша команда</strong> очень ответственно относиться к каникулярному периоду у детей. Перед нами всегда 
      стоит задача <strong className="lead-bold"> грамотно переключить внимание ребенка </strong> после интенсивного учебного периода, 
      необходимо не только развлечь его, но и вложить в игровой форме новые знания и умения.
      {/* <br/> А на данный момент представляем вашему вниманию: */}
        </p>
      {/* Features*/}
      <div className="d-none d-xxl-block" style={{height: "220px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "160px"}}></div>
      <div className="d-none d-md-block d-lg-none" style={{height: "100px"}}></div>
      <div className="d-md-none" style={{height: "50px"}}></div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-1 pb-md-3">
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/time-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Индивидуальный подход</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/cog-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Интегрированная аналитика</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/monitor-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Шаг за шагом играй и развивайся</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/size-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Полный спектр услуг: от мастер-классов до питание</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        {/* <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={vac} alt="ImH"/>
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="h1 pb-2 pb-lg-3">SUPER⭐️ЛЕТО️ для️ детей с 6-11 лет от Центра развития «Форматы» !</h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5 lead">
              В период с 22 мая до 25 августа!
                 </p>
              <div className="row row-cols-1">
                <div className="col">
                  <h3 className="h5 mb-2">Время лагеря с 09.00 - 18.00</h3>
                  <ol className="fs-lg mb-0">
                    <li>22.05 - 02.06 Antiшкола️<br/> Уроки на снятие напряжения, игровые занятия </li>
                    <li>05.06 - 16.06 Like️блогеры<br/> Почувствуй себя звездой, журналистом и ведущим новостей! Снимаем личный ролик/клип для ребенка!</li>
                    <li>19.06 - 30.06 Super️герои️MARVEL <br/> 
                        Программ для тех, кто хочет окунуться во вселенную настоящих героев, и даже стать одним из них.
                      <br/>  Для ребенка футболка со своим супер-героем!</li>
                    <li>03.07 - 14.07 SportStars <br/> Станем экспертами в играх и соревнованиях. По итогу смены - ПРИЗ-сюрприз 😝</li>
                    <li>17.07 - 28.07 Юные️детективы <br/> Море тайн, которые ждут, чтобы их разгадал юный детектив. 
                   Квесты, пасхалки , много эмоций, которые помогают развивать мышление.Создание своего альбома впечатлений!</li>
                    <li>31.07 - 11.08 Green️Power <br/> Изучим землю, экологию.
                     Юные натуралисты будут наблюдать за явлениями природы, и даже смогут вырастить свои шедевры!
                     Создание своего уникальным кашпо и растением в нем!</li>
                    <li>14.08 - 25.08 Antiшкола <br/> Грамотная перезагрузка перед школой!</li>
                  </ol>
                </div> 
                <p></p>
                <div className="col">
                  <h3 className="h5 mb-2">В программе:</h3>
                  <ul className="fs-lg mb-0">
                    <li>Крутые преподаватели и вожатые</li>
                    <li>Увлекательные уроки (английский язык, музыка, шахматы, шашки, уроки на внимание, рисование, лепка) </li>
                    <li>Отдых на свежем воздухе, игры</li>
                    <li>Мастер-классы по тематике смен</li>
                    <li>Питание 3-х разовое</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={kido} alt="Ima"/>
            <p></p>
            <br/>
            <p></p>
            {/* <img className="rounded-5" src={teens} alt="Ima"/> */}
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
             <p className="fs-lg mb-2"><strong className="h5">Смены городских каникул</strong> в нашем центре «Форматы» 
              <strong className="text-dark"> отличаются по тематике и направлениям,</strong> но в них всегда есть развивающие занятия (английский язык, музыка, 
              шахматы, шашки, уроки на внимание, рисование, лепка и мастер-классы). 
              Полезные каникулы проводим весной, осенью и летом.
              </p>
                <p className="fs-lg mb-2"> Особое внимание мы уделяем и тому, что ест ребенок. <strong className="text-dark">Питание трехразовое, </strong> 
                 в него всегда включены свежие фрукты, выпечка и полный рацион. Если позволяет погода мы всегда гуляем.
                </p>
                <p className="fs-lg mb-2"> События, которые уже состоялись вы всегда сможете посмотреть в фотогалерее. </p>
                <p className="fs-lg mb-2">Кстати,<strong className="text-dark">с нами удобно экономить,</strong>  у нас существует система бронирования на каникулы со скидкой.  </p>
            {/* <div className="ps-md-4 pe-xl-0">
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5 lead">
               С 19 июня до 11 августа! 
              </p>
              <div className="row row-cols-1">
                <div className="col">
                  <h3 className="h5 mb-2">Время смен с 14.00 - 18.00 </h3>
                  <p className="fs-lg mb-0">Летние продуктивные каникулы с «Форматы» помогают участникам становится увереннее в себе и своих силах, обрести внутренний стержень, мотивацию и своюуникальность.</p>
                  <p className="h5 mb-2"> Программа для подростков 12-17 лет:</p>
                  <ul className="fs-lg mb-0"> Смены:
                    <li>19.06.2023-30.06.2023</li>
                    <li>03.07.2023-14.07.2023</li>
                    <li>17.07.2023-28.07.2023</li>
                    <li>31.07.2023-11.08.2023</li>
                </ul>
                <p></p>
                <p className="h5 mb-2"> Starтаперы </p>
                <p className='fs-lg'> Разберем бизнес-кейсы. Попробуем себя в роли бизнесменов, научимся публичному выступлению. 
                Психология личности, игры на лидерство, коуч-сесии поличностному росту, профориентация. 
                Раскроем в ребенке его внутренний потенциал, и научим им грамотно пользоваться.
                По итогу смены каждый создаст свой бизнес-план и свою инструкцию к его реализации.</p>
                </div>
                <p></p>
                <div className="col">
                  <h3 className="h5 mb-2">В конце лета проведем конкурс на САМУЮ ЛУЧШУЮ работу лета с ценными призами</h3>
                  <ul className="fs-lg mb-0">
                    <li>Образование и творчество</li>
                    <li>Разговоры о важном</li>
                    <li>Саморазвитие</li>
                    <li>Наставничество и взросление</li>
                </ul>
                <p></p>
                  <p className='fs-lg'> И много интересного и полезного ждет Вас на каникулах с «Форматы».
                  В проект входят групповые и индивидуальные занятия! </p>
                  <h3 className="h5 mb-2">   Удобная бонусная система на наши каникулы! Успевайте! </h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="pb-2">
              <h4 className="mb-lg-3"> Подробности о направлении и наличие мест уточняйте у администратора или Developskillsnow  
              {/* <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a> */}
              {/* <p className="lead"> */}
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"> </i> </a> 
              </h4>
              <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46">Запись на продленку по телефонам: +7 (992) 300-65-46, +7 (992) 300-65-23</a>
        </div>
        </section>
        
        <section className="container position-relative z-3 py-2 py-sm-3 py-md-4 py-lg-5">
        {/* <div className="d-none d-lg-block" style={{marginTop: '-428px'}}></div> */}
        <div class="position-relative px-5">
{/* 
  <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle position-absolute top-50 start-0 translate-middle-y mt-n3" aria-label="Prev">
    <i class="ai-arrow-left"></i>
  </button>
  <button type="button" id="next" className="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle position-absolute top-50 end-0 translate-middle-y mt-n3" aria-label="Next">
    <i class="ai-arrow-right"></i>
  </button> */}

        <div className="bg-secondary w-100 h-100 d-none d-xxl-block" style={{borderTopLeftRadius: '8rem', borderBottomRightRadius: '8rem'}}></div>
        {/* <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block d-xxl-none" style={{borderTopLeftRadius: '4rem', borderBottomRightRadius: '4rem'}}></div> */}
        {/* <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-lg-none" style={{borderTopLeftRadius: '2.25rem', borderBottomRightRadius: '2.25rem'}}></div> */}
        <div className=" position-relative zindex-2">
          <h2 className="h1 pt-xxl-1 pb-4 mb-2 mb-lg-3">Наши Коникулы </h2>
          <div className="swiper" data-swiper-options=''>
            <div className="swiper-wrapper" id= "content" aria-live="polite">

            <div className="swiper-slide swiper-slide-active" role="group">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac1} alt="Vac1"/>
                  </div>
                </div>
              </button>
            </div>
                          
              <div className="swiper-slide swiper-slide-next">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac8} alt="Vac8"/>
                  </div>
                </div>
              </button>
              </div>          

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac3} alt="Vac3"/>
                  </div>
                </div>
              </button>
              </div>

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                 {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac4} alt="Vac4"/>
                  </div>
                </div>
              </button>
              </div>

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac5} alt="Vac5"/>
                  </div>
                </div>
              </button>
              </div>

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac6} alt="Vac6"/>
                  </div>
                </div>
              </button>
              </div>

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac7} alt="Vac7"/>
                  </div>
                </div>
              </button>
              </div>

              <div className="swiper-slide">
              <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={vac2} alt="Vac2"/>
                  </div>
                </div>
              </button>
              </div>
{/* Swiper controls */}
            </div>
            <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            {/* <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div> */}
          </div>
          <br/>
        </div>
      </div>
<br/>
      <div class="position-relative px-5">

  {/* <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle position-absolute top-50 start-0 translate-middle-y mt-n3" aria-label="Prev">
    <i class="ai-arrow-left"></i>
  </button>
  <button type="button" id="next" className="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle position-absolute top-50 end-0 translate-middle-y mt-n3" aria-label="Next">
    <i class="ai-arrow-right"></i>
  </button> */}
        <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden content">
          <div className="swiper-wrapper" id="content" ariaLive="polite">

            <div className="swiper-slide swiper-slide-active" role="group">
            <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"  style={{ background: 'linear-gradient(180deg, rgba(18, 21, 25, 0) 35.56%, #121519 95.3%)' }}></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={zvac0} alt="zVac0"/>
                  </div>
                </div>
              </button>
            </div>

            <div className="swiper-slide swiper-slide-next" role="group">
            <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"  style={{ background: 'linear-gradient(180deg, rgba(18, 21, 25, 0) 35.56%, #121519 95.3%)' }}></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={zvac1} alt="zVac1"/>
                  </div>
                </div>
              </button>
            </div>

            <div className="swiper-slide" role="group">
            <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1"  style={{ background: 'linear-gradient(180deg, rgba(18, 21, 25, 0) 35.56%, #121519 95.3%)' }}></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={zvac2} alt="zVac2"/>
                  </div>
                </div>
              </button>
            </div>

   
            <div className="swiper-slide" role="group">
            <button className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            {/* <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: 'linear-gradient(180deg, rgba(18, 21, 25, 0) 35.56%, #121519 95.3%)' }}></span> */}
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src={zvac3} alt="zVac3"/>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span>
            </div>
            {/* <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span> */}
        </div>
      </div>
      </section>
      </div>   
       
     
 
  )
}

export default Vacation;