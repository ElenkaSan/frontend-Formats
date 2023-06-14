import React from 'react'

import less from "../img/less.JPG";
import les from "../img/les.JPG"
import teens from "../img/leseng.png";

export default function Englishadult() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" dataJarallax dataSpeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/engadult.JPG'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">Английский язык.</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      А вы знали, что в финансовую грамотность населения входит параметр знание иностранного языка и является инвестированием.
      <br/> Занятия проходят в разговорном формате с уникальными педагогами: уровень владения языком - С1, С2.
      <br/> Первое занятие – бесплатно для проведения собеседования и определения уровня знаний, освоения навыка. 
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
        {/* <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/size-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Полный спектр услуг: от мастер-классов до питание</h3>
          </div>
        </div> */}
      </div>
    </div>
  </section>

  <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={teens} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={less} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={les} alt="ImH"/>
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className=" pb-2 pb-lg-3">
                 Для детей от 7 лет и подростков. <br/> Возможно обучение по вашей программе, подготовка к экзаменам.
                </h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5 fs-lg">
              Программа: Starlight, Click on, Headway, школьная программа или ваша на выбор. <br/>
              Продолжительность: 72 занятия (сентябрь-май) <br/>
              Интенсивность: 2 раза в неделю по 60 минут </p>
              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
                  <h3 className="h5 mb-2">Преимущества владения английским языком:</h3>
                  <ol className="fs-lg mb-0">
                    <li>Возможность говорить с большим количеством людей</li>
                    <li>В детстве легче освоить иностранные языки</li>
                    <li>Улучшение способностей детей на родном языке</li>
                    <li>Социальный опыт и повышение эмпатии</li>
                    <li>Развитие музыкального слуха у ребенка</li>
                    <li>Расширение детского кругозора</li>
                    <li>Развитие творческого мышления</li>
                    <li>Расширение возможностей карьерного роста</li>
                    <li>Предотвращение возрастного снижения познавательных способностей</li>
                    <li>Улучшение понимания других культур</li>
                    <li>Это весело!</li>
                  </ol>
                </div> 
                <p></p>
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/time-dark.svg" width="28" alt="Icon"/>
                    <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/time-light.svg" width="28" alt="Icon"/>
                  </div> */}
                  <h3 className="h5 mb-2">Наши сильные преподаватели с Международной сертификацией: </h3>
                  <ul className="fs-lg mb-0">
                    <li>Елена Леонидовна – уровень владения языком на уровне С1, С2 (Advanced, Proficiency), стаж 19 лет.</li>
                    <li>Raymond - носитель языка, за границей преподавал в частной школе 3 года, в России преподает 4 года.</li>
                  </ul>
                  <p></p>
                  <h3 className="h5 mb-2"> Разговорный Клуб. Интерактивный английский, игры и квесты. </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="col pb-2">
              <h4 className="mb-lg-4"> Подробности по Developskillsnow 
              {/* <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a> */}
              {/* <p className="lead"> */}
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"> </i> </a> 
              </h4>
             <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46"> По телефону: +7 (992) 300-65-46</a>
            </div>
       
      </section>
  </div>
  )
}
