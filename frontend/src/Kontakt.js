import React, { useEffect } from 'react';
import './Styles/Main.css';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/Kontakt.css';

const Kontakt = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/kontakt') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        {/* Úvodní sekce */}
        <div className="leader-section" style={{ marginTop: '200px' }}>
          <h2>Produkty vyvíjíme důmyslně</h2>
          <p>
            Na vývoj našich produktů vynakládáme stejné metody jako pro vývoj léčiv. Všechny naše produkty jsou nejen efektní a zdravotně nezávadným nýbrž i zdraví prospěšné.
          </p>
        </div>

        {/* Kontaktní informace */}
        <div className="contact-info">
          <h2>Kontaktní údaje</h2>
          <p>Email: info@noctura.cz</p>
          <p>Telefon: +420 777 123 456</p>
          <p>
            Instagram:{' '}
            <a href="https://instagram.com/noctura.cz" target="_blank" rel="noopener noreferrer">
              @noctura.cz
            </a>
          </p>
        </div>

        {/* Formulář pro zakázky */}
        <div className="inquiry-form">
          <h2>Poptejte svou zakázku</h2>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            Zaujal Vás náš produkt a rádi byste se stali trvalým, či snad jednorázovým odběratelem? 
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Jméno / Název firmy:</label>
              <input type="text" id="name" name="name" placeholder="Např. Martin Novák / Bar U Kocoura" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Váš email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telnumber">Telefon:</label>
              <input type="text" id="telnumber" name="telnumber" placeholder="Telefonní číslo" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Zpráva / Specifikace zakázky:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Popište, co hledáte nebo o co máte zájem – množství (kolik drinků byste chtěli rozsvítit)"
                required
              ></textarea>
              <label htmlFor="message">Po odeslání se obvykle ozveme do 24 hodin s konkrétní nabídkou.</label>
            </div>

            <button type="submit" className="submit-btn">Odeslat poptávku</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
