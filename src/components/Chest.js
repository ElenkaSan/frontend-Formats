import React from 'react'

import chestplay from "../img/chesttim.jpg";
import chesttime from "../img/chesttime.jpg"

export default function Chest() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" dataJarallax dataSpeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/chestt.jpg'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">ШАХМАТЫ</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      Шахматы – это древняя и увлекательная игра, которая представляет собой настольное сражение умов. 
      Играя в шахматы, вы не только наслаждаетесь увлекательным времяпрепровождением, но и развиваете свой ум, аналитические способности и умение принимать решения. 
      Шахматы – это истинный вызов для разума, который помогает улучшить качество мышления, управление временем и способность решать сложные задачи.
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
            <h3 className="h5 ps-3 mb-0">Развитие творческого мышления</h3>
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
            <h3 className="h5 ps-3 mb-0">Улучшение когнитивных навыков</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={chestplay} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={chesttime} alt="ImH"/>
            {/* <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={les} alt="ImH"/> */}
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="pb-2 pb-lg-3">
              Программа состоит из несколько ступеней:
                </h2>
              <ol className="fs-lg">
             <li>Знакомство с шахматной доской и фигурами</li>
             <li>Основы игры и правила</li>
             <li>Тактика и стратегия</li>
             <li>Анализ партий</li>
             <li>Практика и игровые ситуации</li>
             <li>Турниры и соревнования</li>
            </ol>
             <p className="fs-lg">Весь процесс занятий в формате для шахмат строится на постепенном повторении и применении новых знаний и навыков, обеспечивая развитие детей как игроков и улучшение их игровой стратегии.</p> 
              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
                  <h3 className="h5 mb-2">ШАХМАТЫ и их польза:</h3>
                  <ul className="fs-lg mb-0">
                    <li>Повышение памяти и умственной гибкости</li>
                    <li>Развитие логического мышления</li>
                    <li>Концентрации</li>
                    <li>Внимания</li>
                    <li>Ааналитические способности</li>
                    <li>Выработка воли и характера</li>
                    <li>Навыки коммуникации</li>
                    <li>Развитие целеустремленности</li>
                    <li>Умение мыслить системно и нестандартно</li>
                  </ul>
                </div> 
                <p></p>
                <h3 className="h5 mb-2">Ваш преподаватель Георгий Баев</h3>
                <p className="fs-lg"> Индивидуальные занятия и группы интенсивность: 2 раза в неделю по 40/60 минут.</p>
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
