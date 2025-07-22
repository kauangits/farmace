import { createContext, useState, useEffect,useContext } from "react";

export const StoreContext = createContext();


export function useStore() {
  return useContext(StoreContext);
}


export default function StoreProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
  const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
  if (carrinhoSalvo) setCarrinho(carrinhoSalvo);
}, []);

useEffect(() => {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}, [carrinho]);



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (user) setUsuario(user);
  }, []);

  function cadastrar(novoUsuario) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  function login(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const encontrado = usuarios.find((u) => u.email === email && u.senha === senha);
    if (encontrado) {
      setUsuario(encontrado);
      localStorage.setItem("usuarioLogado", JSON.stringify(encontrado));
      return true;
    }
    return false;
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem("usuarioLogado");
  }

  function adicionarAoCarrinho(produto) {
    const existente = carrinho.find((item) => item.id === produto.id);
    if (existente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  function removerDoCarrinho(id) {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <StoreContext.Provider
      value={{
        usuario,
        login,
        logout,
        cadastrar,
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
