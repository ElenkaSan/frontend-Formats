import {React, useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

import 'swiper/swiper-bundle.min.css';

import rub from "../img/testing.jpg";
import "./images.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testing = () => {
  const sceneRef = useRef(null); // Reference for the container

  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log("AOS Initialized"); // Debugging log
    }, []);

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
  {/* <section className="overflow-hidden">
        <div className="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
          <div className="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
            <div className="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
              <div className="parallax me-lg-n4 me-xl-n5" style={{ maxWidth: '667px' }}>
              <div ref={sceneRef} className="container mt-4">
                <div className="parallax-container position-relative" data-depth="0.1"><img className="img-fluid custom-image shadow-lg" src={rub} alt="Testing"/></div>
              </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-0">
              <h2 className=" text-center text-lg-start pb-sm-2 pb-md-3">Тестирование сотрудников</h2>
              <p className="lead fs-xl text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style={{ maxWidth: '620px' }}>
              действительно является важным аспектом управления персоналом, особенно когда речь идет о подборе команды, мотивировании работников и повышении эффективности их труда. 
              Понимание индивидуальных особенностей каждого сотрудника помогает создать более продуктивную рабочую среду и улучшить результаты компании.
              </p>
              <ol className="list-unstyled fs-lg text-center text-lg-start pb-5 mx-auto mx-lg-0 mb-5" style={{ maxWidth: '620px' }}>
                <p className="h4">Однако перед принятием решения о сотрудничестве с нами важно учитывать несколько факторов:</p>
                <li className="mb-2"><strong className="text-dark">Цели тестирования:</strong> 
                Определите, какие именно данные вы хотите получить от тестирования: оценка профессиональных навыков, личностные качества, уровень мотивации, стиль работы и т.д.</li>
             <li className="mb-2"><strong className="text-dark">Методы тестирования:</strong> 
             Существуют различные методы оценки персонала, такие как психологические тесты, профессиональные задания, интервью, наблюдения и другие. Важно выбрать подходящие инструменты, соответствующие вашим целям.</li>
             <li className="mb-2"><strong className="text-dark">Конфиденциальность и этика:</strong>
              Наше тестирование проводится с соблюдением конфиденциальности и этики, чтобы избежать возможных конфликтов и недопонимания среди сотрудников.</li>
             <li className="mb-2"><strong className="text-dark">Анализ результатов:</strong>
             После проведения тестирования нашей компанией важно правильно  интерпретировать полученные данные и использовать их для принятия обоснованных решений относительно распределения обязанностей,</li>
             <li className="mb-2"><strong className="text-dark">Обратная связь:</strong> 
              Предоставление обратной связи сотрудникам после тестирования поможет им лучше понять свои сильные и слабые стороны, а также определить пути для дальнейшего профессионального роста.</li>
             <li className="mb-2"><strong className="text-dark">Общий свод информации:</strong> 
             Мы предоставляем общий анализ по команде/отделу для руководителя. Данная информация поможет более эффективно управлять своей командой.
             </li>
              </ol>
              <p className="lead fs-xl text-center text-lg-start">Задача - получать удовольствие от развития бизнеса и собственного развития.</p>
              <br/>
              <p className="fs-lg">Если вас заинтересовало данное предложение, рекомендую уточнить детали услуги, включая стоимость, сроки выполнения работ и возможные гарантии результата. Это позволит сделать осознанный выбор и принять решение о сотрудничестве с нами. </p>
     
              <a className="nav-link lead fs-lg" href="tel:+7(922)471-44-34">По всем интересующим вопросам можно обратиться: + 7(922)471-44-34</a>
              <br/>  
              <p className="mb-lg-3 fw-semibold" style={{ maxWidth: '490px' }}> Подробности о направлении и наличие мест уточняйте у администратора
              <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/rubleva_coach"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/anyuta_rubleva?igsh=NHIwdWYxNGJhdWY2"><i className="ai-instagram"> </i> </a> 
              </p>
          
            </div>
          </div>
        </div>
  </section> */}
   <section className="overflow-hidden">
        <div className="container pb-5 pt-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
          <div className="row pb-md-3 pb-lg-4 mb-2 mb-lg-3">

            <div className="col-md-5 d-flex flex-column align-items-center mb-4 mb-md-0">
              <br/>
              <p></p>
              <div className="position-relative my-5"><img className="img-fluid custom-image shadow-lg d-block position-relative zindex-2" src={rub} alt="Testing"   /> 
                <div className="bg-primary position-absolute start-0 bottom-0 w-100" style={{ height: '85.4%', borderRadius: '2.25rem 8rem 2.25rem 2.25rem' }}></div>
              </div>
              <div className="text-center text-md-start pt-3 mt-3">
                <h2 className="mb-2">Тестирование сотрудников</h2>
                {/* <p className="fs-xl text-muted mb-2">CEO Around Group</p> */}
                <div className="position-relative pt-4" style={{ maxWidth: '500px' }}>
                  <p className="fs-xl position-relative zindex-2 mb-0"> действительно является важным аспектом управления персоналом, особенно когда речь идет о подборе команды, мотивировании работников и повышении эффективности их труда. 
                  Понимание индивидуальных особенностей каждого сотрудника помогает создать более продуктивную рабочую среду и улучшить результаты компании.</p>
                </div>
                <div className="position-relative pt-4" style={{ maxWidth: '500px' }}>
                  <p className="fs-xl position-relative zindex-2 mb-0">Однако перед принятием решения о сотрудничестве с нами важно учитывать несколько факторов:
                  <span className="h4 text-warning m-1 ai-arrow-up-right"></span></p>
                </div>
                <div className="position-relative pt-4" style={{ maxWidth: '500px' }}>
                  <p className="lead fs-xl position-relative zindex-2"><strong className="text-dark">Задача</strong> - получать удовольствие от развития бизнеса и собственного развития.</p>
                  <p className="fs-xl position-relative zindex-2 mb-0">Если вас заинтересовало данное предложение, рекомендую уточнить детали услуги, включая стоимость, сроки выполнения работ и возможные гарантии результата. Это позволит сделать осознанный выбор и принять решение о сотрудничестве с нами. </p>
              <br/>  
              <a className="nav-link lead fs-lg position-relative zindex-2" href="tel:+7(922)471-44-34">По всем интересующим вопросам можно обратиться: + 7(922)471-44-34</a>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-6 col-xxl-5 offset-lg-1 offset-xxl-2">
              <div className="ps-md-4 ps-lg-0">
                <div className="position-relative d-flex justify-content-end my-4 py-0" data-aos="fade-left" data-aos-easing="ease-out-back">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">01</div>
                  <div className="card border-0 ps-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Цели тестирования:</h3>
                      <p className="card-text">Определите, какие именно данные вы хотите получить от тестирования: оценка профессиональных навыков, личностные качества, уровень мотивации, стиль работы.</p>
                    </div>
                  </div>
                </div>
                <div className="position-relative d-flex justify-content-end my-1 py-0" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="300">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">02</div>
                  <div className="card border-0 p-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Методы тестирования:</h3>
                      <p className="card-text">Существуют различные методы оценки персонала, такие как психологические тесты, профессиональные задания, интервью, наблюдения и другие. Важно выбрать подходящие инструменты, соответствующие вашим целям.</p>
                    </div>
                  </div>
                </div>
                <div className="position-relative d-flex justify-content-end my-1 py-0" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="500">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">03</div>
                  <div className="card border-0 p-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Конфиденциальность и этика:</h3>
                      <p className="card-text">Наше тестирование проводится с соблюдением конфиденциальности и этики, чтобы избежать возможных конфликтов и недопонимания среди сотрудников.</p>
                    </div>
                  </div>
                </div>
                <div className="position-relative d-flex justify-content-end my-1 py-0" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="700">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">04</div>
                  <div className="card border-0 p-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Анализ результатов:</h3>
                      <p className="card-text">После проведения тестирования нашей компанией важно правильно  интерпретировать полученные данные и использовать их для принятия обоснованных решений относительно распределения обязанностей, мотивации и развития сотрудников.</p>
                    </div>
                  </div>
                </div>
                <div className="position-relative d-flex justify-content-end my-1 py-0" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="900">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">05</div>
                  <div className="card border-0 p-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Обратная связь:</h3>
                      <p className="card-text">Предоставление обратной связи сотрудникам после тестирования поможет им лучше понять свои сильные и слабые стороны, а также определить пути для дальнейшего профессионального роста.</p>
                    </div>
                  </div>
                </div>
                <div className="position-relative d-flex justify-content-end my-1 py-0" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="1100">
                  <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">06</div>
                  <div className="card border-0 p-3 m-1" style={{ width: 'calc(98% - 1.75rem)' }}>
                    <div className="card-body p-3">
                      <h3 className="h5 card-title pb-1 mb-0">Общий свод информации:</h3>
                      <p className="card-text">Мы предоставляем общий анализ по команде/отделу для руководителя. Данная информация поможет более эффективно управлять своей командой.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-2">
           <h4 className="mb-lg-3 position-relative zindex-2"> Подробности о направлении и наличие мест уточняйте у администратора
              <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/rubleva_coach"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-lg btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/anyuta_rubleva?igsh=NHIwdWYxNGJhdWY2"><i className="ai-instagram"> </i> </a> 
          </h4>
        </div>
        </div>
      </section>
  </div>
);
};

export default Testing;
