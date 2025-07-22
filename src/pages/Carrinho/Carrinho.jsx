import React from 'react';
import { useStore } from '../../components/store/storeContext';
import "../Carrinho/carrinho.css";
import { Trash2 } from "lucide-react";

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useStore();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="cart-container">
      <section className="cart-header">
        <div className="cart-title">
          <h1>Seu Carrinho</h1>
        </div>
      </section>

      {carrinho.length === 0 ? (
        <p className="cart-empty">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-list">
            {carrinho.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imagem} alt={item.nome} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.nome}</h3>
                  <p>Quantidade: {item.quantidade}</p>
                  <p>Preço unitário: R$ {parseFloat(item.preco).toFixed(2)}</p>
                  <p>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                </div>
                <button className="cart-remove-btn" onClick={() => removerDoCarrinho(item.id)}>
                  <Trash2 />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button onClick={limparCarrinho} className="btn-limpar">
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}
