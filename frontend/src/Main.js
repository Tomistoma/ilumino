import React from 'react';
import './Styles/Main.css';
import Navbar from './Navbar';
import Footer from './Footer';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: 'Noctura red',
    to: '/red',
    image: '/yellow.png',
    properties: "Temně rudý příslib, který v klubové tmě září jako zakázané znamení"
  },
  {
    name: 'Pulsewave',
    to: '/yellow',
    image: '/yellow.png',
    properties: " Zářivě žluté fluorescenční barvivo pro světlé dny a ještě světlejší noci.",
  },
  {
    name: 'Azzura blue',
    to: '/blue',
    image: '/green.png',
    properties: "Chladná modrá vlna, která se vynořuje z temnoty jako ozvěna skrytého oceánu."
  },
];

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content" style={{ backgroundColor: '#0f0f0f' }}>
      <Navbar />

      {/* Cover Section */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <img
          src="/cover1.gif"
          alt="Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        />
      </Box>

      {/* Emotional Intro Section */}
      <Box
        sx={{
          backgroundColor: '#111',
          px: { xs: 3, md: 8 },
          py: 10,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: '#FFE135', fontWeight: 'bold', mb: 3 }}>
          Osviťe svůj zážitek
        </Typography>
        <Typography variant="h6" sx={{ color: '#ccc', maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}>
Naše světelné esence nejsou dekorace – jsou zážitek. Vytvářejí okamžik, na který si hosté vzpomenou. Kapky, které za tmy ožijí pod UV světlem, přitáhnou pozornost, vytvoří atmosféru a přemění obyčejný drink ve wow efekt. A vy? Získáte odlišení, fotogenický zážitek a důvod, proč se host vrátí.
        </Typography>
      </Box>

      {/* Product Section */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #0f0f0f, #1a1a1a)',
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#e4e500',
            textShadow: '0 0 10px #e4e500',
            mb: 6,
          }}
        >
          Vyberte si svůj světelný podpis
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: '#121212',
                  border: '1px solid #2c2c2c',
                  borderRadius: '16px',
                  boxShadow: '0 0 15px rgba(228, 229, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 0 25px rgba(228, 229, 0, 0.35)',
                    borderColor: '#e4e500',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(product.to)}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: 250,
                      objectFit: 'cover',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#e4e500',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '0 0 6px #e4e500',
                      }}
                    >
                      {product.name}
                    </Typography>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' , margin: 0, paddingLeft: '1.2rem', color: '#ccc', listStyleType: 'circle', textAlign: "center" }}>                     
                      {product.properties}
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Main;