import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Card, CardBody, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";
// import {
//    BsPencilSquare
//    }  from "react-icons/bs";
// import { BiHomeHeart } from "react-icons/bi";
import useToggle from "../hooks/useToggle";
import ProfileForm from "./ProfileForm";
import avatar from "../img/avatar.png"

//Profile UserPage shows the user's information that is saved in the backend.
//It also shows the flights / hotels that they have saved to if any. 
//The data is updated upon new flights / hotels being added throughout the app. 
//The user can also choose to update their profile here.


  const UserPage = ( updateUser ) => {
    const { isLoggedIn } = useContext(UserContext);
    const [isUpdate, setIsUpdate] = useToggle(false);
    

    return (
      <section className="bg-secondary">
      <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
        <div className="row pt-sm-2 pt-lg-0">
          {/* Sidebar (offcanvas on sreens < 992px)*/}
          <aside className="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
            <div className="position-lg-sticky top-0">
              <div className="d-none d-lg-block" style={{paddingTop: "105px"}}></div>
              <div className="offcanvas-lg offcanvas-start" id="sidebarAccount">
                <button className="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount"></button>
                <div className="offcanvas-body">
                  <div className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                    <img className="d-block rounded-circle mb-2" src={avatar} width="80" alt="userphoto"/>
                    <h3 className="h4 mb-1">{`${isLoggedIn.firstName} ${isLoggedIn.lastName}`}</h3>
                    <p className="fs-lg text-muted mb-0">{`${isLoggedIn.email}`}</p>
                  </div>
                  <nav className="fs-lg nav flex-column pb-2 pb-lg-4 mb-3">
                    <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Аккаунт</h4>
                    <a className="nav-link fw-semibold py-2 px-0 active" href="/user">
                      <i className="ai-user-check fs-5 opacity-60 me-2"></i>Личный кабинет</a>
                      <a className="nav-link fw-semibold py-2 px-0" href="/profile">
                      <i className="ai-settings fs-5 opacity-60 me-2"></i>Обновить Информацию</a>
                      {/* <a className="nav-link fw-semibold py-2 px-0" href="/billing"><i className="ai-wallet fs-5 opacity-60 me-2"></i>Billing</a> */}
                  </nav>
                  {/* <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
                   <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Dashboard</h4><a className="nav-link fw-semibold py-2 px-0" href="account-orders.html"><i className="ai-cart fs-5 opacity-60 me-2"></i>Orders</a><a className="nav-link fw-semibold py-2 px-0" href="account-earnings.html"><i className="ai-activity fs-5 opacity-60 me-2"></i>Earnings</a><a className="nav-link fw-semibold py-2 px-0" href="account-chat.html"><i className="ai-messages fs-5 opacity-60 me-2"></i>Chat<span className="badge bg-danger ms-auto">4</span></a><a className="nav-link fw-semibold py-2 px-0" href="account-favorites.html"><i className="ai-heart fs-5 opacity-60 me-2"></i>Favorites</a>
                  </nav>  */}
                  {/* <nav className="nav flex-column">
                    <a className="nav-link fw-semibold py-2 px-0" href="/">
                    <i className="ai-logout fs-5 opacity-60 me-2"></i>Выйти</a>
                  </nav> */}
                </div>
              </div>
            </div>
          </aside>
          <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
            <h1 className="h2 mb-4">Личный кабинет</h1>
            {isUpdate
                ? <ProfileForm 
                updateUser={updateUser} 
                setIsUpdate={setIsUpdate}
                />
                : (<>
            <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i className="ai-user text-primary lead pe-1 me-2"></i>
                  <h2 className="h4 mb-0">Основная информация</h2>
                  <a className="btn btn-sm btn-secondary ms-auto" href="/profile" type="ProfileForm">
                    <i className="ai-edit ms-n1 me-2"></i>
                    Обновить Информацию</a>
                </div>
                <div className="d-md-flex align-items-center">
                  <div className="d-sm-flex align-items-center">
                    <div className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" style={{width: '80px', height: '80px'}}>
                      <img  src={avatar} alt="avatar" />
                    </div>
                
                    <div className="pt-3 pt-sm-0 ps-sm-3">
                      <h3 className="h4 mb-2">{`${isLoggedIn.firstName} ${isLoggedIn.lastName}`}
                      <i className="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
                      <div className="text-muted fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
                        <div className="fs-lg d-flex align-items-center me-3">
                          <i className="ai-mail me-1"></i>
                        {`${isLoggedIn.email}`}
                        </div>
                        <div className="fs-lg d-flex align-items-center text-nowrap">
                          <i className="ai-map-pin me-1"></i>
                        {`${isLoggedIn.address}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-100 pt-3 pt-md-0 ms-md-auto" style={{maxWidth: "212px"}}>
                    <div className="d-flex justify-content-between fs-sm pb-1 mb-2">Profile completion<strong className="ms-2">62%</strong></div>
                    <div className="progress" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "62%", ariaValuenow:"62", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                    </div>
                  </div> */}
                </div>
                <div className="row py-4 mb-2 mb-sm-3">
                  <div className="fs-lg col-md-6 mb-4 mb-md-0">
                    <table className="table mb-0">
                      <tr>
                        <td className="border-0 text-muted py-1 px-0">Username</td>
                        <td className="border-0 text-dark fw-medium py-1 ps-3">{`${isLoggedIn.username}`}</td>
                      </tr>
                      <tr>
                        <td className="border-0 text-muted py-1 px-0">Телефон</td>
                        <td className="border-0 text-dark fw-medium py-1 ps-3">{`${isLoggedIn.phone}`}</td>
                      </tr>
                      {/* <tr>
                        <td className="border-0 text-muted py-1 px-0">Language</td>
                        <td className="border-0 text-dark fw-medium py-1 ps-3">English</td>
                      </tr> */}
                      <tr>
                        <td className="border-0 text-muted py-1 px-0">Дата Рождения</td>
                        <td className="border-0 text-dark fw-medium py-1 ps-3">{`${isLoggedIn.dob}`}</td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6 d-md-flex justify-content-end">
                    <div className="w-100 border rounded-3 p-4" style={{maxWidth: "212px"}}>
                      <img className="d-block mb-2" src="assets/img/account/gift-icon.svg" width="24" alt="Gift icon"/>
                      <h4 className="h5 lh-base mb-0">Ваши бонусы</h4>
                      <p className="fs-sm text-muted mb-0">Бесплатный урок</p>
                    </div>
                  </div>
                </div>
                <div className="alert bg-secondary d-flex mb-0">
                  <div className="ps-2">
                  <div className="d-flex align-items-center">
                    <i className="ai-map-pin text-primary lead pe-1 me-2"></i>
                      <h2 className="h4 mb-0">Адрес</h2>
                      {/* <a className="btn btn-sm btn-secondary ms-auto" href="account-settings.html">
                        <i className="ai-edit ms-n1 me-2"></i>Edit info</a> */}
                    </div>
                    <p className="fs-lg text-dark mb-0">{`${isLoggedIn.address}`}</p>
                   <p></p>
                   <p></p>
                   {/* <div className="d-flex align-items-center">
                    <h2 className="h4 mb-0">Интересы</h2>
                    </div>
                    <p className="fs-lg text-dark mb-0">{ null ? `${isLoggedIn.hobby}` : "Вы еще не добавили интересы"}</p> */}
                    {/* <div className="d-flex align-items-center pt-4 pb-1 my-2">
                      <h3 className="h6 mb-0 me-3">Billing address 1</h3>
                      <span className="badge bg-faded-primary text-primary">Primary</span>
                    </div>
                    <p className="mb-0">address street<br/>City,<br/>Country</p> */}
                  </div>

                </div>
              </div>
            </section>
            {/* <div className="row row-cols-1 row-cols-md-2 g-4 mb-4"> */}
        
              {/* <section className="col">
                <div className="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2"><i className="ai-map-pin text-primary lead pe-1 me-2"></i>
                      <h2 className="h4 mb-0">Адрес</h2>
                     </div>
                    <p className="mb-0">{`${isLoggedIn.address}`}</p>
                  </div>
                </div>
              </section> */}
              {/* Billing*/}
              {/* <section className="col">
                <div className="card h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2"><i className="ai-wallet text-primary lead pe-1 me-2"></i>
                      <h2 className="h4 mb-0">Billing</h2><a className="btn btn-sm btn-secondary ms-auto" href="account-billing.html"><i className="ai-edit ms-n1 me-2"></i>Edit info</a>
                    </div>
                    <div className="d-flex align-items-center pb-1 mb-2">
                      <h3 className="h6 mb-0 me-3">
                      {`${isLoggedIn.firstName} ${isLoggedIn.lastName}`}
                      </h3>
                      <span className="badge bg-faded-primary text-primary">Primary</span>
                    </div>
                    <div className="d-flex align-items-center pb-4 mb-2 mb-sm-3"><svg width='52' height='42' viewBox='0 0 52 42' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M22.6402 28.2865H18.5199L21.095 12.7244H25.2157L22.6402 28.2865ZM15.0536 12.7244L11.1255 23.4281L10.6607 21.1232L10.6611 21.124L9.27467 14.1256C9.27467 14.1256 9.10703 12.7244 7.32014 12.7244H0.8262L0.75 12.9879C0.75 12.9879 2.73586 13.3942 5.05996 14.7666L8.63967 28.2869H12.9327L19.488 12.7244H15.0536ZM47.4619 28.2865H51.2453L47.9466 12.7239H44.6345C43.105 12.7239 42.7324 13.8837 42.7324 13.8837L36.5873 28.2865H40.8825L41.7414 25.9749H46.9793L47.4619 28.2865ZM42.928 22.7817L45.093 16.9579L46.3109 22.7817H42.928ZM36.9095 16.4667L37.4975 13.1248C37.4975 13.1248 35.6831 12.4463 33.7916 12.4463C31.7469 12.4463 26.8913 13.3251 26.8913 17.5982C26.8913 21.6186 32.5902 21.6685 32.5902 23.7803C32.5902 25.8921 27.4785 25.5137 25.7915 24.182L25.1789 27.6763C25.1789 27.6763 27.0187 28.555 29.8296 28.555C32.6414 28.555 36.8832 27.1234 36.8832 23.2271C36.8832 19.1808 31.1331 18.8041 31.1331 17.0449C31.1335 15.2853 35.1463 15.5113 36.9095 16.4667Z' fill='#2566AF'/><path d='M10.6611 22.1235L9.2747 15.1251C9.2747 15.1251 9.10705 13.7239 7.32016 13.7239H0.8262L0.75 13.9874C0.75 13.9874 3.87125 14.6235 6.86507 17.0066C9.72766 19.2845 10.6611 22.1235 10.6611 22.1235Z' fill='#E6A540'/></svg>
                      <div className="ps-3 fs-sm">
                        <div className="text-dark">Visa •••• 9016</div>
                        <div className="text-muted">Debit - Expires 03/24</div>
                      </div>
                    </div>
                    <div className="alert alert-danger d-flex mb-0"><i className="ai-octagon-alert fs-xl me-2"></i>
                      <p className="mb-0">Your primary credit card expired on 01/04/2022. Please add a new card or update this one.</p>
                    </div>
                  </div>
                </div>
              </section> */}
            {/* </div> */}
            </>) }
          </div>
        </div>
      </div>
      {/* Divider for dark mode only*/}
      <hr className="d-none d-dark-mode-block"/>
      {/* Sidebar toggle button*/}
      <button className="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" data-bs-toggle="offcanvas" data-bs-target="#sidebarAccount">
        <i className="ai-menu me-2"></i>Account menu</button>
        </section>
    )
}

export default UserPage;