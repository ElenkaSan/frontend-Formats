import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import {
	Button,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardTitle,
  // Form, 
  // Alert
} from 'reactstrap';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import "../components/component.css"
import { isEmail } from "validator";
import cover from "../img/leseng.png";

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

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
    DOB: "",
    phone: "",
    address: "",
    firstName: "",
    lastName: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [hasErrors, setHasErrors] = useState([]); 
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  //This handles the inputs as they are entered in by the user and saves to state. 
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
  };

  //This handles the submission by the user and will either be successful or not. 
  const handleSubmit = async (evt) => {
    evt.preventDefault(); 
    try {
        const response = await signup({ ...formData });
        if (response.message === "success") {
          setFormData(INITIAL_STATE);
          window.location.reload();
          setMessage("Вы успешно ввели свои данные.");
          setLoading(true);
          navigate("/user");
        } else {
          setLoading(false);
          // setMessage("Неверное имя пользователя или пароль.")
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
  
  
  return (
    <div className="navbar-content">
    <main className="page-wrapper">
      <div className="d-lg-flex position-relative h-100">
        <a
          className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"
          href="/"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Back to home"
        >
          <i className="ai-home"></i>
        </a>
        <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
          <div className="w-100 mt-auto" style={{ maxWidth: "526px" }}>
            <h1>Нет аккаунта? Зарегистрируйтесь</h1>
            <p className="pb-3 mb-3 mb-lg-4">
              Уже есть аккаунт?&nbsp;&nbsp;
              <Link to="/login" type="login">
                Зайти!
              </Link>
            </p>

            {!loading && (
              <Form onSubmit={handleSubmit}>
                <div>
                  <div className="row row-cols-1 row-cols-sm-2">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Ваш Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        validations={[required, vusername]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Ваш Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        validations={[required, email]}
                      />
                    </div>
                  </div>

                  <div className="row row-cols-1 row-cols-sm-2">
                    <div className="form-group">
                      <label htmlFor="firstName">Имя</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Ваше Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Фамилия</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Ваша Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        validations={[required]}
                      />
                    </div>
                  </div>

                  <div className="row row-cols-1 row-cols-sm-2">
                    <div className="form-group">
                      <label htmlFor="DOB">Дата Рождения</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="ГГГГ-ММ-ДД"
                        name="DOB"
                        value={formData.DOB}
                        onChange={handleChange}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="text"
                        className="form-control form-control-lg ps-5"
                        placeholder="Номер Телефона"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        validations={[required]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Адрес</label>
                    <input
                      type="text"
                      className="form-control form-control-lg ps-5"
                      placeholder="Ваш адрес проживания"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <div className="mb-4">
                      <label htmlFor="password">Пароль</label>
                      <div className="position-relative">
                        <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <div className="password-toggle">
                          <input
                            type="password"
                            className="form-control form-control-lg ps-5"
                            placeholder="Пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            validations={[required, vpassword]}
                          />
                          <label
                            className="password-toggle-btn"
                            aria-label="Show/hide password"
                          >
                            <input
                              className="password-toggle-check"
                              type="checkbox"
                            />
                            <span className="password-toggle-indicator"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block">
                      Зарегистрироваться
                    </button>
                  </div>
                </div>

                {message && (
                  <div className="form-group">
                    <div
                      className={
                        loading
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
                {/* <CheckButton
                  style={{ display: "none" }}
                  ref={checkBtn}
                /> */}
              </Form>
            )}
          </div>
        </div>
                <div
            className="w-50 bg-size-cover bg-repeat-0 bg-position-center"
            style={{ backgroundImage: 'url(assets/img/account/cover.jpg)' }}
          ></div>
          {/* <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{backgroundImage: {cover}}}></div> */}
        </div>
      </main>
    </div>
  );
}

export default SignupForm;