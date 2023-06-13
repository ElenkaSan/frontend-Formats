import React from "react";
import "./component.css";

const Contact = () => {
  return (
    <div>
    <main class="page-wrapper">
        <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5"> <br/>
        <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
         <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
         </div>
        <h1 className="display-2 pb-2 mb-sm-4 mb-lg-5">Связаться с нами:</h1>
        <div className="border-top pb-sm-3 pt-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-2">
            <div className="col pb-2">
              <h4 className="mb-lg-4">Адрес </h4>
              <p className="fs-lg fw-medium pb-3 mb-3"> ул.Попова, 7, стр.2 (вход с торца)</p>
              <a className="btn btn-primary" href="https://2gis.ru/tyumen/search/%D1%83%D0%BB.%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0%2C%207%2C%20%D1%81%D1%82%D1%80.2/geo/1830223003790141/65.543687%2C57.143645?m=65.543719%2C57.143634%2F17.33">
                <i className="ai-map-pin me-1"></i>Открыть на 2GIS
                </a>
            </div>
            <div className="col pb-2">
              <h4 className="mb-lg-4">Телефон</h4>
              <ul className="list-unstyled mb-0">
                <li className="pb-1 mb-2">
                    <span className="d-block fs-sm text-muted mb-1">Главный Офис</span>
                    <a className="nav-link fs-lg p-0" href="tel:+7 (992) 300-65-46">+7 (992) 300-65-46</a>
                </li>
                {/* <li className="pb-1 mb-2"><span className="d-block fs-sm text-muted mb-1">Reception room</span><a className="nav-link fs-lg p-0" href="tel:+178630056044">+1 (786) 300 560 44</a></li>
                <li><span className="d-block fs-sm text-muted mb-1">Franchise</span><a className="nav-link fs-lg p-0" href="tel:+178630050055">+1 (786) 300 500 55</a></li> */}
              </ul>
            </div>
            {/* Schedule*/}
            <div className="col pb-2">
              <h4 className="mb-lg-4">График работы</h4>
              <ul className="list-unstyled mb-0">
                <li className="pb-1 mb-2">
                    <span className="d-block fs-sm text-muted mb-1">Понедельник - Пятница</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">9:00</span>
                    <span className="border-top mx-4" style={{width: '36px', height: '1px'}}></span>
                    <span className="text-nav fs-lg fw-medium">18:00</span>
                  </div>
                </li>
                <li className="pb-1 mb-2">
                    <span className="d-block fs-sm text-muted mb-1">Суббота</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">10:00</span>
                    <span className="border-top mx-4" style={{width: '36px', height: '1px'}}></span>
                    <span className="text-nav fs-lg fw-medium">17:00</span>
                  </div>
                </li>
                {/* <li>
                    <span className="d-block fs-sm text-muted mb-1">Sun</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">12:00</span>
                    <span className="border-top mx-4" style={{width: '36px', height: '1px'}}></span>
                    <span className="text-nav fs-lg fw-medium">16:00</span>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="col pb-2">
              <h4 className="mb-lg-4">Email</h4>
              <a className="nav-link fs-lg p-0" href="mailto:developskillsnow@yandex.ru">developskillsnow@yandex.ru</a>
              <a className="nav-link fs-lg p-0" href="mailto:rubleva_av@mail.ru">rubleva_av@mail.ru</a>
              <br/>
              <p className="mb-lg-4">
              <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="https://vk.com/developskillsnow"><i className="ai-vk"> </i> </a> 
              <a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="https://www.instagram.com/developskillsnow"><i className="ai-instagram"> </i> </a> 
              Developskillsnow</p>
              <p className="mb-lg-4">
              <a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="https://www.instagram.com/women_art_trick"><i className="ai-instagram"></i></a>
              Women Art Trick
              </p>
            </div>
          </div>
        </div>
        </section>
        <section className="position-relative">
        <div className="interactive-map position-absolute top-0 start-0 w-100 h-100"> 
        <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.6201620699712!2d65.5411740770337!3d57.14355567363064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe16eea8b2017%3A0xfb5c857e9bec6669!2zVWxpdHNhIFBvcG92YSwgNyDRgdGC0YDQvtC10L3QuNC1IDIsIFR5dW1lbiwgVHl1bWVuc2theWEgb2JsYXN0JywgUnVzc2lhLCA2MjUwNDg!5e0!3m2!1sen!2sus!4v1685563928169!5m2!1sen!2sus" 
           width="600" 
           height="650" 
           // className='h-450 w-600'
           style={{ border: '0' }}
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"
           title='Formats'>
        </iframe>
       </div>
      </section>
     </main>
    </div>
  )
}

export default Contact;