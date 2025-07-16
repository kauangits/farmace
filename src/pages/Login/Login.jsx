import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/store/storeContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./login.css";

function initialState() {
  return { email: "", password: "" };
}

const Login = () => {
  const [values, setValues] = useState(initialState());
  const { login } = useContext(StoreContext);
  const navigate = useNavigate();

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    const sucesso = login(values.email, values.password);
    if (sucesso) {
      navigate("/produtos");
    } else {
      alert("Email ou senha inválidos!");
      setValues(initialState());
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage: "url(/LoginSignupPage/background.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 50, 63, 0.6)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="login-card">
            <div className="login-card__left">
              <h2 className="login-card__title">Fazer login</h2>
              <form onSubmit={onSubmit} className="login-card__form">
                <label htmlFor="email" className="login-card__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={onChange}
                  value={values.email}
                  className="login-card__input"
                  required
                />
                <label htmlFor="password" className="login-card__label">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChange}
                  value={values.password}
                  className="login-card__input"
                  required
                />
                <button type="submit" className="login-card__button">
                  Entrar
                </button>
              </form>
              <div className="login-card__links">
                <a href="/cadastro" className="login-card__link">
                  Cadastre-se
                </a>
                <a href="#" className="login-card__link">
                  Esqueci minha senha
                </a>
              </div>
            </div>
            <div className="login-card__right">
              <div className="login-card__right-wrap">
                <h2 className="login-card__welcome-title">Bem-vindo de volta</h2>
                <h5 className="login-card__welcome-subtitle">
                  Entre para ver os produtos da nossa farmácia!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
