import React from 'react'

import proff from "../img/proff.png";
import proft from "../img/profff.png"

import prft from "../img/profr.png"
import teen from "../img/tengs.jpg";
import teeng from "../img/teeng.jpg"

export default function Prof() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" datajarallax dataspeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/tengs.jpg'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">ПРОФОРИЕНТАЦИЯ</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      ПРОФОРИЕНТАЦИЯ в нашем Центре - это больше, чем просто получение информации о предрасположенности к той или иной профессии, это целый план подготовки во Взрослую Жизнь!
      <br/> Содействие в профессиональной ориентации, планирование образовательной и карьерной траектории, развитии потенциала участника, и тренировка навыков Soft Skills, даже на английском языке.
       </p>
       <br/> <p className="mb-0 lead text-white"> ВНИМАНИЕ в нашем Мультиформатном Центре развития «ФОРМАТЫ» есть 3 вида программ для подростков!
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
            <h3 className="h5 ps-3 mb-0">Содействие в профессиональной ориентации</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/monitor-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Развитие потенциала участника</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/size-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Планирование времени и достижение целей</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={teeng} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={prft} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={teen} alt="ImH"/>
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="pb-2 pb-lg-3">
              Выбери свой формат! <br/> Выбор профессии для учеников: 6-7. 8-9.10-11 классов.
              </h2>
              <ul className="fs-lg">
             <li>ФОРМАТ ТЕТ-А-ТЕТ. <br/>Анализ профиля участника </li> 
             <li>ФОРМАТ WIN-WIN. <br/> «Моя траектория» </li>
             <li>ФОРМАТ ALL-INCLUSIVE. <br/> Инвестиции в себя</li>
            </ul>
            <h4>Выбери СВОЙ УДОБНЫЙ формат! Запишись у администратора. </h4>
             {/* <p className="fs-lg">Работа с различными материалами: акварель, гуашь, пастель, акрил, темпера, «на воде».
             Вы можете записаться на индивидуальные занятия или в группы.
             Рекомендуемая интенсивность: 2 раза в неделю по 40/60 минут. </p>  */}                
              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
                <h3 className="h5 mb-2"> АВТОР ПРОГРАММ: Анна Рублева</h3>
                <p className="fs-lg"> Индивидуальные занятия и группы интенсивность: 2 раза в неделю по 40/60 минут.</p>
                <h3 className="h5 mb-2">ФОРМАТ TET-A-TET</h3>
                <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>2 полезные встречи общей продолжительностью 2 часа</li>
                    <li>тестирование</li>
                    <li>аналитика профиля по уникальной методике</li>
                    <li>обсуждение результатов</li>
                  </ul>
                  <h4 className="h5 mb-2">В результате вы получаете:</h4>
                  <ul className="fs-lg mb-0">
                    <li>личную карту ваших возможностей</li>
                    <li>вариации выбора профессии и хобби</li>
                  </ul>
                </div> 
                <p></p>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                <h3 className="h5 mb-2">ФОРМАТ WIN=WIN "Моя траектория"</h3>
                <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>6 занятий, из них 5 групповых и 1 индивидуальное с коуч-тренером</li>
                    <li>Анализ профиля участника по уникальной методике Анны Рублевой позволит понять свою мотивацию, 
                      увидеть потенциал и выстроить грамотную образовательную траекторию;</li>
                    <li>Эффективное планирование исходя из профиля участника дает внутренний подъем
                       для подростка и видение своего успешного будущего</li>
                    <li>Мотивация и тайм-менеджмент закрепит фокус внимания на достижении своих целей 
                      в будущем и сформирует желание максимально качественно сдать экзамены.</li>
                  </ul>
                </div> 
                <p></p>
              </div>
              {/* <div className="row row-cols-1">
                <div className="col">
                <h3 className="h5 mb-2">ФОРМАТ ALL-INCLUSIVE. Инвестиции в себя</h3>
                <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>6 занятий, из них 5 групповых и 1 индивидуальное с коуч-тренером</li>
                    <li>Анализ профиля участника по уникальной методике Анны Рублевой позволит понять свою мотивацию, 
                      увидеть потенциал и выстроить грамотную образовательную траекторию;</li>
                    <li>Эффективное планирование исходя из профиля участника дает внутренний подъем
                       для подростка и видение своего успешного будущего</li>
                    <li>Мотивация и тайм-менеджмент закрепит фокус внимания на достижении своих целей 
                      в будущем и сформирует желание максимально качественно сдать экзамены.</li>
                  </ul>
                </div> 
                <p></p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={proff} alt="Ima"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={proft} alt="Ima"/>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="ps-md-4 pe-xl-0">
              <h2 className="h5 pb-2 pb-lg-3">ФОРМАТ ALL INCLUSIVE. "Инвестиции в себя"</h2>
              <h4 className="h5 mb-2">В программу входит:</h4>
              <ul className="fs-lg mb-0">
                    <li>15 занятий по 1,5 часа, из них 13 групповых и 2 индивидуальные встречи с коуч-тренером</li>
                    <li>Анализ профиля участника по уникальной методике Анны Рублевой позволит понять свою мотивацию, 
                      увидеть потенциал и выстроить грамотную образовательнию траекторию</li>
                    <li>Эффективное планирование образовательной и карьерной траектории</li>
                    <li>Психология личностного роста и публичных выступлений</li>
                    <li>Тренировка и развитие навыков Soft Skills</li>
                    <li>Мотивация и тайм-менеджмент закрепит фокус внимания на достижении своих целей в будущем
                       и сформирует желание максимально качественно сдать экзамены</li>
                    <li>Формирование системы ценностей и фундамента из полезной поддерживающей среды</li>
                  </ul>
                  <h4 className="h5 mb-2">Результат от программ «Моя траектория» и «Инвестиции в СЕБЯ»:</h4>
                  <ul className="fs-lg mb-0">
                    <li>Определим, какая профессия позволит подростку максимально раскрыть его потенциал,
                       таланты и суперсилы. Он сам поймёт: «Это моё!»</li>
                    <li>Выберем специальность, которая позволит реализовать себя на 100% и быть успешным в будишем.</li>
                    <li>Научимся эффективно планировать своё время и всё успевать в течение дня!</li>
                    <li>Поставим личную цель, которая будет вдохновлять и мотивировать к учёбе.</li>
                    <li>Сформируем систему ценностей, приверженность к ней и полезную поддерживающую среду.</li>
                    <li>Родитель получает развёрнутую обратную связь о проделанной работе!</li>
                  </ul>
              {/* <div className="row row-cols-1">
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
              </div> */}
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
