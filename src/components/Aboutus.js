import React from "react";
import Col from 'react-bootstrap/Col'

import engTeach from "../img/englishT.jpg";
import Anna from "../img/annaR.jpeg";
import engTch from "../img/engTch.jpg"
import chest from "../img/chestT.jpg"
import gitaras from "../img/gitaraS.jpg"
// import art from "../img/art.png"
// import diana from "../img/diana3.jpeg"
import polina from "../img/polina.jpeg"
import alex from "../img/alex.jpeg"
import logoped from "../img/logoped.jpeg"
import skripka from "../img/skripka.jpg"
// import UserService from "../services/user.service";
// import "./navbar.css"

const Aboutus = () => {


  return (
    // <div>
      <main>
      {/* <div className="overflow-hidden"> */}
        <div className="container pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
          <br/>
          <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" databstoggle="tooltip" dataBsPlacement="left" title="Back to home"><i className="ai-home"></i></a>
         </div>
          <h1 className="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">Наша Команда</h1>
          <Col className="row align-items-center card-hover pb-2 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-2 mb-md-0">
              <img className="rounded-5" src={Anna} width="700" alt="anna"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">Основатель Учебного Центра «ФОРМАТЫ»</div> */}
                {/* <h2 className="mb-lg-4">Креативный Руководитель Центра Развития «ФОРМАТЫ» & Бизнес-Тренер, Наставник <br/> Рублева Анна Владимировна</h2> */}
                <h3 className="mb-lg-4">Рублева Анна Владимировна</h3>
                <ul className="mb-0 mb-md-1 mb-lg-3">
                  <li>Автор программ развития и вовлеченности сотрудников, создатель программ по профориентации подростков и взрослых.</li>
                  <li>Руководитель Центра, предприниматель, профориентолог, коуч.</li>
                  <li>Опыт работы с государственными органами власти, бюджетными учреждениями, коммерческими организациями, а также 16 лет с клиентами в банковском секторе.</li>
                  <li>Опыт работы с подростками 5 лет, со взрослыми 6 лет в части профориентации.</li>
                  <li>Карьерный коучинг, Executive коучинг, сопровождение на переговорах, работа в бизнес-проектах, фин. грамотность.</li>
                  <li>Профориентация 12+. Наставничество и сопровождение сотрудников компании в достижении ими результатов.</li>
                  <li>Сертифицированный бизнес-тренер / Сертификация ERICKSON International Коуч / Командный коуч/ Коуч Переговоров (более 500 часов практики). </li>
                </ul>
             </div>
            </div>
            </Col>
            <Col>
            <div className="card bg-primary dark-mode p-sm-3 p-md-4">
        {/* <div className="pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3"> */}
          <div className="row pt-sm-3 pt-md-4 p-3">
            {/* <div className="col-md-6 col-xl-5 offset-xl-1"> */}
              <p className="fs-lg">На протяжении 18 лет тесно сотрудничала с собственниками бизнеса, руководителями бюджетных учреждений, 
                 администрациями Тюменской области, включая ЯНАО и ХМАО, с главами муниципальных районов.
                 Участие в совещаниях Тюменской области от лица Банка. </p>
              <p className="fs-lg">
                Шестнадцати летний богатый опыт работы в Банковском секторе научили меня разбираться в бизнес-процессах, целях компаний сегмента малый, 
                средний и крупный бизнес, а также в документах, платежах и бизнес-показателях. Проводила публичные презентации и дни финансовой грамотности, 
                в том числе в образовательных учреждениях. Курировала реализацию кампусного проекта. Занималась продвижением Банка 
                на уровне гос.сектора Тюменской области. Была в составе рабочей группы ЦБ по Финансовой доступности услуг.
                Проводила мониторинг и помогала в развитии внутренних структурных подразделений Банка, включая помощь в переговорах с ЛПР, 
                выстраивание командной работы и проведение бизнес-тренингов по территории Тюменской области. 
                Занималась послед контролем и валютным контролем, внедрением новых инициатив и разработкой KPI для сотрудников. 
                Осуществляла подбор кадров, обучение, адаптацию инаставничество персонала. Выводила в лидеры по стране отстающие 
                побизнес-показателям отделы.</p>
            {/* </div>
            <div className="col-md-6 col-lg-5 offset-xl-1"> */}
              <p className="fs-lg">Через меня прошло более 16 тысяч физических лиц и более 1 тысячи компаний. 
              Анализируя людей, их принятие решений, рефлексию я написала свои программы анализа личности и развития потенциала. 
              В бизнесе и в формировании своей команды необходимо понимать сильные и слабые стороны других людей, определять их стратегии, 
              что позволит компании становиться более эффективной в достижении основных бизнес-показателей. <br/> 
              Кроме того, я консультирую собственников бизнеса в масштабированиикомпании, оценке бизнес-показателей, подбору кадров и их мотивации. </p>
              <p className="fs-lg">
              Благодаря такому богатому опыту, знаю потребности руководителей бизнеса, понимаю проблемы, 
              с которыми они сталкиваются, и задачи, стоящие перед ними, а главное, знаю, как их решить. 
              И с 2018 года успешно использую свои навыки в работе бизнес-коуча и с 2017 года являюсь бизнес-тренером. <br/>
              Специально для развития детей, взрослых и корпоративных клиентов открыла Мультиформатный Центр развития «Форматы». 
              Реализую свои инициативы и концепцию формирования полезных навыков развития личности. 
              В дальнейшем Центр будет помогать комплексно решать разные задачи человека и способствовать достижению личных целей. 
              Мы планируем работать со многими учебными заведениями и компаниями Тюменской области.
              </p>
              {/* <div className="input-group"><span class="input-group-text text-muted"><i class="ai-mail"></i></span>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <button className="btn btn-warning" type="button">Book a call</button>
              </div> */}
            {/* </div> */}
          </div>
          <div className="d-none d-md-block text-center mt-n4 m-2">
            <svg className="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
            </svg>
          </div>
          <ol className="fs-lg"> МОИ ПРЕИМУЩЕСТВА ПЕРЕД ДРУГИМИ БИЗНЕС-КОУЧАМИ И НАСТАВНИКАМИ 
          <p className=""></p>
            <li className="">Умею работать с клиентами, которые имеют высокий отклик на стресс, эмоциональное выгорание, хроническую усталость.</li>
            <li className="">Много лет работала и взаимодействовала с руководителями высшего звена, что позволило мне понять их потребности и задачи.</li>
            <li className="">У меня есть кейсы и отзывы реальных руководителей и бизнесменов, которые решили рассказать открыто о результатах нашей работы, не смотря на строгую конфиденциальность.</li>
            <li className="">Имею практический опыт работы с бизнес-процессами разных компаний.</li>
            <li className="">Всегда достигаю своих целей несмотря ни на что. В коучинге также строго ориентирована на результат клиента. Каждая сессия завершается по мере достижения цели, а не по таймеру.</li>
            <li className="">Разрабатываю свои системы и программы.</li>
            <li className="">Я гарантирую полную конфиденциальность. Ни при каких обстоятельствах информация о нашей работе не разглашается третьим лицам. При необходимости заключаю соглашение о конфедециальности.</li>
            <li className="">Придерживаюсь Этического кодекса Международной Федерации Коучинга (ICF).</li>
          </ol>
        {/* </div> */}
        </div>
        </Col>
        <br/>
        <br/>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={polina} width="700" alt="ph"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">Singing Teacher</div> */}
                <h3 className="mb-lg-4">
                Вершинина Полина - главный администратор
                </h3>
                <p className="mb-0 mb-md-1 mb-lg-3"> С 2022 года работаю в «Форматы» администратором, люблю это место и еще больше откликается возможность участвовать в развитии центра.
                  <br/>«Все ты можешь» - мой девиз.
                </p>
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
                <img className="rounded-5" src={alex} width="700" alt="pt"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <h3 className="mb-lg-4">
                Алексей - администратор, куратор «Полезные каникулы, фотограф, дизайнер, вожатый 
                </h3>
                <p className="mb-0 mb-md-1 mb-lg-3"> С 2018 года работаю с детьми.
                  Был во многих загородных лагерях, танцую в Театре Дмитрия Ефимова «Европа» и также фотографирую.
                  <br/>«Как бы тяжело не было идем только вперёд». Я - Педагог, фотограф, дизайнер
                </p>
              </div>
            </div>
          </Col>
          {/* <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={diana} width="700" alt="pf"/></div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                <h3 className="mb-lg-4">
                Диана - главный куратор
                </h3>
                <p className="mb-0 mb-md-1 mb-lg-3"> На протяжении 5 лет работает в загородных и городских лагерях а также в детских центрах.
                   Найходит подход к любому ребёнку и сделает каждого чуточку счастливее! 
                  <br/>«Сердце отдано детям»!
                </p>
              </div>
            </div>
          </Col> */}
     
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0"><a href="portfolio-single-v1.html">
              <img className="rounded-5" src={engTch} width="700" alt="pf"/></a></div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">English Teacher</div> */}
                <h3 className="mb-lg-4">
                  {/* <a href="portfolio-single-v1.html"> */}
                  Педагог, специалист переводоведения и межкультурной коммуникации Английского языка Елена Леонидовна
                    {/* </a> */}
                  </h3>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec eu.
                </p> */}
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                <li>Уровень владения языком на уровне C1, C2 (Advanced, Proficiency)</li>
                <li>Стаж 21 лет</li>
                <li>Международный сертификат</li>
                </ul>
                {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
              <img className="rounded-5" src={engTeach} width="700" alt="pq"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">English Teacher</div> */}
                <h3 className="mb-lg-4">Носитель Английского языка Raymond
                  </h3>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui varius amet et quam massa auctor odio.
                </p> */}
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                <li>За границей преподавал в частной школе 3 года</li>
                <li>В России преподает 6 лет</li>
                <li>Разговорный Клуб</li>
                <li>Международный сертификат</li>
                <li>Специалист переводоведения и межкультурной коммуникации.</li>
                </ul>
                {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={gitaras} width="700" alt="ph"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">Art Teacher</div> */}
                <h3 className="mb-lg-4">
                Преподователь гитары Горват Илья
                  {/* <a href="portfolio-single-v1.html"> */}
                    {/* Учитель Рисования и Лепки ----- Татьяна Викторовна */}
                    {/* </a> */}
                </h3>
                <p> Лично увлекаюсь музыкой и гитарами уже 9 лет.
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                  <li>Обучаю как взрослых так и детей.</li> 
                  <li>Опыт преподавания 4 года. Участник творческого объединения «IFeel».</li>
                  <li>Активно учавствую в проекте «Квартирник».</li>
                  <li>Автор песен и музыки.</li>
                </ul>
                «Гитара это просто!», Вы сможете заиграть и увидеть результат уже пройдя несколько занятий.</p>
                {/* <ul className="mb-0 mb-md-1 mb-lg-3"> Преподавательский опыт:
                     <li>Студия авторских курсов живописи Grafka</li>
                     <li>Студия академической и современной живописи Textura</li>
                     <li>Студия ИЗО</li>
                    </ul> */}
                     {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Lectus lacus, ac justo, ullamcorper egestas at felis arcu arcu venenatis praesent odio. Odio vulputate purus placerat ultrices faucibus sem sed magna est elementum.
                  </p> */}
                  {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 order-md-2 mb-4 mb-md-0">
              <img className="rounded-5" src={logoped} width="700" alt="pq"/>
            </div>
            <div className="col-md-5 col-xl-4 offset-xxl-1 order-md-1" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{maxWidth: "330px"}}>
                <h3 className="mb-lg-4">Логопед и психолог Шевелёва Татьяна Ильинична
                  </h3>
                <ul>
                  <li>Логопед стаж 8 лет</li>
                  <li>Детский массаж</li>
                  <li>Логопедический массаж</li>
                  <li>Развитие речевого дыхания</li>
                  <li>Педагог-психолог с 15-летним стажем</li>
                </ul>
               </div>
            </div>
          </Col>
          <Col className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" dataAos="fade-up" dataAosDuration="600" dataAosOffset="280">
            <div className="col-md-7 offset-xxl-1 mb-4 mb-md-0">
              <img className="rounded-5" src={skripka} width="700" alt="ph"/>
              </div>
            <div className="col-md-5 col-xl-4" dataAos="fade-up" dataAosDuration="850" dataAosOffset="180" datadisableparallaxdown="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{maxWidth: "330px"}}>
                {/* <div className="text-muted mb-2">Art Teacher</div> */}
                <h3 className="mb-lg-4">
                Преподователь скрипки Dama
                  {/* <a href="portfolio-single-v1.html"> */}
                    {/* Учитель Рисования и Лепки ----- Татьяна Викторовна */}
                    {/* </a> */}
                </h3>
                <p> Лично увлекаюсь музыкой и гитарами уже 9 лет.
                <ul className="mb-0 mb-md-1 mb-lg-3"> 
                  <li>Обучаю как взрослых так и детей.</li> 
                  <li>Опыт преподавания 4 года. Участник творческого объединения «IFeel».</li>
                  <li>Активно учавствую в проекте «Квартирник».</li>
                  <li>Автор песен и музыки.</li>
                </ul>
                «Гитара это просто!», Вы сможете заиграть и увидеть результат уже пройдя несколько занятий.</p>
                {/* <ul className="mb-0 mb-md-1 mb-lg-3"> Преподавательский опыт:
                     <li>Студия авторских курсов живописи Grafka</li>
                     <li>Студия академической и современной живописи Textura</li>
                     <li>Студия ИЗО</li>
                    </ul> */}
                     {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Lectus lacus, ac justo, ullamcorper egestas at felis arcu arcu venenatis praesent odio. Odio vulputate purus placerat ultrices faucibus sem sed magna est elementum.
                  </p> */}
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
                {/* <div className="text-muted mb-2">Chest Club</div> */}
                <h3 className="mb-lg-4">
                    Преподователь Шахмат и Шашек Георий Баев
                    </h3>
                    <ul className="mb-0 mb-md-1 mb-lg-3"> 
                     <li>Кандидат в мастера спорта по шахматам</li>
                     <li>Призер чемпионата по «Шахбоксу» СП6</li>
                     <li>Призер командных соревнований по Тюменской области («Чудо-шашки», «Белая ладья»)</li>
                     <li>Первый взрослый разряд по шашкам в 16 лет</li>
                     <li>Победитель в первенстве по Тюменскому региону</li>
                    </ul>
                    <p>Характер состоит в энергичном стремлении к достижению целей, которые каждый себе указывает. (Гете)</p>
                {/* <p className="mb-0 mb-md-1 mb-lg-3">
                  Sed feugiat tristique enim aenean netus cum adipiscing est sem eget nulla leo vestibulum. Cras urna, proin ut ut dictum risus porttitor nulla consequat et iaculis.
                  </p> */}
                  {/* <a className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" href="portfolio-single-v1.html">Read more<i className="ai-arrow-right ms-2"></i></a> */}
              </div>
            </div>
          </Col>
        </div>
      {/* </div> */}
      </main>
    // </div>
  );
};

export default Aboutus;