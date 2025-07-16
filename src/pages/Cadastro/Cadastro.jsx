import React, { useState, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './cadastro.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../../components/store/storeContext";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const { cadastrar } = useContext(StoreContext);

  const handleSubmit = async (e) => {
  e.preventDefault();
 
  if (!nome || !email || !confirmarEmail || !senha || !confirmarSenha) {
    return setErro("Preencha todos os campos.");
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return setErro("Digite um email válido.");
  }

 
  if (email !== confirmarEmail) {
    return setErro("Os emails não coincidem.");
  }

  
  if (senha !== confirmarSenha) {
    return setErro("As senhas não coincidem.");
  }

  
  cadastrar({ nome, email, senha });

  
  navigate("/login");
};


  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header />
        <main style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url(/LoginSignupPage/background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 50, 63, 0.582)',
            pointerEvents: 'none',
            zIndex: 1
          }} />
          <div style={{
            zIndex: 2,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '26px 0px'
          }}>
            <div className="signup-card">
              <h2 className="signup-card__title">Criar conta</h2>
              <form className="signup-card__form" onSubmit={handleSubmit}>
                {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}
                <label className="signup-card__label">Nome</label>
                <input type="text" className="signup-card__input" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label className="signup-card__label">Email</label>
                <input type="email" className="signup-card__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="signup-card__label">Confirmar Email</label>
                <input type="email" className="signup-card__input" value={confirmarEmail} onChange={(e) => setConfirmarEmail(e.target.value)} />
                <label className="signup-card__label">Senha</label>
                <input type="password" className="signup-card__input" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <label className="signup-card__label">Confirmar Senha</label>
                <input type="password" className="signup-card__input" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                <button type="submit" className="signup-card__button">Cadastrar</button>
              </form>
              <div className="signup-card__links">
                <a href="/login" className="signup-card__link">Já tenho uma conta</a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Cadastro;
