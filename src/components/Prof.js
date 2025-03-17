import React from 'react'

import proff from "../img/profn.jpg";
import proft from "../img/profff.png"

import prft from "../img/profr.png"
import teen from "../img/tengs.jpg";
import teeng from "../img/teeng.jpg"

import aninvest from "../img/aninvest.jpg"
import aprful from "../img/aprful.jpg";
import anadvs from "../img/anadvs.jpg";

import profdevan from "../img/profdevan.jpg";
import profdev from "../img/profdev.jpg"

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
      ПРОФОРИЕНТАЦИЯ в Центре развития «Форматы» - это не просто получение информации о предрасположенности к той или иной профессии — это целый план подготовки во Взрослую Жизнь!
      <br/> Содействие в профессиональной ориентации, планирование образовательной и карьерной траектории, развитии потенциала участника, и тренировка навыков Soft Skills, даже на английском языке.
       </p>
       <br/> <p className="mb-0 lead text-white fw-bold"> Мы предлагаем вовремя определиться со своим выбором! 
       {/* <br/> ВНИМАНИЕ в нашем Мультиформатном Центре развития «ФОРМАТЫ» есть 3 вида программ для подростков! */}
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
              <h4 className="pb-2 pb-lg-3">
              Выбери СВОЙ УДОБНЫЙ формат! Запишись у администратора.
              </h4>        
              <div className="row row-cols-1">
                <div className="col">
                  {/* <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                  <img className="d-block d-dark-mode-none m-1" src="assets/img/services/v3/icons/monitor-dark.svg" width="28" alt="Icon"/>
                  <img className="d-none d-dark-mode-block m-1" src="assets/img/services/v3/icons/monitor-light.svg" width="28" alt="Icon"/>
                  </div> */}

                {/* <p className="fs-lg"> Индивидуальные занятия и группы интенсивность: 2 раза в неделю по 40/60 минут.</p> */}
                <h3 className="h5 mb-0">ПРОФКарьера</h3>
                <p className="fs-lg mb-2">– это программы, направленные на планирование своих профессиональных и образовательных перспектив.</p>
                <p className="fs-lg mb-2">Задача – сформировать в человеке новое профессиональное «Я», которое способно выдерживать напор бушующей
                 стихии и одновременно видеть в ней новые перспективы.</p>
                 <p className="fs-lg mb-2"> Научиться мотивировать себя на результат, и понимать, какие условия ему нужны, чтобы достичь успеха.</p>
                 <p className="fs-lg mb-2"> Даже более того – получать удовольствие от собственного развития. </p>
                  <ul className="fs-lg mb-2"> <p className="h5 mb-2">Программы дают подросткам:</p>
                    <li>понять и принять себя, свои особенности и таланты;</li>
                    <li>определить свою ценность на рынке труда;</li>
                    <li>научиться выбирать сферы, в которых они имеют преимущество;</li>
                    <li>прописать несколько вариантов карьерных стратегий;</li>
                    <li>понять, что мешает, разрешить сомнения и в итоге</li>
                    <li>обрести профессию, которая наполнена смыслом.</li>
                  </ul>
                  <h4 className="h5 mb-2">На ваш выбор есть несколько программ:</h4>
                  <ul className="fs-lg">
                  <li>ПРОФДИАГНОСТИКА </li>
                  <li>ПРОФТРАЕКТОРИЯ</li>
                  <li>ПРОФСТАРТ</li>
                  <li>ПРОФДЕЛО</li>
                  <li>ПРОФДВИЖЕНИЕ</li>
                  <li>«ПОЙМИ СЕБЯ»</li>
                  </ul>
                  <h3 className="h5 mb-2"> АВТОР ПРОГРАММ: Анна Рублева</h3>
                </div> 
                <p></p>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                <h3 className="h5 mb-2">ПРОГРАММА ПРОФДИАГНОСТИКА</h3>
                <h4 className="h5 mb-2">Способствует формированию индивидуальной образовательной и карьерной траектории.</h4>
                <p className="fs-lg mb-2">Диагностика делится на 2 полезные встречи общей продолжительностью 2 часа, где на первой встрече проводится интервьюирование и тестирование, 
                  а на второй встрече обратная связь по результатам анализа личности. Позволяет понять профиль личности, состояние стресса и комфорта,
                  потенциал развития личности.
                  <br/>В экспресс-анализе до 5 страниц описания характеристики личности. <br/>В глубоком анализе у участника анализ личности составляет от 10 до 15 страниц. </p>
                  <h4 className="h5 mb-2">По итогу тестирования у участника имеется представление о: </h4>
                  <ul className="fs-lg mb-2">
                    <li>вариантах профессии и развитых навыках;</li>
                    <li>своих интеллектах, талантах и зонах развития;</li>
                    <li>преобладающих инстинктах;</li>
                    <li>восприятии себя;</li>
                    <li>понимании мотивации и ценностях;</li>
                    <li>вариациях хобби.</li>
                  </ul>
                  <p className="fs-lg mb-0">Дополнительно возможна подборка ВУЗов/ ССУЗов для поступления.</p>
                </div> 
                <p></p>
              </div>
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
            <h2 className="h5 mb-2">ПРОГРАММА ПРОФТРАЕКТОРИЯ</h2>
              <h4 className="h5 mb-2">Программа «Моя траектория» для тех, кто хочет не просто выбрать профессию, но и замотивировать себя и спланировать свое будущее на ближайшие 5 лет.</h4>
                <p className="fs-lg mb-2">Диагностика делится на 2 полезные встречи общей продолжительностью 2 часа, где на первой встрече проводится интервьюирование и тестирование, 
                  а на второй встрече обратная связь по результатам анализа личности. Позволяет понять профиль личности, состояние стресса и комфорта,
                  потенциал развития личности.
                  <br/>В экспресс-анализе до 5 страниц описания характеристики личности. <br/>В глубоком анализе у участника анализ личности составляет от 10 до 15 страниц. </p>
                  <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li> 6 занятий, из них 5 групповых и 1 индивидуальное с коучем</li>
                    <li>Анализ профиля участника по уникальной методике автора программы позволит понять лучше самого себя, свое мышление и мотивацию, увидеть сильные и слабые стороны,
                       а также выстроить грамотную образовательную траекторию.</li>
                    <li>Эффективное планирование исходя из профиля участника дает внутренний подъем для подростка и видение своего успешного будущего.</li>
                    <li>Мотивация, работа с ценностями и тайм-менеджмент закрепит фокус внимания на достижении своих целей в будущем и сформирует желание двигаться вперед.</li>
                    <li>Возможна комплектация программы исходя из типологии личности подростка.</li>
                  </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={aninvest} alt="ImH"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={aprful} alt="ImH"/>
            <p></p>
            {/* <br/>
            <p></p>
            <img className="rounded-5" src={anadvs} alt="ImH"/> */}
          </div>
          <div className="col-md-6 col-xl-5 order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <div className="row row-cols-1">
                <div className="col">
                <h3 className="h5 mb-2">ПРОГРАММА ПРОФСТАРТ</h3>
                <h4 className="h5 mb-2">Базовая программа с целью определения основных предрасположенностях личности в карьере.</h4>
                <p className="fs-lg mb-2">Программа рассчитана на 4 академических часа.</p>
                <h4 className="h5 mb-2">В программу входит:</h4>
                   <ul className="fs-lg mb-2">
                    <li>Экспресс-анализ с вариацией подходящих профессий 
                      (Анализ профиля личности до 5 страниц, короткая информация о интеллектах, вариантах подходящих профессий и мотивации)</li>
                    <li>Рекомендации по развитию своих компетенций (предоставляется в дополнение к экспресс-анализу)</li>
                    <li>Игропрактика (короткая игра, направленная на визуализацию своего образования и карьеры)</li>
                    <li>Семинар-тренинг о востребованных профессиях 
                      (полезная информация о ВУЗах, ССУЗах, поступлению, востребованность разных профессиях будущего)</li>
                  </ul>
                </div> 
                <p></p>
              </div>
              <div className="row row-cols-1">
                <div className="col">
                <h3 className="h5 mb-2">ПРОГРАММА ПРОФДЕЛО</h3>
                <h4 className="h5 mb-2">Стандартная программа с целью грамотного определения своей карьерной и образовательной траектории. 
                Дает возможность взвесить все «за» и «против».</h4>
                <p className="fs-lg mb-2">Программа рассчитана на 10 академических часов.</p>
                <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>ПРОФдиагностика участника (анализ профиля личности до 15 страниц, в котором: подробная информация о интеллектах, 
                      вариантах подходящих профессий, мотивации, ценностях, восприятии себя, сильных качествах, вариантах хобби, 
                      рекомендации по развитию своих компетенций)</li>
                    <li>Мини-тренинги с элементами коучинга (позволяет запустить рефлексию участника, помочь сделать правильный выбор 
                      между профессиями, разобраться в ценностях и приоритетах, понять как грамотно спланировать образовательную и 
                      карьерную траекторию)</li>
                    <li>Игропрактика (игра, направленная на визуализацию своего образования и карьеры, а также игра на тренировку 
                      коммуникативной уверенности)</li>
                    <li>Семинар-тренинг о востребованных профессиях (полезная информация о ВУЗах, ССУЗах,
                      поступлению, востребованность разных профессиях будущего)</li>
                  </ul>
                </div> 
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-4 py-xl-5 my-2">
          <div className="col-md-6 pb-2 mb-4 mb-md-0">
            <img className="rounded-5" src={profdevan} alt="Ima"/>
            <p></p>
            <br/>
            <p></p>
            <img className="rounded-5" src={anadvs} alt="ImH"/>
            <br/>
            <p></p>
            <img className="rounded-5" src={profdev} alt="Ima"/>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="ps-md-4 pe-xl-0">
            <h2 className="h5 mb-2">ПРОГРАММА ПРОФДВИЖЕНИЕ</h2>
              <h4 className="h5 mb-2">Продвинутая программа с целью самоопределения в образовательной и карьерной траектории.</h4>
                <p className="fs-lg mb-2">Программа рассчитана на 21 академический час. </p>
                  <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>ПРОФдиагностика участника (анализ профиля личности до 15 страниц, в котором: подробная информация о 
                      интеллектах, вариантах подходящих профессий, мотивации, ценностях, восприятии себя, сильных качествах,
                      вариантах хобби, рекомендации по развитию своих компетенций)</li>
                    <li>Мини-тренинги с элементами коучинга (позволяет запустить рефлексию участника, помочь сделать правильный выбор между профессиями, разобраться в ценностях 
                      и приоритетах, понять как грамотно спланировать образовательную и карьерную траекторию, чек-листы, гайды и трекеры-привычек)</li>
                    <li>Игропрактика, игротехники и Кейсы на лидерство (игры, направленные на визуализацию своего образования и карьеры; игры на тренировку коммуникативной уверенности; SOFT SKILLS)</li>
                    <li>Семинар-тренинг о востребованных профессиях (полезная информация о ВУЗах, ССУЗах, поступлению, востребованность разных профессиях будущего)</li>
                  </ul>
                  <h2 className="h5 mb-2">ПРОГРАММА «ПОЙМИ СЕБЯ»</h2>
              <h4 className="h5 mb-2">«Пойми себя» - грамотный и комплексный подход к развитию личности.  <br/>
              Программа позволяет выбрать свою профессию, разобраться в своих «хочу», «могу», «надо», выстроить грамотные взаимоотношения 
              с родителями, педагогами и друзьями, мотивировать себя на результат и перевернуть свои страхи в ресурс. </h4>
                <p className="fs-lg mb-2">Программа рассчитана на 15 занятий по 1,5 часа, из них 13 групповых и 3 индивидуальные встречи с коуч-специалистом. 
                <br/>Либо индивидуально 8 занятий в виде мини-тренингов с элементами коучинга.</p>
                  <h4 className="h5 mb-2">В программу входит:</h4>
                  <ul className="fs-lg mb-0">
                    <li>ПРОФДИАГНОСТИКА</li>
                    <li>Эффективное планирование образовательной и карьерной траектории</li>
                    <li>Психология личностного роста и публичных выступлений</li>
                    <li>Тренировка и развитие навыков Soft Skills</li>
                    <li>Формирование системы ценностей и фундамента из полезной поддерживающей среды</li>
                    <li>Мотивация и тайм-менеджмент закрепит фокус внимания на достижении своих целей в будущем сформирует желание двигаться вперед</li>
                  </ul>
            </div>
          </div>
        </div>
        <div>
            <h4 className="mb-lg-4">РЕЗУЛЬТАТ ОТ РАБОТЫ В ПРОГРАММАХ:</h4>
             <p className="fs-lg">Определим, какая профессия позволит подростка максимально раскрыть его потенциал, таланты и суперсилы.
            Он сам сможет понять: «Это моё».</p> 
            <ul className="fs-lg mb-0">
                    <li>Выберем специальность, которая позволит реализовать себя на 100% и быть успешным в будущем.</li>
                    <li> Научимся эффективно планировать свое время и все успевать в течение дня.</li>
                    <li>Поставим личную цель, которая будет вдохновлять и мотивировать к учебе.</li>
                    <li>Сформируем систему ценностей. приверженность к ней и полезную поддерживающую среду.</li>
                    <li>Родитель получает развернутую обратную связь о проделанной работе!</li>
            </ul>
            <p className="fs-lg mb-0">По итогам программ «Моя траектория» и «Инвестиции в себя» выдаются сертификаты. </p>
        </div>
        <br/>
        <div className="pb-2">
              <h4 className="mb-lg-3"> Подробности о направлении и наличие мест уточняйте у администратора или Developskillsnow  
              {/* <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a> */}
              {/* <p className="lead"> */}
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-md btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"> </i> </a> 
              </h4>
              <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46"> Запись по телефонам: +7 (992) 300-65-46, +7 (992) 300-65-23</a>
            </div>
       
      </section>
  </div>
  )
}
