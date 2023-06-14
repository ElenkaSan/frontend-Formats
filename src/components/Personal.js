import React from 'react'

export default function Personal() {
  return (
    <div>
    {/* <main className="page-wrapper"> */}
        {/* <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5"> <br/> */}
       

        <section className="bg-primary position-relative py-5"> <br/>
        <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" ></div>
        <div className="container dark-mode position-relative zindex-2 py-5 mb-4 mb-sm-5">
          <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
            <div className="col-lg-10 col-xl-9">
              <h1 className="display-2 pb-2 pb-sm-3">Личностный рост</h1>
              <p className='display-5'>Наш Мультиформатный центр знает, как важны для каждого из нас ...</p>
              <ul className="list-unstyled d-flex flex-wrap mb-0">
                <li className="d-flex py-1 me-4 fs-lg"><i className="ai-check-alt text-success lead me-2"></i>Тренировка памяти</li>
                <li className="d-flex py-1 me-4 fs-lg"><i className="ai-check-alt text-success lead me-2"></i>Восполняет обшение</li>
                {/* <li className="d-flex py-1 me-4 fs-lg"><i className="ai-check-alt text-success lead me-2"></i>Взаимапомощь</li> */}
                <li className="d-flex py-1 fs-lg"><i className="ai-check-alt text-success lead me-2"></i>Помогает почувстовать себя важным</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About*/}
      <section className="container position-relative zindex-3" style={{marginTop: '-135px'}}>
        <div className="rounded-5 overflow-hidden"> 
          <div className="jarallax ratio ratio-16x9" datajarallax dataspeed="0.6">
            <div className="jarallax-img" style={{backgroundImage: 'url(assets/img/landing/corporate/personal1.jpg)'}}></div>
          </div>
        </div>
        <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
          <div className="col-md-6 col-lg-5">
            <div className="fs-sm text-uppercase mb-3">Как приятно!</div>
            <h2 className="display-6">«Пока у нас есть родители, мы чувствуем себя детьми», а это бесценно.</h2>
          </div>
          <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
            <p className="fs-xl">Специально для наших родных, мы открыли направление <strong>«Приятный возраст».</strong></p>
            <p className="fs-xl"> <strong>В данном клубе можно поддерживать и развивать:</strong></p>
            <ol className="fs-xl mb-0">
            <li>Навыки рисования и визуализации воображения</li>
            <li>Тренировать память</li>
            <li>Рассказывать истории из жизни и делиться воспоминаниями</li>
            <li>Подсказывать друг другу и помогать</li>
            <li>Участвовать в разных мастер-классах Учебного Центра</li>
            </ol>      
          </div>
        </div>
      </section>
      {/* Approach*/}
      <section className="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
        <div className="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
          <div className="fs-sm text-uppercase mb-3">Наша миссия</div>
          <h2 className=" pb-3 mb-lg-4">Мероприятия проводятся днем по четвергам. </h2>
          <p className="fs-lg">
            Необходима предварительная запись по телефону: +7 (992) 300-65-46Внимание! Обязательно попроситесь у администратора в группу Viber «Приятный возраст», чтобы максимально быстро получать новую информацию о работе Клуба
          </p>
          <div>
           <h4 className="">Ждем вас на наших мероприятиях! <br/> С собой иметь хорошее настроение и желание прекрасно провести время!</h4>
         <br/>
          </div>
        </div>
      </section>
      {/* <section className="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
        <div className="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
          <div className="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
            <div className="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto" style={{maxWidth: '530px', backgroundImage: 'url(assets/img/landing/corporate/women2.png)'}}>
              <div className="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
              <div className="dark-mode position-relative zindex-2 p-4">
                <div className="text-center mx-auto" style={{maxWidth: "275px"}}>
                    <span className="d-block fs-sm text-uppercase mb-3">Как мы организуем</span>
                  <h2 className="display-6 mb-0">Ключ к успеху</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="ps-md-4 ps-xl-0">
              <div className="steps steps-hoverable">
                <div className="step py-3 py-xl-4">
                  <div className="step-number">
                    <div className="step-number-inner">01</div>
                  </div>
                  <div className="step-body">
                    <h3 className="h5 pb-1 mb-2">Наш женский клуб</h3>
                    <p className="mb-0 fs-lg">Это ваша грамотная поддерживающая среда для достижения своих целей и «почва» для грамотных перемен.</p>
                  </div>
                </div>
                <div className="step py-3 py-xl-4">
                  <div className="step-number">
                    <div className="step-number-inner">02</div>
                  </div>
                  <div className="step-body">
                    <h3 className="h5 pb-1 mb-2">В клубе мы проводим разные форматы мероприятий</h3>
                    <p className="mb-0 fs-lg">включая <strong>мастер-классы, семинары, тренинги, коучинг, нейрографику.</strong></p>
                  </div>
                </div>
                <div className="step py-3 py-xl-4">
                  <div className="step-number">
                    <div className="step-number-inner">03</div>
                  </div>
                  <div className="step-body">
                    <h3 className="h5 pb-1 mb-2">Вы к нам вступаете</h3>
                    <p className="mb-0 fs-lg">Мы с вами работаем и развиваемся</p>
                  </div>
                </div>
                <div className="step py-3 py-xl-4">
                  <div className="step-number">
                    <div className="step-number-inner">04</div>
                  </div>
                  <div className="step-body">
                    <h3 className="h5 pb-1 mb-2">Выбираем луший подход и стратегию для вас</h3>
                    <p className="mb-0 fs-lg">В последствии получаем желаемый результат</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </section> */}


        {/* </section> */}
     {/* </main> */}
    </div>
  )
}
