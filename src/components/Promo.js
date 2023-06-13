import React from "react";
// import UserService from "../services/user.service";
import "./component.css"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import certf from '../img/certificates.jpg'
import cert from '../img/certificates2.jpg'

const Promo = () => {


    return ( 
    <div>
       <main class="page-wrapper">
         <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5">
         <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
         </div>
           <h2 className="h1 text-center pt-2 pt-sm-3">Система лояльности.</h2>
           <h4 className="text-center pb-3 mb-3 mb-lg-4">Делаем своих клиентов счастливее! Познакомьтесь пожалуйста с нашей бонусной системой. 
          <a className="text-center btn btn-primary w-100 w-sm-auto" href="/">Купить пакет заняий</a>   
          </h4>
           <Tabs
            defaultActiveKey="present"
            id="justify-tab-example"
            // className="nav nav-tabs flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-3 mb-3 mb-lg-4" 
            className=" mb-3 mb-lg-4" 
            role="tablist" 
            justify
             >
      <Tab eventKey="present" title="ПОДАРКИ"> 
      <div className="tab-pane fade show active" id="present" role="tabpanel"> 
      <div className="card pb-4 pb-md-0 mb-2 mb-md-0"><img className="rounded-5 img-fluid" src="assets/img/landing/corporate/team/bonus.jpg" alt="Beginners"/></div>
    <p></p>
       <div className="row align-items-xlg-center">
         {/* <div className="pb-4 pb-md-0 mb-2 mb-md-0"><img className="rounded-5 img-fluid" src="assets/img/landing/corporate/team/bonus.jpg" alt="Beginners"/></div> */}
          <h2 className="mb-xl-4 text-center">ПОДАРКИ {' '}
          {/* <a className="btn btn-primary w-100 w-sm-auto" href="/">Купить пакет заняий</a>   */}
          </h2>
           <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
             <div className="ps-md-4 ps-lg-0">
          <h5 className="pb-3 mb-3 mb-xl-4 fs-lg">При ежемесячной оплате абонементов:  </h5>
          <div className="row row-cols-2 g-4 pb-2 pb-xl-0 mb-4 mb-xl-5">
            <div className="col"><i className="ai-emoji-smile d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="h6 mb-2 fs-lg">В подарок одно занятие</h3>
              <p className="mb-0 fs-lg">При выборе 2-х направлений с интенсивностью 8 раз в месяц - в подарок по 1 занятию на каждое из направлений дополнительно к основным занятиям в следующем месяце.</p>
            </div>
            <div className="col"><i className="ai-emoji-happy d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="h6 mb-2 fs-lg">В подарок три занятия</h3>
              <p className="mb-0 fs-lg">При выборе 3-х направлений по 8 занятий в подарок 3 занятия (на каждые из направлений по 1 подарку), можно потратить дополнительно к основным занятиям в следующем месяце.</p>
            </div>
            <div className="col"><i className="ai-gift d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="h6 mb-2 fs-lg">В подарок одно дополнительное занятие</h3>
              <p className="mb-0 fs-lg">При выборе 1 направления на 8 занятий и два других по 4 занятия в подарок 1 дополнительное занятие на выбор из тех, что посещает ребенок.</p>
            </div>
            </div>
            <p className="pb-3 mb-3 mb-xl-4 fs-lg">Подарками можно воспользоваться на следующий месяц - дополнительно, при этом в месяце использования подарков другие акции не действуют. 
            <br/> Месяц, в котором вы уже воспользовались подарками, не считается месяцем для накопления следующих подарков. Если вы не воспользовались подарками на следующий месяц они сгорают. Полезные каникулы не входят в акции.  </p>
            </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
            <h5 className="pb-3 mb-3 mb-xl-4 fs-lg">При оплате абонементов от 3-х месяцев и выше:</h5>
          <div className="row row-cols-2 g-4 pb-2 pb-xl-0 mb-4 mb-xl-5">
            <div className="col"><i className="ai-emoji-happy d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="h6 mb-2 fs-lg">В подарок три занятия</h3>
              <p className="fs-lg mb-0">При оплате 1 направления за 3 месяца в подарок 3 занятия (групповые/индивидуальные навыбор).</p>
            </div>
            <div className="col"><i className="ai-emoji-surprise d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="h6 mb-2 fs-lg">В подарок шесть занятий</h3>
              <p className="mb-0 fs-lg">При оплате за 5 месяцев в подарок 6 занятий (групповые/индивидуальные на выбор). </p>
            </div>
            </div>
              <p className="fs-lg">Подарками можно воспользоваться на следующий месяц после окончания оплаты за период 3-5 месяцев.</p>
        </div>
 
    </div>
  </div>
      </Tab>
      <Tab eventKey="certificate" title="СЕРТИФИКАТЫ">
      <div className="tab-pane fade show" id="certificate" role="tabpanel">
       <div className="row align-items-xlg-center">
         <div className="ps-md-4 ps-lg-0">
          <h2 className="mb-xl-4 text-center">СЕРТИФИКАТЫ</h2>
          <p className="pb-3 mb-3 mb-xl-4 fs-lg"> В нашем Центре развития «Форматы» 1 раз в квартал проходит День открытых дверей(мастер-классы, конкурсы, участие с родителями, сладкие подарки). 
          На таких мероприятиях  выможете выиграть сертификаты номиналом, например, 1000, 2000, 3000 рублей. И воспользоватьсяими уже в следующем месяце. </p>
          <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={certf} alt="talant"/>
            </div>
            <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={cert} alt="talant"/>
          </div>
          </div>
          {/* <a className="btn btn-primary w-100 w-sm-auto justify-content-md-end" href="/">Купить пакет заняий</a> <br/>
          <p></p> */}
     </div>
 
    </div>
  </div>
      </Tab>
      <Tab eventKey="promocode" title="ПРОМОКОД">
      <div className="tab-pane fade show" id="promocode" role="tabpanel">
       <div className="row align-items-xlg-center">
          <h2 className="mb-xl-4 text-center">ПРОМОКОД</h2>
          <p className="pb-3 mb-3 mb-xl-4 fs-lg">Каждый месяц у администратора есть Новый ПРОМОКОД на подарок или сертификат от Центра развития «Форматы». 
          Информацию можно узнать у администратора Центра по телефону: +7 (992) 300-65-46. 
          Например, на май действует ПРОМОКОД — ЛЮБЛЮФОРМАТЫ, но необходимо соблюсти условия </p>
          <div className="offset-lg-4 fs-lg">
          <ol>
            <li>Подпишись на группу <i className="ai-vk h2 text-primary fw-normal pb-2 mb-1"/> и <i className="ai-instagram h2 text-primary fw-normal pb-2 mb-1"/>  </li>
            <li>Поставь лайк <i className="ai-like h2 text-primary fw-normal pb-2 mb-1"/> и классный комментарий;</li>
            <li>Сделай репост любой записи, включая программы профориентации;</li>
            <li>Получи в подарок сертификат на 1000 рублей <i className="ai-emoji-happy h2 text-primary fw-normal pb-2 mb-1"/> </li>
          </ol>
          </div>
    </div>
  </div>
      </Tab>
      <Tab eventKey="promotion" title="АКЦИИ">
      <div className="tab-pane fade show" id="promotion" role="tabpanel">
       <div className="row align-items-xlg-center">
         {/* <div className="ps-md-4 ps-lg-0"> */}
          <h2 className="mb-xl-4 text-center">АКЦИИ</h2>
          <h4 className="text-center fs-lg">Наши акции на Летние смены:</h4>
          <p className="text-center fs-lg">"Приведи друга" (1+1) = скидка каждому на абонемент 15% <br/> При посещении двух смен – скидка на вторую смену для ребенка 25%. Скидки по акции не суммируются</p>
           <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">  
             <div className="ps-md-4 ps-lg-0">          
            <div className="col fs-lg"><i className="ai-emoji-smile d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="mb-2 fs-lg">Акция на Полезные каникулы SUPER ЛЕТО
              <br/>
              Смены для детей до 11 лет: 
              </h3>
              <ol>
              <li>05.06.2023-16.06.2023 Like блогеры</li>
              <li> 19.06.2023-30.06.2023 Super герои MARVEL</li> 
              <li> 03.07.2023-14.07.2023 SportStars</li>
              <li> 17.07.2023-28.07.2023 Юные детективы</li>
              <li> 31.07.2023-11.08.2023 Green Power</li>
              </ol>
            </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">  
             <div className="ps-md-4 ps-lg-0">          
            <div className="col fs-lg"><i className="ai-emoji-smile d-block h2 text-primary fw-normal pb-2 mb-1"></i>
              <h3 className="mb-2 fs-lg">Акция на Полезные каникулы STARтапер
              <br/>
              Смены на полдня для подростков 12-17 лет:
              </h3>
              <ol>
              <li>19.06.2023-30.06.2023</li>
              <li>03.07.2023-14.07.2023</li> 
              <li>17.07.2023-28.07.2023</li>
              <li> 31.07.2023-11.08.2023</li>
              </ol>
              </div>
            </div>
            </div>
    </div>
  </div>
      </Tab>
    </Tabs>
    <p></p>
    
      {/* </div>     */}
{/* Tab content*/}
{/* <div className="tab-content">
  
</div> */}
</section>

</main>
  </div>
);

};

export default Promo;