import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import "./component.css"


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Это поле обязательно к заполнению!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Это недействительный адрес электронной почты.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
       Имя пользователя должно содержать от 3 до 20 символов.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
       Пароль должен содержать от 6 до 40 символов.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLasttName = this.onChangeLasttName.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      DOB: "",
      phone: "",
      address: "",
      firstName: "",
      lastName: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeDOB(e) {
    this.setState({
      DOB: e.target.value
    });
  }

  onChangePhone(e) {
     this.setState({
      phone: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
   });
 }

 onChangeFirstName(e) {
  this.setState({
    firstName: e.target.value
 });
}

onChangeLasttName(e) {
  this.setState({
    lastName: e.target.value
 });
}

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.DOB,
        this.state.phone,
        this.state.address,
        this.state.firstName,
        this.state.lastName,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="navbar-content">
      <main className="page-wrapper">
      {/* <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          /> */}

       <div className="d-lg-flex position-relative h-100">
        <a className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="/" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i className="ai-home"></i></a>
        <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
          <div className="w-100 mt-auto" style={{maxWidth: '526px'}}>
            <h1>Нет аккаунта? Зарегистриуйся</h1>
            <p className="pb-3 mb-3 mb-lg-4">Уже есть аккаунт?&nbsp;&nbsp;
            <Link to='/login' type="login">Зайти!</Link></p>

          <Form 
          // className="needs-validation" novalidate
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="row row-cols-1 row-cols-sm-2">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Ваш Username" 
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Ваш Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2">
                <div className="form-group">
                  <label htmlFor="firstName">Имя</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Ваше Имя" 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Фамилия</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Ваша Фамилия" 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChangeLasttName}
                    validations={[required]}
                  />
                </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2">
                <div className="form-group">
                  <label htmlFor="DOB">Дата Рождения</label>
                  <Input
                    type="date"
                    className="form-control form-control-lg ps-5"
                    placeholder="Дата Рождения" 
                    name="DOB"
                    value={this.state.DOB}
                    onChange={this.onChangeDOB}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Номер Телефона" 
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    validations={[required]}
                  />
                </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Адрес</label>
                  <Input
                    type="text"
                    className="form-control form-control-lg ps-5"
                    placeholder="Ваш адрес проживания"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required]}
                  />
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
                    placeholder="Пароль"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
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
                  <button className="btn btn-primary btn-block">Зарегистрироваться</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
          </div>
          {/* <p className="w-100 fs-sm pt-5 mt-auto mb-5" style={{maxWidth: '526px'}}><span class="text-muted">&copy; All rights reserved. Made by</span><a class="nav-link d-inline-block p-0 ms-1" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p> */}
        </div>
        <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{backgroundImage: 'url(assets/img/account/cover.jpg)'}}></div>
      </div>

        {/* </div>
      </div> */}

      </main>
      </div>
    );
  }
}
