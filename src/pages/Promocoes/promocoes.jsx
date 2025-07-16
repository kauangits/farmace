import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './promocoes.css';

const Promocoes = () => {
  const promocoes = [
    {
      id: 1,
      nome: "Paracetamol 500mg",
      precoOriginal: "20.00",
      precoPromocional: "15.90",
      desconto: "20% OFF",
      imagem: "https://images.unsplash.com/photo-1585435557343-3b0929fb0489",
    },
    {
      id: 2,
      nome: "Sabonete Líquido Dove",
      precoOriginal: "15.00",
      precoPromocional: "12.50",
      desconto: "17% OFF",
      imagem: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    },
    {
      id: 3,
      nome: "Vitamina C 1000mg",
      precoOriginal: "35.00",
      precoPromocional: "28.00",
      desconto: "20% OFF",
      imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 4,
      nome: "Protetor Solar FPS 50",
      precoOriginal: "60.00",
      precoPromocional: "48.00",
      desconto: "20% OFF",
      imagem: "https://images.unsplash.com/photo-1551776235-0f0acd04615d",
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <>
      <Header />
      <main className="promocoes-container">
        <section className="promo-header">
          <h1>Promoções Imperdíveis</h1>
          <p>Aproveite descontos exclusivos em medicamentos e produtos de saúde!</p>
        </section>
        <div className="promocoes-grid">
          {promocoes.map((promo) => (
            <div key={promo.id} className="promo-card">
              <div className="imagem-wrapper">
                <span className="badge">{promo.desconto}</span>
                <img src={promo.imagem} alt={promo.nome} loading="lazy" />
              </div>
              <div className="promo-info">
                <h3>{promo.nome}</h3>
                <p className="preco-original">R$ {promo.precoOriginal}</p>
                <p className="preco-promocional">R$ {promo.precoPromocional}</p>
                <button className="btn-comprar">Comprar Agora</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Promocoes;