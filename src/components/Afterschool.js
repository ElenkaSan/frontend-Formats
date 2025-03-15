import React from 'react'

import chestplay from "../img/aftshc.jpg";
import chesttime from "../img/asfters.JPG"

export default function Afterschool() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" datajarallax dataspeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/aftersh.JPG'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">ПРОДЛЕНКА</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
      Мы знаем, как тяжело детям бывает в учебном году. И когда мы составляли программу занятий для продленки для нас было важно учесть 
      не только мнение родителей, но и желание детей, понять их утомляемость. <br/>
      Поэтому в программе для продленки мы поставили основные задачи перед собой:
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
              <img className="d-block m-1" src="assets/img/services/v3/icons/cog-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Сделать удобный формат подачи новых полезных знаний</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              {/* <img className="d-block m-1" src="assets/img/services/v3/icons/time-white.svg" width="32" alt="Icon"/> */}
              <h2 className="d-block m-1 ai-open-book"> </h2>
            </div>
            <h3 className="h5 ps-3 mb-0"> Адаптировать детей к правилам и культуре коммуникаций</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              {/* <img className="d-block m-1" src="assets/img/services/v3/icons/monitor-white.svg" width="32" alt="Icon"/> */}
              <h2 className="d-block m-1 ai-heart-filled"> </h2>
            </div>
            <h3 className="h5 ps-3 mb-0">Развивать и поддерживать семейные традиции</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <img className="d-block m-1" src="assets/img/services/v3/icons/time-white.svg" width="32" alt="Icon"/>
            </div>
            <h3 className="h5 ps-3 mb-0">Вложить в игровой форме новые знания и умения</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              {/* <img className="d-block m-1 ai-chat" src="assets/img/services/v3/icons/cog-white.svg" width="32" alt="Icon"/> */}
              <h2 className="d-block m-1 ai-chat"> </h2>
            </div>
            <h3 className="h5 ps-3 mb-0">Научить детей слушать, помогать, думать</h3>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
              <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100"></div>
              <h2 className="d-block m-1 ai-user-group"> </h2>
              {/* <img className="d-block m-1" src="assets/img/services/v3/icons/cog-white.svg" width="32" alt="Icon"/> */}
            </div>
            <h3 className="h5 ps-3 mb-0">Научить понимать правильно информацию и действия окружающих</h3>
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
              <h3 className="pb-2 pb-lg-3 mb-0">
              Поэтому в программе для продленки мы поставили основные задачи перед собой:
                </h3>
              <ul className="fs-lg">
             <li>Сделать удобный формат подачи новых полезных знаний</li>
             <li>Адаптировать детей к правилам и культуре коммуникаций</li>
             <li>Научить детей слушать, помогать, думать и понимать правильно информацию и действия окружающих</li>
             <li>Вложить в игровой форме новые знания и умения</li>
             <li>Развивать и поддерживать семейные традиции</li>
            </ul>
             {/* <p className="fs-lg">Весь процесс занятий в формате для шахмат строится на постепенном повторении и применении новых знаний и навыков, обеспечивая развитие детей как игроков и улучшение их игровой стратегии.</p>  */}
              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
                  <h3 className="h5 mb-2">В нашем центре есть 1 и 2 смена на продленке.</h3>
                  <h3 className="h5 mb-2">Основные преимущества Полезной продленки у нас в центре развития:</h3>
                  <ol className="fs-lg mb-0">
                    <li>Развивающие занятия <br/>
                    (Английский язык 3 раза в неделю; <br/>
                    Шахматы/шашки на выбор 2 раза в неделю; <br/>
                    Уроки на внимание 1 раз в неделю; <br/>
                    Рисование/лепка на выбор 2 раза в неделю; <br/>
                    Скорочтение/каллиграфия с логопедом 2 раза в неделю;<br/>
                    Финансовая грамотность 1 раз в две недели;<br/>
                    Уроки этикета 1 раз в неделю и мастер-классы 1-2 раза в месяц). </li>
                    <li>Питание 2 раза (завтрак/полдник и комплексный обед).</li>
                    <li>Забираем/отводим детей с/в ближайших(-ие) школ(-ы). </li>
                    <li>Помощь в подготовке домашних заданий.</li>
                    <li>Прогулка (зависит от погодных условий).</li>
                  </ol>
                </div> 
                <p></p>
                <h3 className="h5 mb-2">С нами удобно экономить, у нас существует система скидок при оплате на 5 месяцев и более.
                </h3>
                {/* <p className="fs-lg"> Индивидуальные занятия и группы интенсивность: 2 раза в неделю по 40/60 минут.</p> */}
              </div>
            </div>
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
  </div>
  )
}
