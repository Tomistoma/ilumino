import React from 'react';
import './Styles/Detail.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Button, Stack, CardMedia, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Red = () => {
  return (
    <div className="red-page">
      <Navbar />

      {/* Centrální layout */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h2" color="#B90E0A">
          Noctura Red
        </Typography>
        <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1 }}>
          Fluorescenční elixír, který mění svou barvu podle světla. Modrá ve dne, červená v noci.
        </Typography>
      </Box>

      <Box className="red-center-container">
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={6}>
          {/* Levý text */}
          <Box className="red-side-text" sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Efekt, který mění pravidla
            </Typography>
            <Typography sx={{ marginBottom: '50px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Na denním světle jemně modrý nádech. Pod UV světlem sytě rudý záblesk, který dominuje prostoru. Noctura Red je dvojitý zážitek v jedné kapce.
            </Typography>

            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Bez rušivých chutí
            </Typography>
            <Typography sx={{ marginBottom: '50px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Váš drink zůstane chuťově nedotčený. Noctura Red respektuje profil nápoje, který zdobí.
            </Typography>

            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Aktivace světlem
            </Typography>
            <Typography sx={{ marginBottom: '100px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Aplikujte, promíchejte, rozzařte. Efekt se projeví okamžitě pod UV – ale i bez něj má své kouzlo.
            </Typography>
          </Box>

          {/* Obrázek uprostřed */}
          <Box className="red-image-box">
            <CardMedia
              component="img"
              image="/yellow.png"
              alt="Noctura Red Effect"
              sx={{
                width: '1000px',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            />
          </Box>

          {/* Pravý text */}
          <Box className="red-side-text">
            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Bioaktivní elegance
            </Typography>
            <Typography sx={{ marginBottom: '80px', width: '80%' }} variant="body1" color="#ccc">
              <ul style={{ paddingLeft: '1.2rem', marginTop: '10px' }}>
                <li>Silný antioxidant (Phytotherapy Research, 2007)</li>
                <li>Podpora imunitního systému (Nutrition Journal, 2012)</li>
                <li>Přispívá k přirozené detoxikaci (J. of Medicinal Food, 2009)</li>
                <li>Podílí se na udržení zdravé mikroflóry (Nutrition Research and Practice, 2013)</li>
              </ul>
            </Typography>

            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Česká stopa, světová kvalita
            </Typography>
            <Typography sx={{ marginBottom: '50px' }} variant="body1" color="#ccc">
              Vyrobeno v ČR. Vhodné pro vegany. Bez alergenů a syntetických složek.
            </Typography>

            <Typography variant="h6" color="#B90E0A" gutterBottom>
              Kompozice
            </Typography>
            <Typography sx={{ marginBottom: '100px', width: '90%' }} variant="body1" color="#ccc">
              Noctura Red je přírodní směs extraktů z mikrořas, světlocitlivých pigmentů a stabilizačních složek. Vše bezpečné, efektivní a etické.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Doporučené použití */}
      <Box sx={{ maxWidth: '1000px', margin: '60px auto', px: 3 }}>
        <Typography variant="h4" color="#B90E0A" gutterBottom>
          Kde Noctura Red září nejvíc
        </Typography>

        <Typography variant="body1" color="#ccc" sx={{ mb: 3 }}>
          Noctura Red je zážitek, ne jen přísada. Změní obyčejný večer v magický. Funguje v nápojích i pro vizuální efekty – kdekoliv, kde se hraje se světlem.
        </Typography>

        <Typography variant="h6" color="#B90E0A" gutterBottom>
          Doporučené drinky:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', marginBottom: '30px' }}>
          <li>🥂 Sparkling Negroni – záblesk vášně v každé bublině</li>
          <li>🍒 Black Cherry Fizz – temně červený lesk v elegantní sklenici</li>
          <li>🔥 Spicy Rum Sour – zářící kontrast v ohnivém provedení</li>
          <li>🥀 Rosé Vermouth – světelný tanec ve skleničce</li>
        </ul>

        <Typography variant="h6" color="#B90E0A" gutterBottom>
          Ideální momenty:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>🌒 Noční lounge, ambientní bary a performativní scény</li>
          <li>💄 Atmosférické eventy s důrazem na detail</li>
          <li>🖤 Degustace, kde rozhoduje světlo i nálada</li>
          <li>🕯️ Privátní večery, kde každé světlo má význam</li>
        </ul>

        <Typography variant="h6" color="#B90E0A" gutterBottom>
          Složení:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>Vysoce purifikovaný rostlinný extrakt</li>
          <li>Voda</li>
          <li>Kyselina citrónová (regulátor pH)</li>
          <li>Stabilizační složky</li>
          <li>Přírodní aromatické komponenty</li>
        </ul>

        <Typography variant="p" color="#ccc" gutterBottom>
          Všechny složky odpovídají nařízení (ES) č. 1333/2008 o potravinářských přídatných látkách. Neobsahuje syntetická barviva, konzervanty ani živočišné složky.
        </Typography>

        <TableContainer component={Paper} sx={{ backgroundColor: '#111', color: 'white', marginTop: '50px', border: '1px solid #333' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#B90E0A', fontWeight: 'bold' }}>Objem</TableCell>
                <TableCell sx={{ color: '#B90E0A', fontWeight: 'bold' }}>Cena</TableCell>
                <TableCell sx={{ color: '#B90E0A', fontWeight: 'bold' }}>Cena za drink</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[['10 ml', '149 Kč', '2 kč/drink'], ['50 ml', '499 Kč', '2 kč/drink'], ['100 ml', '899 Kč', '2 kč/drink']].map(([volume, price, priceperunit], idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ color: '#ddd' }}>{volume}</TableCell>
                  <TableCell sx={{ color: '#ddd' }}>{price}</TableCell>
                  <TableCell sx={{ color: '#ddd' }}>{priceperunit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Spodní blok */}
<Box sx={{ marginTop: '30px', textAlign: 'center' }}>
  <Link to="/kontakt" style={{ textDecoration: 'none' }}>
    <Button variant="contained" sx={{ backgroundColor: '#B90E0A', color: '#000', fontWeight: 'bold' }}>
      Objednat nyní
    </Button>
  </Link>
</Box>

      <Footer />
    </div>
  );
};

export default Red;