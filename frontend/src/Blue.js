import React from 'react';
import './Styles/Detail.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import {
  Button,
  CardMedia,
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';

const Blue = () => {
  return (
    <div className="blue-page">
      <Navbar />

      {/* Optional top banner (Noctura Red) */}
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="#B90E0A" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Noctura Red
          </Typography>
          <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1, px: { xs: 2, md: 0 } }}>
            Červené fluorescenční barvivo pro temné večery plné vášně a pokušení.
          </Typography>
        </Container>
      </Box>

      {/* Main hero for Azzura Blue */}
      <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="#4CC9F0" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Azzura Blue
          </Typography>
          <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1, px: { xs: 2, md: 0 } }}>
            Světlé fluorescenční barvivo pro osvěžující drinky a večery s decentní atmosférou.
          </Typography>
        </Container>
      </Box>

      {/* Content grid */}
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
              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Osvěžující záře
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 6 } }}>
                Azzura Blue reaguje i na nejjemnější dotek UV světla. V nápoji vytváří světlý, až ledově modrý efekt. Neoslňuje, ale přitahuje.
              </Typography>

              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Hořké pokušení
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 6 } }}>
                Se silně hořkým aromatem se hodí do tvrdších a surovějších kombinací. Původně se izoluje z kůry břízy a lze tedy dobře kombinovat s různými bylinky a přírodními aromaty.
              </Typography>

              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Víc než jak ho znáte
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                Přirozeně se nachází v toniku, avšak Azzura Blue umožňuje modrý vibe nastavit i u jiných drinkových kombinací.
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                image="/white.png"
                alt="Azzura Blue Effect"
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
              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Azzura Blue – víc než světlo
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 6 } }}>
                <ul style={{ paddingLeft: '1.2rem', color: '#ccc', margin: 0 }}>
                  <li>Podporuje trávení (Phytomedicine, 2001)</li>
                  <li>Jemně stimuluje nervovou soustavu (The Merck Index, 14th ed.)</li>
                  <li>Pomáhá zmírnit svalové křeče (American Journal of Medicine, 2005)</li>
                  <li>Má přirozené fluorescenční vlastnosti (J. of Chemical Education, 1998)</li>
                  <li>Ve 3. světě se využívá pro boj s Malarii</li>
                </ul>
              </Typography>

              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Český původ, globální kvalita
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                Vyvinuto v ČR. Bez živočišných složek.
              </Typography>

              <Typography variant="h6" color="#4CC9F0" gutterBottom>
                Kompozice
              </Typography>
              <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                Vysoce purifikovaný extrakt s obsahem chininu, voda.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Recommendations & usage */}
      <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 } }}>
        <Typography variant="h4" color="#4CC9F0" gutterBottom sx={{ textAlign: 'center' }}>
          Kam Azzura Blue sedí nejlépe
        </Typography>

        <Typography variant="body1" color="#ccc" sx={{ mb: 3, textAlign: 'center', px: { xs: 2, md: 6 } }}>
          Azzura Blue se díky své modré barvě hodí do osvěžujících, hořkých surovějších koktejlů s přírodnějšími aromaty.
        </Typography>

        <Typography variant="h6" color="#4CC9F0" gutterBottom sx={{ mt: 4 }}>
          Doporučené drinky:
        </Typography>
        <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
          <li>🍋 Citrusový spritz s tonikem a rozmarýnem</li>
          <li>🌿 Bílý vermouth s ledem a limetou</li>
          <li>🫧 Nealko perlivý mocktail s grepem a mátou</li>
          <li>🍈 Gin fizz s kapkou citronového bitters</li>
        </Box>

        <Typography variant="h6" color="#4CC9F0" gutterBottom>
          Ideální atmosféra (night mode)
        </Typography>
        <Box component="ul" className="night-mode" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
          <li>🌌 Noční kluby s UV a neonovým osvětlením</li>
          <li>🍸 Cocktail &amp; rooftop bary s výhledem na město</li>
          <li>🎶 DJ sety a live music večery</li>
          <li>🔥 Party u bazénu s večerním nasvícením</li>
          <li>🎭 Performance &amp; art show s fluorescenčními prvky</li>
          <li>📸 After-dark fotografie &amp; videoprojekce</li>
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

export default Blue;
