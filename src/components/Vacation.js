import React from 'react'

import vac from "../img/vacation.jpg";
import teen from "../img/teeng.jpg"
import teens from "../img/tengs.jpg";

export default function Vacation() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" dataJarallax dataSpeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/vact.jpg'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">Каникулы с Форматы</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      Наша команда очень ответственно относиться к каникулярному периоду у детей. 
      Потому что задача грамотно переключить внимание ребенка, развлечь его и вложить в игровой форме новые знания и умения.
      Смены в нашем центре отличаются по тематике и направлениям. 
      Дополнительно наш центр привлекает сильных педагогов с мастер-классами, которых на постоянной основе в Центре может не быть. 
      Особое внимание мы уделяем и тому, что ест ребенок. В питание всегда включены свежие фруктыи выпечка.
      А на обед мы всегда выводим детей в кафе и конечно на прогулку, если позволяет погода.
      События, которые уже состоялись вы всегда сможете посмотреть в фотогалерее. 
      <br/> А на данный момент представляем вашему вниманию:
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
        <div className="row align-items-center py-4 py-xl-5 my-2">
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
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
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
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/time-dark.svg" width="28" alt="Icon"/>
                    <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/time-light.svg" width="28" alt="Icon"/>
                  </div> */}
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
        </div>
      
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={teen} alt="Ima"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={teens} alt="Ima"/>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="ps-md-4 pe-xl-0">
              <h2 className="h1 pb-2 pb-lg-3">SUPER⭐️ЛЕТО для подростков с «Форматы»</h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5 lead">
               С 19 июня до 11 августа! 
              </p>
              <div className="row row-cols-1">
                <div className="col">
                {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/time-dark.svg" width="28" alt="Icon"/>
                    <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/time-light.svg" width="28" alt="Icon"/>
                  </div> */}
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
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/time-dark.svg" width="28" alt="Icon"/>
                    <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/time-light.svg" width="28" alt="Icon"/>
                  </div> */}
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
