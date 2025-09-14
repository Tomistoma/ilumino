import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Katalog.css';
import Navbar from './Navbar';
import Footer from './Footer';

const products = [
  {
    name: '🌞 Solaris Yellow',
    description:
      'Sluneční třpyt v kapce. Září i za bílého dne a pod UV exploduje teplým, zářivě žlutým světlem. Pro brunchy, terasy i zlaté hodiny.',
    image: '/yellow.png',
    link: '/yellow',
  },
  {
    name: '🌒 Noctura Red',
    description:
      'Dvojitá identita. Ve dne klidná a modrá, v noci hoří rudým plamenem pod UV. Svádí pohledy, oslovuje emoce. Pro večírky, které nezapomenete.',
    image: '/yellow.png',
    link: '/red',
  },
  {
    name: '💧 Azzura Blue',
    description:
      'Jako kapka oceánu pod UV. Chladivá, čistá, klidná. Modrá fluorescence, která neřve – ale zanechá dojem.',
    image: '/yellow.png',
    link: '/blue',
  },
];

const Katalog = () => {
  return (
    <div>
      <Navbar />
      <main className="katalog-wrapper">
        <h2 className="katalog-heading" style={{ color: '#FFEA00', textAlign: 'center' }}>
          ✨ Objev naši kolekci světelných elixírů
        </h2>
        {products.map((product, index) => (
          <Link to={product.link} key={index} style={{ textDecoration: 'none' }}>
            <div
              className={`product-row ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{
                backgroundColor: index % 2 === 0 ? '#1a1a1a' : '#111',
                borderRadius: '12px',
                marginBottom: '40px',
                padding: '20px',
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="product-text">
                    <h3 style={{ color: '#FFE135', fontSize: '1.8rem' }}>{product.name}</h3>
                    <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>{product.description}</p>
                  </div>
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                  <div className="spacer" />
                </>
              ) : (
                <>
                  <div className="spacer" />
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                  <div className="product-text">
                    <h3 style={{ color: '#FF6F61', fontSize: '1.8rem' }}>{product.name}</h3>
                    <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>{product.description}</p>
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Katalog;