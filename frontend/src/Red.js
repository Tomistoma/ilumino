import React from 'react';
import './Styles/Detail.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {
  Button,
  CardMedia,
  Box,
  Typography,
  Container,
  Grid,
  IconButton
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Red = () => {
  // Lock the page while under development
  const isUnderDevelopment = true;

  return (
    <div className="red-page" style={{ position: 'relative' }}>
      {/* Fixed notification bar (accessible + responsive) */}
      {isUnderDevelopment && (
        <Box
          role="status"
          aria-live="polite"
          sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'fit-content',
          borderRadius: '8px',
            zIndex: 1400,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(15,15,18,0.96)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'saturate(120%) blur(6px)',
                px: { xs: 2, md: 3 },
                py: { xs: 1.25, md: 1.5 },
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, md: 1.5 },
              }}
            >
              <InfoOutlinedIcon sx={{ color: '#B90E0A', flexShrink: 0 }} />
              <Typography variant="body1" sx={{ color: '#eaeaea', flex: 1 }}>
                <strong>Noctura Red</strong> je bohužel stále ve fázi vývoje. Jakmile bude k dispozici, dáme Vám vědět.
              </Typography>
              <Link to="/katalog" style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<ArrowBackIosNewIcon fontSize="small" />}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.22)',
                    color: '#eaeaea',
                    '&:hover': { borderColor: '#B90E0A', color: '#B90E0A' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Zpět do katalogu
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
      )}

      {/* Page shadow overlay (non-interactive) */}
      {isUnderDevelopment && (
        <Box
          aria-hidden
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            pointerEvents: 'none',
            background:
              'radial-gradient(1200px 600px at 50% 20%, rgba(0,0,0,0.35), rgba(0,0,0,0.68))',
            backdropFilter: 'blur(2px) saturate(70%)',
          }}
        />
      )}

      {/* Content wrapper (dim + non-clickable if locked) */}
      <Box
        sx={{
          pointerEvents: isUnderDevelopment ? 'none' : 'auto',
          filter: isUnderDevelopment ? 'saturate(85%)' : 'none',
        }}
      >
        <Navbar />

        {/* Spacer so content doesn’t hide under the fixed bar */}
        {isUnderDevelopment && <Box sx={{ height: { xs: 72, md: 80 } }} />}

        {/* Hero */}
        <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h2" color="#B90E0A" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Noctura Red
            </Typography>
            <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1, px: { xs: 2, md: 0 } }}>
              Fluorescenční elixír, který mění svou barvu podle světla. Modrá ve dne, červená v noci.
            </Typography>
          </Container>
        </Box>

        {/* Main content grid */}
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
                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Efekt, který mění pravidla
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                  Na denním světle jemně modrý nádech. Pod UV světlem sytě rudý záblesk, který dominuje prostoru. Noctura Red je dvojitý zážitek v jedné kapce.
                </Typography>

                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Bez rušivých chutí
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                  Váš drink zůstane chuťově nedotčený. Noctura Red respektuje profil nápoje, který zdobí.
                </Typography>

                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Aktivace světlem
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                  Aplikujte, promíchejte, rozzařte. Efekt se projeví okamžitě pod UV – ale i bez něj má své kouzlo.
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  image="/yellow.png"
                  alt="Noctura Red Effect"
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
                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Bioaktivní elegance
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 6 } }}>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Silný antioxidant (Phytotherapy Research, 2007)</li>
                    <li>Podpora imunitního systému (Nutrition Journal, 2012)</li>
                    <li>Přispívá k přirozené detoxikaci (J. of Medicinal Food, 2009)</li>
                    <li>Podílí se na udržení zdravé mikroflóry (Nutrition Research and Practice, 2013)</li>
                  </ul>
                </Typography>

                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Česká stopa, světová kvalita
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 3, md: 5 } }}>
                  Vyrobeno v ČR. Vhodné pro vegany. Bez alergenů a syntetických složek.
                </Typography>

                <Typography variant="h6" color="#B90E0A" gutterBottom>
                  Kompozice
                </Typography>
                <Typography variant="body1" color="#ccc" sx={{ mb: { xs: 4, md: 10 } }}>
                  Noctura Red je přírodní směs extraktů z mikrořas, světlocitlivých pigmentů a stabilizačních složek. Vše bezpečné, efektivní a etické.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Recommendations */}
        <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 } }}>
          <Typography variant="h4" color="#B90E0A" gutterBottom sx={{ textAlign: 'center' }}>
            Kde Noctura Red září nejvíc
          </Typography>

          <Typography variant="body1" color="#ccc" sx={{ mb: 3, textAlign: 'center', px: { xs: 2, md: 6 } }}>
            Noctura Red je zážitek, ne jen přísada. Změní obyčejný večer v magický. Funguje v nápojích i pro vizuální efekty – kdekoliv, kde se hraje se světlem.
          </Typography>

          <Typography variant="h6" color="#B90E0A" gutterBottom sx={{ mt: 4 }}>
            Doporučené drinky:
          </Typography>
          <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
            <li>🥂 Sparkling Negroni – záblesk vášně v každé bublině</li>
            <li>🍒 Black Cherry Fizz – temně červený lesk v elegantní sklenici</li>
            <li>🔥 Spicy Rum Sour – zářící kontrast v ohnivém provedení</li>
            <li>🥀 Rosé Vermouth – světelný tanec ve skleničce</li>
          </Box>

          <Typography variant="h6" color="#B90E0A" gutterBottom>
            Ideální momenty:
          </Typography>
          <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
            <li>🌒 Noční lounge, ambientní bary a performativní scény</li>
            <li>💄 Atmosférické eventy s důrazem na detail</li>
            <li>🖤 Degustace, kde rozhoduje světlo i nálada</li>
            <li>🕯️ Privátní večery, kde každé světlo má význam</li>
          </Box>

          <Typography variant="h6" color="#B90E0A" gutterBottom>
            Složení:
          </Typography>
          <Box component="ul" sx={{ pl: '1.2rem', color: '#ccc', mb: 3 }}>
            <li>Vysoce purifikovaný rostlinný extrakt</li>
            <li>Voda</li>
            <li>Kyselina citrónová (regulátor pH)</li>
            <li>Stabilizační složky</li>
            <li>Přírodní aromatické komponenty</li>
          </Box>

          <Typography variant="body2" color="#888" sx={{ textAlign: 'center' }}>
            Všechny složky odpovídají nařízení (ES) č. 1333/2008 o potravinářských přídatných látkách. Neobsahuje syntetická barviva, konzervanty ani živočišné složky.
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
      </Box>
    </div>
  );
};

export default Red;
