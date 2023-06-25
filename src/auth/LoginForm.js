// import React, { useState, Component  } from "react";

import React, { useState, useRef } from "react";
import AuthService from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardTitle
} from 'reactstrap';
import Alert from 'react-bootstrap/Alert'
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../components/component.css"

// import { BsArrow90DegUp }  from "react-icons/bs";
// import { FaSignInAlt } from "react-icons/fa";
// import { FiAlertCircle } from "react-icons/fi";

//Login form that is provided to user to add their username and password.
//This child component will send data to parent to check if they can be logged in or not.
//If unsuccessful, they will be told there is a problem.

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
         Это поле обязательно к заполнению!
      </div>
    );
  }
};

function LoginForm({ login }) {
  const INITIAL_STATE = {
    username: '',
    password: '',
    // message: '',
    // loading: false
}
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  // const [hasLoginErrors, setHasLoginErrors] = useState(false);
  // const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  // const checkBtn = useRef();


  console.debug(
    "LoginForm",
    "formData=", formData,
    // "login=", typeof login,
    // "hasLoginErrors", hasLoginErrors,
  );

  //This handles the inputs as they are entered in by the user and saves to state. 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  };

  //This handles the submission by the user and will either be successful or not. 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormData(INITIAL_STATE);
    
    try {
      const response = await login({ ...formData });
      if (response.message === "success") {
        setFormData(INITIAL_STATE);
        setLoading(true);
        navigate("/user");
        // window.location.reload();
        // setMessage("Вы успешно ввели свои данные.");
      } else {
        setLoading(false);
        setMessage("Неверное имя пользователя или пароль.")
      }
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
      setLoading(false);
    }
    
   
  };
  
    // setLoading(false);
    // setMessage("Form submitted successfully.");
    // setMessage("");
   

  return (
    <div className="navbar-content">
    <main className="page-wrapper">
    {/* <div className="container p-5">
    <main className="page-wrapper p-5"> */}
    {/* <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}

      <div className="d-lg-flex position-relative h-100" style={{ position: "relative" }}>
       <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
        <div className="w-100 mt-auto" style={{maxWidth: '526px'}}>
          <h1>Войдите в свой аккаунт</h1>
          <p className="pb-3 mb-3 mb-lg-4">У вас еще нет аккаунта?&nbsp;&nbsp;
          <Link to='/register' type="register">Зарегистрируйтесь здесь!</Link></p>
          
        <Form
        onSubmit={handleSubmit}  
        ref={form}
          // onSubmit={this.handleLogin}
          // ref={c => {
          //   this.form = c;
          // }}
        >
          <div className="form-group">
          <div className="pb-3 mb-3">
            <label htmlFor="username">Username</label>
            <div className="position-relative">
              <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                {/* <input class="form-control form-control-lg ps-5" type="email" placeholder="Email address" required> */}
              
            <Input
              type="text"
              className="form-control form-control-lg ps-5"
              name="username"
              placeholder="Ваш Username" 
              value={formData.username}
              onChange={handleChange}
              // value={this.state.username}
              // onChange={this.onChangeUsername}
              validations={[required]}
            />
          </div>
          </div>  
          </div>

          <div className="form-group">
           <div className="mb-4">
            <label htmlFor="password">Пароль</label>
             <div className="position-relative">
              <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <div className="password-toggle">
              <Input
              type="password"
              className="form-control form-control-lg ps-5"
              name="password"
              placeholder="Пароль"
              // value={this.state.password}
              // onChange={this.onChangePassword}
              value={formData.password}
              onChange={handleChange}
              validations={[required]}
              />
              <label className="password-toggle-btn" aria-label="Show/hide password">
                <input className="password-toggle-check" type="checkbox"/>
                <span className="password-toggle-indicator"></span>
              </label>
             </div>
            </div>
           </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={formData.loading}
              to="/user"
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Зайти</span>
            </button>
          </div>
         <p></p>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {/* <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
            ref={checkBtn}
          /> */}
        </Form>
        </div>
        {/* <p className="w-100 fs-sm pt-5 mt-auto mb-5" style={{maxWidth: '526px'}}><span class="text-muted">&copy; All rights reserved. Made by</span><a class="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p> */}
      </div>
      <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{backgroundImage: 'url(assets/img/account/cover.jpg)'}}></div>
    </div>
    </main>
    </div>
);
}

export default LoginForm;