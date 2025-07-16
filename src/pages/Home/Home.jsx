import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const produtos = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    nome: `Produto ${i + 1}`,
    preco: (Math.random() * 100 + 10).toFixed(2),
    imagem: `https://via.placeholder.com/300x300?text=Produto+${i + 1}`,
    desconto: i % 3 === 0 ? '10% OFF' : null, // Example badge
  }));

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Descubra Saúde e Bem-Estar</h1>
            <p>Encontre medicamentos e produtos com os melhores preços!</p>
            <button className="hero-cta">Compre Agora</button>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="filter-section">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="category-filters">
            <button className="filter-btn">Medicamentos</button>
            <button className="filter-btn">Higiene</button>
            <button className="filter-btn">Beleza</button>
          </div>
        </section>

        {/* Product Grid */}
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="produtos-grid">
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map((produto) => (
              <div key={produto.id} className="produto-card">
                <div className="imagem-wrapper">
                  {produto.desconto && <span className="badge">{produto.desconto}</span>}
                  <img src={produto.imagem} alt={produto.nome} />
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="preco">R$ {produto.preco}</p>
                  <button className="btn-comprar">Adicionar ao Carrinho</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">Nenhum produto encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;