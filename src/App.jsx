// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./components/store/storeContext";
import PrivateRoute from "./components/PrivateRoute";

// Páginas do projeto da farmácia
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Carrinho from "./pages/Carrinho/Carrinho";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"

function App() {
  return (
    <Router>
      <StoreProvider>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Páginas protegidas */}
          <Route
            path="/produtos"
            element={
              <PrivateRoute>
                <Produtos />
              </PrivateRoute>
            }
          />
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
