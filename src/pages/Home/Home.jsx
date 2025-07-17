import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { produtos } from '../Produtos/Produtos';
import './home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProdutos.length / itemsPerPage);
  const currentProdutos = filteredProdutos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page) => (page >= 1 && page <= totalPages) && setCurrentPage(page);

  return (
    <>
      <Header />
      <main className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Descubra Saúde & Bem-Estar</h1>
            <p>Os melhores produtos a preços incríveis!</p>
            <button className="hero-cta">Compre Agora</button>
          </div>
        </section>

        <section className="filter-section">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Pesquisar produtos"
          />
          <div className="category-filters">
            <button className="filter-btn">Medicamentos</button>
            <button className="filter-btn">Higiene</button>
            <button className="filter-btn">Beleza</button>
          </div>
        </section>

        <h2 className="section-title">Nossos Produtos</h2>
        <div className="produtos-grid">
          {currentProdutos.length > 0 ? (
            currentProdutos.map((produto) => (
              <div key={produto.id} className="produto-card">
                <div className="imagem-wrapper">
                  {produto.desconto && <span className="badge">{produto.desconto}</span>}
                  <img src={produto.imagem} alt={produto.nome} loading="lazy" />
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="preco">R$ {produto.preco}</p>
                  <button className="btn-comprar">Adicionar</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">Nenhum produto encontrado.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => goToPage(page)}
                aria-label={`Página ${page}`}
              >
                {page}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              Próximo
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;