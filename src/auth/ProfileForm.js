import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Api from "../api";
import UserContext from "./UserContext";
import {
	Button,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardTitle
} from 'reactstrap';
import Form from 'react-bootstrap/Form'
import useToggle from "../hooks/useToggle";
import axios from 'axios';
import avatar from "../img/avatar.png"
// import { MdDeleteForever } from "react-icons/md";
// import { FiSave } from "react-icons/fi";
// import { BsArrow90DegUp }  from "react-icons/bs";



//Profile Form for Update is the component where the user can update their profile information.
//If data does not meet the conditions of the backend, they will be informed of the errors. 
//Data is populated based on the profile to ensure with the exception of the password field.
//If successful, the profile is updated and they will be redirected to the profile home page.

const ProfileForm = ({ updateUser}) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const [isUpdate, setIsUpdate] = useToggle(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const uploadImage = () => {
    // TODO: Implement your image upload logic here
    // You can use the selectedImage state to access the uploaded file
    // and send it to the server using an API call.
    // After the upload is complete, you can update the user's profile with the new image URL.

    const formData = new FormData();
    formData.append("image_url", selectedImage);
    axios.post("/api/upload", formData).then((response) => {
      const imageUrl = response.data.imageUrl;
      // Update user's profile with the new image URL
      updateUser({ ...isLoggedIn, imageUrl });
    });
  };
  
  const INITIAL_STATE = {
    firstName: isLoggedIn.firstName,
    lastName: isLoggedIn.lastName,
    email: isLoggedIn.email,
    username: isLoggedIn.username,
    DOB: isLoggedIn.dob,
    phone: isLoggedIn.phone,
    address: isLoggedIn.address,
    hobby: isLoggedIn.hobby,
    password: ''
  }
const [formData, setFormData] = useState(INITIAL_STATE);
const [hasErrors, setHasErrors] = useState([]);
const [saveConfirmed, setSaveConfirmed] = useState(false);
const navigate = useNavigate();

  console.debug(
      "ProfileForm",
      "isLoggedIn=", isLoggedIn,
      "formData=", formData,
      "hasErrors=", hasErrors,
      "saveConfirmed=", saveConfirmed,
  );
  
   //This handles the submission by the user and will either be successful or not. 
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      DOB: formData.DOB,
      phone: formData.phone,
      address: formData.address,
      hobby: formData.hobby,
    };

    let username = formData.username;
    try {
      updateUser = await Api.saveProfile(username, user);
    } catch (errors) {
      setHasErrors(errors);
      return;
    }
    setFormData(f => ({ ...f, password: "" }));
    setHasErrors([]);
    setSaveConfirmed(true);
    setIsLoggedIn(updateUser);
  }

  //This handles the inputs as they are entered in by the user and saves to state. 
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
  }));
  setHasErrors([]);
  }
  
  const handleDelete = (evt) => {
    evt.preventDefault();
    let username = formData.username;
    try {
      if(window.confirm(`Вы уверены, что хотите удалить свой профиль: ${formData.username}?`)) {
        Api.deleteUser(username);

        setSaveConfirmed(true);
        setIsLoggedIn(false);
        // navigate.push("/");
        navigate('/');
        localStorage.clear();
      }
    } catch (err) {
        setHasErrors(err);
        return;
      }
    setHasErrors([]);
  }
          

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
                    <p className="fs-lg text-muted mb-0">Ваш username: {`${isLoggedIn.username}`}</p>
                    {/* <p className="fs-lg text-muted mb-0">{`${isLoggedIn.email}`}</p> */}
                  </div>
                  <nav className="fs-lg nav flex-column pb-2 pb-lg-4 mb-3">
                    <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Аккаунт</h4>
                    <a className="nav-link fw-semibold py-2 px-0" href="/user">
                      <i className="ai-user-check fs-5 opacity-60 me-2"></i>Личный кабинет</a>
                      <a className="nav-link fw-semibold py-2 px-0 active" href="/profile">
                      <i className="ai-settings fs-5 opacity-60 me-2"></i>Обновить Информацию</a>
                      {/* <a className="nav-link fw-semibold py-2 px-0" href="/billing"><i className="ai-wallet fs-5 opacity-60 me-2"></i>Billing</a> */}
                  </nav>
                  {/* <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
                   <h4 className="fs-xs fw-medium text-muted text-uppercase pb-1 mb-2">Dashboard</h4><a className="nav-link fw-semibold py-2 px-0" href="account-orders.html"><i className="ai-cart fs-5 opacity-60 me-2"></i>Orders</a><a className="nav-link fw-semibold py-2 px-0" href="account-earnings.html"><i className="ai-activity fs-5 opacity-60 me-2"></i>Earnings</a><a className="nav-link fw-semibold py-2 px-0" href="account-chat.html"><i className="ai-messages fs-5 opacity-60 me-2"></i>Chat<span className="badge bg-danger ms-auto">4</span></a><a className="nav-link fw-semibold py-2 px-0" href="account-favorites.html"><i className="ai-heart fs-5 opacity-60 me-2"></i>Favorites</a>
                  </nav>  */}
                  <nav className="nav flex-column">
                    <a className="nav-link fw-semibold py-2 px-0" href="/">
                    <i className="ai-logout fs-5 opacity-60 me-2"></i>Выйти</a></nav>
                </div>
              </div>
            </div>
          </aside>
          {/* Page content*/}
          <div className="col-lg-9 pt-4 pb-2 pb-sm-4">
            <h1 className="h2 mb-4">Обновить информацию</h1>
            {/* Basic info*/}
            <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
              <div className="card-body">

              <Form onSubmit={handleSubmit}>
            <FormGroup>
            {hasErrors.length
                  ? 
                  (<div className="alert alert-info d-flex my-3 my-sm-4"><i className="ai-circle-info fs-xl me-2"></i>
                  <p className="mb-0">Пароль должен состоять не менее чем из 5 символов — чем больше, тем лучше.</p>
                </div>)
                  : null}
                 {saveConfirmed
                  ?
                  (<div className="alert alert-primary d-flex my-3 my-sm-4"><i className="ai-circle-info fs-xl me-2"></i>
                  <p className="mb-0">Учетная запись успешно обновлена.</p>
                  </div>)
                  : null}

                <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
                  <i className="ai-user text-primary lead pe-1 me-2"></i>
                  <h2 className="h4 mb-0">Основная информация</h2>
                </div>
                <div className="d-flex align-items-center">
                  <div className="dropdown">
                    {/* <a className="d-flex flex-column justify-content-end position-relative overflow-hidden rounded-circle bg-size-cover bg-position-center flex-shrink-0"
                     href="/" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "80px", height: "80px"}} > */}
                    <a className="d-flex flex-column justify-content-end position-relative overflow-hidden rounded-circle bg-danger bg-position-center flex-shrink-0"
                     href="/" data-bs-toggle="dropdown" aria-expanded="false" style={{width: "80px", height: "80px"}} >
                    <span className="d-block text-light text-center lh-1 pb-1" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                      <i className="ai-camera"></i>
                    </span>
                    </a>
                  
                    <div className="dropdown-menu my-1 text-center">
                      {/* <a className="dropdown-item fw-normal" href="/"> */}
                    <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="form-control"
                        />
                      <Button className="justify-content-center" color="primary" onClick={uploadImage}>
                        Загрузить фото
                      </Button>
                      {/* <i className="ai-camera fs-base opacity-70 me-2"></i>Загрузить новое фото */}
                      {/* </a> */}
                      {/* <a className="dropdown-item text-danger fw-normal" href="/">
                        <i className="ai-trash fs-base me-2"></i>Удалить фото</a> */}
                      </div>
                  </div>
                  <div className="ps-3">
                    <h3 className="h6 mb-1">Обновить фото профиля</h3>
                    <p className="fs-sm text-muted mb-0">PNG or JPG не превышающий рамер 1000px.</p>
                  </div>
                </div>
                <div className="row g-3 g-sm-4 mt-0 mt-lg-2">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="fn">Имя</label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                     />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="ln">Фамилия</label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                     />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="email">электронная почта</label>
                    <Input
                      id="email"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                     />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="phone">Телефон </label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                     />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="address">Адрес</label>
                    <Input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                     />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="DOB">Дата Рождения</label>
                    <Input
                      id="DOB"
                      type="text"
                      name="DOB"
                      value={formData.DOB}
                      onChange={handleChange}
                     />
                  </div>
                   {/* <div className="col-12">
                    <label className="form-label" htmlFor="bio">Bio</label>
                    <textarea className="form-control" rows="5" placeholder="Add a bio" id="bio"
                    value={formData.hobby}
                    onChange={handleChange} ></textarea>
                  </div> */}
                <div className="d-flex align-items-center ">
                  <i className="ai-lock-closed text-primary lead pe-1 me-2"></i>
                  <h2 className="h4 mb-0">Поменять пароль</h2>
                </div>
                {/* <div className="row align-items-center"> */}
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="password">Ваш пароль</label>
                    <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Повторите Ваш пароль или введите новый... "
                    value={formData.password}
                    onChange={handleChange}
                  />
                  </div>
                  {/* <div className="alert alert-info d-flex my-3 my-sm-4"><i className="ai-circle-info fs-xl me-2"></i>
                  <p className="mb-0">Пароль должен состоять не менее чем из 5 символов — чем больше, тем лучше.</p>
                </div> */}
                  {/* </div> */}
                
                  </div>
                  <div className="col-12 d-flex justify-content-end pt-3">
                    <button className="btn btn-secondary" type="button" to="/profile">Отменить</button>
                    <button className="btn btn-primary ms-3" type="button" onClick={handleSubmit}>Сохранить</button>
                  </div>
                  <div className="d-flex flex-column flex-sm-row justify-content-end pt-4 mt-sm-2 mt-md-3">
                  <button className="btn btn-danger" type="button" onClick={handleDelete}><i className="ai-trash ms-n1 me-2"></i>Удалить аккаунт</button>
                </div>
                  {/* <div className="col-12 d-flex justify-content-end pt-3">
                  <Button  
                  className="btn btn-primary ms-3"
                  onClick={handleSubmit}>
                   
                    Сохранить
                  </Button>
                  <span className="input-group-btn me-2"></span>
                  <Button  type="delete"
                  className="btn btn-danger"
                  onClick={handleDelete} >
                    
                    Удалить аккаунт
                  </Button>
                  <Link className="btn btn-secondary" 
                   to="/profile" type="Profile">
                    Отменить
                     
                  </Link>
                  </div> */}
            </FormGroup>
          </Form>

              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Divider for dark mode only*/}
      <hr className="d-none d-dark-mode-block"/>
      {/* Sidebar toggle button*/}
      <button className="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" data-bs-toggle="offcanvas" data-bs-target="#sidebarAccount"><i className="ai-menu me-2"></i>Account menu</button>
   </section>
 );
}

export default ProfileForm;
