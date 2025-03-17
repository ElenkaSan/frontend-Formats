import React from 'react'

import logoped from "../img/logop1.jpeg";
import logop from "../img/logop2.jpeg"

export default function Logoped() {
  return (
    <div>
    <section className="jarallax dark-mode bg-dark py-5" datajarallax dataspeed="0.6">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60"></div>
    <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/logop3.jpg'}}></div>
    <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
          <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        </div>
      <div className="d-none d-xxl-block" style={{height: "170px"}}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{height: "120px"}}></div>
      <div className="d-none d-md-block d-lg-none" sstyle={{height: "80px"}}></div>
      <div className="d-md-none" style={{height: "40px"}}></div>
      <h1 className="display-2 mb-4">Логопед. Каллиграфия. Скорочтение.</h1>
      <p className="mb-0 lead text-white" 
    //   style={{maxWidth: "480px"}}
      >
        В центре «Форматы» особое внимание уделяют развитию речи. Речь – это одна из самых важных психических функций человека, необходимая для благополучной социализации и коммуникации с другими людьми.
        <br/> Поэтому в нашем центре мы обучаем ребенка речевому сопровождению, развитию и восстановлению речи.
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
            <h3 className="h5 ps-3 mb-0">Речевая память</h3>
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
            <h3 className="h5 ps-3 mb-0">Скорочтение</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={logoped} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={logop} alt="ImH"/>
            {/* <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={les} alt="ImH"/> */}
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
            <p className="fs-lg">Задача логопеда состоит не только в правильной постановке звуков, но и в более широком охвате психических и физиологических функций организма ребёнка, связанных с формированием речевых навыков.
            Индивидуальные логопедические занятия направлены на развитие речи в целом.</p>
            <h4 className="pb-2 pb-lg-3">
            Красивая связная речь формируется на основе таких понятий и навыков, как:
            </h4>
              <ul className="fs-lg">
             <li>Речевая память</li>
             <li>Способность воспринимать звуки на слух и воспроизводить их</li>
             <li>Умение образовывать новые слова и правильно употреблять окончания</li>
             <li>Связывать слова в предложение</li>
             <li>Строить из предложений связные тексты, объединённые смыслом и логикой</li>
            </ul>
             <p className="fs-lg">Польза от работы с логопедом велика для развития маленькой личности: вызов и развитие речи, артикуляционная гимнастика, нейропсихологические упражнения, развитие эмоционального интеллекта, высших психических процессов, фонематического слуха, развитие навыка коммуникации. Игры на фонетическое восприятие.</p>              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}
                  <h3 className="h5 mb-2">Каллиграфия.</h3>
                  <p className="fs-lg">Каллиграфия - это искусство красивого письма. На занятиях каллиграфии ребенок учится писать красиво, аккуратно и разборчиво. Это помогает развивать мелкую моторику рук, внимание, память, воображение и творческие способности.</p>
                  <p className="fs-lg"> Каллиграфическое письмо тесно связано с функционированием психики и мозга, и является мощным инструментом для укрепления внутреннего спокойствия и уверенности в себе.</p>
                </div> 
                <div className="col">
                  <p className="fs-lg"><strong className="text-dark">Основные преимущества от занятий по каллиграфии:</strong> умение мыслить, дисциплинированность, развитие творческих способностей, умение концентрироваться, физическое и психологическое здоровье.</p>
                  <p className="fs-lg"> Мы предлагаем развитие: графомоторных навыков, моторики (мелкой и общей), орфографической зоркости, навыка интуитивного письма. Коррекция дисграфии и почерка. Проводим пальчиковую гимнастику.</p>
                </div> 
                <div className="col">
                  <h3 className="h5 mb-2">Скорочтение.</h3>
                  <p className="fs-lg">Скорочтения экономит время, увеличивает начитанность, поднимает самооценку, развивает фотографическую память, учит хорошей концентрации внимания, развивает воображение и увеличивает глубину понимания текста. У человека, который читает другой уровень мышления, познания и осознанности.
                  </p>
                  <p className="fs-lg">В нашем центре обучаем чтению с 5 лет. Развиваем навыка чтения и скорочтения, а также памяти, внимания, мышления.</p>
                </div> 
                <p></p>
                <h3 className="h5 mb-2">Занятия по каллиграфии и скорочтению проводит логопед и психолог Шевелёва Татьяна Ильинична</h3>
                <p className="fs-lg">Есть возможность записать на индивидуальные и групповые развивающие занятия на выбор.</p>
                <p className="fs-lg">Обязательно осуществляем предварительную комплексную диагностику по высшим психическим функциям (память, внимание, мышление, логика, речь), а также предварительная оценка письма и математических способностей.</p>
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
             <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46">Запись по телефонам: +7 (992) 300-65-46, +7 (992) 300-65-23</a>
            </div>
       
      </section>
  </div>
  )
}
