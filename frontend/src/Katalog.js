import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Katalog.css';
import Navbar from './Navbar';
import Footer from './Footer';

const products = [
  {
    name: 'Pulsewave ',
    description:
      'Temně zářivý žlutý akcent, který probouzí skrytý rytmus noci. Jeho fluorescence pod UV světlem připomíná pulzující energii klubových basů a mění každý drink v hypnotický zážitek. Exkluzivní, výrazný, stvořený pro ty, kdo chtějí vyniknout ve stínu neonů.',
    image: '/yellow.png',
    link: '/yellow',
     accent: '#FFE135',    // yellow
  },
  {
    name: 'Noctura Red',
    description:
      'Temně rudý příslib, který v klubové tmě září jako zakázané znamení. Jeho fluorescence pod UV světlem se rozpíná jako žhavá žíla energie a proměňuje každý drink v mystický rituál noci. Exkluzivní, nebezpečně svůdný, pro ty, kdo hledají intenzitu ve stínu.',
    image: '/yellow.png',
    link: '/red',
    accent: '#FF3B3B',    // red
  },
  {
    name: 'Azzura Blue',
    description:
      'Chladná modrá vlna, která se vynořuje z temnoty jako ozvěna skrytého oceánu. Její fluorescence pod UV světlem vytváří hypnotické spektrum, v němž se klub mění v nekonečný prostor. Elegantní, tajemná, stvořená pro noci, co nikdy nekončí.',
    image: '/yellow.png',
    link: '/blue',
    accent: '#3AA7FF',    // blue
  },
];

const Katalog = () => {
  return (
    <div>
      <Navbar />
      <main className="katalog-wrapper">
        <h2 className="katalog-heading" style={{ color: '#FFEA00', textAlign: 'center' }}>
          ✨ Objev naši kolekci světelných aditiv
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
                    <h3 style={{ color: product.accent, fontSize: '1.8rem' }}>
  {product.name}
</h3>
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