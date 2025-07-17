// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./components/store/storeContext";
import PrivateRoute from "./components/PrivateRoute";

// Páginas do projeto da farmácia
import Home from "./pages/Home/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"
import Promocoes from './pages/Promocoes/promocoes';;

function App() {
  return (
    <Router>
      <StoreProvider>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/promocoes" element={<Promocoes />} />
          
          {/* Páginas protegidas */}
          <Route
            path="/carrinho"
            element={
              <PrivateRoute>
                <Carrinho />
              </PrivateRoute>
            }
          />

          {/* Página não encontrada */}
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </StoreProvider>
    </Router>
  );
}

export default App;
