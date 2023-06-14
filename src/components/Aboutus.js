import React from "react";
import Col from 'react-bootstrap/Col'

import engTeach from "../img/englishT.png";
import Anna from "../img/annaR.jpeg";
import engTch from "../img/engTch.png"
import chest from "../img/chestClub.png"
import art from "../img/art.png"
// import mang from "../img/mang.png"
// import UserService from "../services/user.service";
import "./component.css"

const Aboutus = () => {


  return (
    <div>
      <main>
      <div className="overflow-hidden">
        <div className="container pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
          <br/>
          <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" databstoggle="tooltip" dataBsPlacement="left" title="Back to home"><i className="ai-home"></i></a>
         </div>
          <h1 className="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">Наша Команда</h1>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={Anna} width="700" alt="anna"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Основатель Учебного Центра «ФОРМАТЫ»</div>
                <h2 className="mb-lg-4">Руководитель Учебного Центра «ФОРМАТЫ» <br/> Рублева Анна Владимировна</h2>
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                <li>Образование высшее, специализация «Финансовый менеджмент.</li>
                <li>Сертифицированный бизнес-тренер.</li>
                <li>Сертификация ERICKSON International.</li>
                <li>Коуч/Командный коуч/Коуч переговоров.</li>
                <li>Автор программ развития и профориентации личности, тренингов для бизнеса по продажам и лидерству.</li>
                <li>Создатель и основатель Women_art_trick</li>
                </ul>
             </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
              <img className="rounded-5" src={engTeach} width="700" alt="pq"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">English Teacher</div>
                <h2 className="mb-lg-4">
                  <a href="portfolio-single-v1.html">Учитель Английского языка Raymond</a>
                  </h2>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui varius amet et quam massa auctor odio.
                </p> */}
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                <li> Носитель языка</li>
                <li>За границей преподавал в частной школе 3 года</li>
                <li>В России преподает 4 года</li>
                <li>Разговорный Клуб</li>
                <li>Международный сертификат</li>
                </ul>
                {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0"><a href="portfolio-single-v1.html">
              <img className="rounded-5" src={engTch} width="700" alt="pf"/></a></div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">English Teacher</div>
                <h2 className="mb-lg-4">
                  {/* <a href="portfolio-single-v1.html"> */}
                  Учитель Английского языка Елена Леонидовна
                    {/* </a> */}
                  </h2>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec eu.
                </p> */}
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                <li>Уровень владения языком на уровне C1, C2 (Advanced, Proficiency)</li>
                <li>Стаж 19 лет</li>
                <li>Международный сертификат</li>
                </ul>
                {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
              {/* <a href="portfolio-single-v1.html"> */}
                <img className="rounded-5" src={chest} width="700" alt="pt"/>
                {/* </a> */}
                </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Chest Club</div>
                <h2 className="mb-lg-4">
                    Преподователь Шахмат и Шашек Георий Баев
                    </h2>
                    <ul className="mb-0 mb-md-1 mb-lg-3"> 
                     <li>Кандидат в мастера спорта по шахматам</li>
                     <li>Призер чемпионата по «Шахбоксу» СП6</li>
                     <li>Призер командных соревнований по Тюменской области («Чудо-шашки», «Белая ладья»)</li>
                     <li>Первый взрослый разряд по шашкам в 16 лет</li>
                     <li>Победитель в первенстве по Тюменскому региону</li>
                    </ul>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Sed feugiat tristique enim aenean netus cum adipiscing est sem eget nulla leo vestibulum. Cras urna, proin ut ut dictum risus porttitor nulla consequat et iaculis.
                  </p> */}
                  {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={art} width="700" alt="ph"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Art Teacher</div>
                <h2 className="mb-lg-4">
                  {/* <a href="portfolio-single-v1.html"> */}
                    Учитель Рисования и Лепки Татьяна Викторовна
                    {/* </a> */}
                </h2>
                <ul className="mb-0 mb-md-1 mb-lg-3"> Преподавательский опыт:
                     <li>Студия авторских курсов живописи Grafka</li>
                     <li>Студия академической и современной живописи Textura</li>
                     <li>Студия ИЗО</li>
                    </ul>
                     {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Lectus lacus, ac justo, ullamcorper egestas at felis arcu arcu venenatis praesent odio. Odio vulputate purus placerat ultrices faucibus sem sed magna est elementum.
                  </p> */}
                  {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <br/>
          {/* <h1 className="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">МУЗЫКАЛКА 2.0</h1>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
              <img className="rounded-5" src={mang} width="700" alt="pq"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Руководитель Музыкалки 2.0</div>
                <h2 className="mb-lg-4">
                  <a href="portfolio-single-v1.html">Полина Олеговна - руководитель Музыкалки 2.0 и действующая певица</a>
                  </h2>
               </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0"><a href="portfolio-single-v1.html">
              <img className="rounded-5" src={engTch} width="700" alt="pf"/></a></div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Music Teacher</div>
                <h2 className="mb-lg-4">
                  Любовь - преподаватель по фортепиано и скрипке
                </h2>
                <ul className="mb-0 mb-md-1 mb-lg-3"> Ценит нацеленность на результат т.к это лучшее с чем вы можете прийти на занятие
                </ul>
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
                <img className="rounded-5" src={chest} width="700" alt="pt"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Music Teacher</div>
                <h2 className="mb-lg-4">
                    Валера - преподаватель по гитаре
                </h2>
                <ul className="mb-0 mb-md-1 mb-lg-3"> Покажет что гитара это не только дерево и металлические струны, в нём куда больше души.
                </ul>
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={art} width="700" alt="ph"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <div className="text-muted mb-2">Singing Teacher</div>
                <h2 className="mb-lg-4">
                  Лиза - преподаватель по вокалу
                </h2>
                <ul className="mb-0 mb-md-1 mb-lg-3"> Работает по современным методикам, на её уроках не заскучаешь, проверишь лично?
                </ul>
              </div>
            </div>
          </Col> */}
        </div>
      </div>
      </main>
    </div>
  );
};

export default Aboutus;