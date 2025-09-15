import React from 'react';
import './Styles/Detail.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  Button,
  CardMedia,
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';

const Yellow = () => {
  return (
    <div className="yellow-page">
      <Navbar />

      {/* Hero */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="#D4AF37" sx={{ fontSize: { xs: '2rem', md: '3rem' }, marginTop: "100px" }}>
            Pulsewave
          </Typography>
          <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1, px: { xs: 2, md: 0 } }}>
            Zářivě žluté fluorescenční barvivo pro světlejší a zářivější noci.
          </Typography>
        </Container>
      </Box>

      {/* Main section */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left text */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="h6" color="#D4AF37" gutterBottom sx={{ mt: { xs: 0, md: 2 } }}>
                Vyzařující intenzita
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 6 } }}>
                Pulsewave reaguje s UV světlem s jemností a vysokou intenzitou. Ve světlých nápojích vytváří teplý zlatavý lesk, který oživí každou sklenku.
              </Typography>

              <Typography variant="h6" color="#D4AF37" gutterBottom>
                Chuťově neutrální
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                Neutrální chuťová stopa. Pulsewave nechá nápoj vyniknout takový, jaký je – jen s dotekem žluté záře.
              </Typography>

              <Typography variant="h6" color="#D4AF37" gutterBottom>
                Jednoduchost, která zazáří
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                Žlutá záře se dá kombinovat do nejrůznějších možností. Bude středem pozornosti jak jednodušších drinkových kombinací, tak i povznese složitější drinky s mnohými chutěmi.
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                image="/yellow.png"
                alt="Pulsewave Yellow Effect"
                sx={{
                  width: { xs: '100%', sm: '90%', md: '100%' },
                  maxWidth: 600,
                  objectFit: 'contain',
                  borderRadius: '16px',
                }}
              />
            </Box>
          </Grid>

          {/* Right text */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'left', md: 'left' } }}>
              <Typography variant="h6" color="#D4AF37" gutterBottom>
                Více než záře
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                <ul style={{ paddingLeft: '1.2rem', color: '#ccc', margin: 0 }}>
                  <li>Podílí se na energetickém metabolismu (Annual Review of Nutrition, 2001)</li>
                  <li>Působí jako antioxidant a chrání buňky před oxidačním stresem (Free Radical Biology & Medicine, 1995)</li>
                  <li>Podporuje zdraví pokožky a očí (Journal of Nutritional Science & Vitaminology, 2003)</li>
                </ul>
              </Typography>

              <Typography variant="h6" color="#D4AF37" gutterBottom>
                Český původ, globální kvalita
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                Vyvinuto v ČR. Bez živočišných složek či syntetických barviv.
              </Typography>

              <Typography variant="h6" color="#D4AF37" gutterBottom>
                Kompozice
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                Vysoce purifikovaný přírodní extrakt, voda.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Recommendations & usage */}
      <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 } }}>
        <Typography variant="h4" color="#D4AF37" gutterBottom sx={{ textAlign: 'center' }}>
          Kam Pulsewave sedí nejlépe
        </Typography>

        <Typography variant="body1" color="#ccc" sx={{ mb: 3, textAlign: 'center', px: { xs: 2, md: 6 } }}>
          Pulsewave se díky své zlaté záři hodí do jednodušších, citrusovějších koktejlů s ostřejšími aromaty.
        </Typography>

        <Typography variant="h6" color="#D4AF37" gutterBottom sx={{ mt: 4 }}>
          Doporučené drinky:
        </Typography>
        <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
          <li>🍯 Medový spritz s citronem a šalvějí</li>
          <li>🍹 Tonik s grepem a tymiánem</li>
          <li>🍍 Ananasový fizz s limetkou</li>
          <li>🍑 Broskvový mocktail s mátou</li>
        </Box>

        <Typography variant="h6" color="#D4AF37" gutterBottom sx={{ mt: 2 }}>
          Ideální atmosféra:
        </Typography>
        <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
          <li>✨ Noční terasy, chill-out zóny a pool party</li>
          <li>🎷 Jazzové večery a rooftop bary</li>
          <li>🧘‍♀️ Lounge s ambientním podsvícením</li>
          <li>🎥 Umělecké eventy, fotografie a showreely</li>
        </Box>

        <Typography variant="body2" color="#888" sx={{ textAlign: 'center' }}>
          Všechny složky odpovídají nařízení (ES) č. 1333/2008. Bez živočišných složek, konzervantů či syntetických barviv.
        </Typography>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link to="/kontakt" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#B90E0A',
                color: '#000',
                fontWeight: 'bold',
                px: 3,
                py: 1.25,
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Objednat nyní
            </Button>
          </Link>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Yellow;
