import React from 'react';
import './Styles/Detail.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Button, Stack, CardMedia, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Blue = () => {
  return (
    <div className="blue-page">
      <Navbar />
      <Box textAlign="center" sx={{ mt: 6 }}>
  <Typography variant="h2" color="#B90E0A">
    Noctura Red
  </Typography>
  <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1 }}>
   Červené fluorescenční barvivo pro temné večery plné vášně a pokušení.
  </Typography>
</Box>
      {/* Centrální nadpis */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h2" color="#4CC9F0">
          Azzura Blue
        </Typography>
        <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1 }}>
          Světlé fluorescenční barvivo pro osvěžující drinky a tiché večery, které se blýsknou.
        </Typography>
      </Box>

      {/* Hlavní sekce */}
      <Box className="blue-center-container">
  <Stack direction="row" justifyContent="center" alignItems="center" spacing={6}>
    {/* Levý text */}
    <Box className="blue-side-text" sx={{ textAlign: 'right' }}>
      <Typography variant="h6" color="#4CC9F0" gutterBottom>
        Ledová záře v pohybu
      </Typography>
      <Typography sx={{ marginBottom: '75px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
        Azzura Blue reaguje i na nejjemnější dotek UV světla. V nápoji vytváří světlý, až ledově modrý efekt. Neoslňuje, ale přitahuje. Jemně a s jistotou.
      </Typography>

      <Typography variant="h6" color="#4CC9F0" gutterBottom>
        Chuť čerstvého vzduchu
      </Typography>
      <Typography sx={{ marginBottom: '50px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
        Nechává nápoj chutnat tak, jak má. Bez aromatu, bez pachuťí. Jako čistý tón mezi akordy. Ideální pro toniky, bílé koktejly, citrus a bylinky.
      </Typography>

      <Typography variant="h6" color="#4CC9F0" gutterBottom>
        Snadné jako ledová kapka
      </Typography>
      <Typography sx={{ marginBottom: '100px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
        Stačí pár kapek – rozsvítí se ti sklenka. Není potřeba míchat, odměřovat, rozmýšlet. Azzura Blue je intuitivní jako úsměv při prvním doušku.
      </Typography>
    </Box>
          {/* Obrázek */}
          <Box className="blue-image-box">
            <CardMedia
              component="img"
              image="/white.png"
              alt="Azzura Blue Effect"
              sx={{ width: '600px', maxWidth: '100%', objectFit: 'contain', borderRadius: '16px' }}
            />
          </Box>

          {/* Pravý text */}
          <Box className="blue-side-text">
            <Typography variant="h6" color="#4CC9F0" gutterBottom>
              Azzura Blue – víc než světlo
            </Typography>
            <Typography sx={{ marginBottom: '80px', width: '80%' }} variant="body1" color="#ccc">
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
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
            <Typography sx={{ marginBottom: '50px', width: '80%' }} variant="body1" color="#ccc">
              Vyvinuto v ČR. Bez barviv, konzervantů, živočišných složek. Elegantní, etické a funkční.
            </Typography>

            <Typography variant="h6" color="#4CC9F0" gutterBottom>
              Kompozice
            </Typography>
            <Typography sx={{ marginBottom: '100px', width: '90%' }} variant="body1" color="#ccc">
              Vysoce purifikovaný extrakt s obsahem chininu, voda.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Doporučení a použití */}
      <Box sx={{ maxWidth: '1000px', margin: '60px auto', px: 3 }}>
        <Typography variant="h4" color="#4CC9F0" gutterBottom>
          Kam Azzura Blue sedí nejlépe
        </Typography>

        <Typography variant="body1" color="#ccc" sx={{ mb: 3 }}>
          Nevtíravý efekt, který se nevnucuje – ale kdo ho vidí, ten nezapomene. Azzura Blue vynikne v nápojích, které jsou světlé, čisté, a nechávají barvu dýchat.
        </Typography>

        <Typography variant="h6" color="#4CC9F0" gutterBottom>
          Doporučené drinky:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', marginBottom: '30px' }}>
          <li>🍋 Citrusový spritz s tonikem a rozmarýnem</li>
          <li>🌿 Bílý vermouth s ledem a limetou</li>
          <li>🫧 Nealko perlivý mocktail s grepem a mátou</li>
          <li>🍈 Gin fizz s kapkou citronového bitters</li>
        </ul>

        <Typography variant="h6" color="#4CC9F0" gutterBottom>
          Ideální atmosféra:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>✨ Letní terasy, chill-out zóny a pool party</li>
          <li>🎷 Jazzové večery, rooftop bary</li>
          <li>🧘‍♀️ Klidné lounge s ambientním podsvícením</li>
          <li>🎥 Umělecké eventy, fotografie, showreely</li>
        </ul>

        <Typography variant="h6" color="#4CC9F0" gutterBottom>
          Složení:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>Vysoce purifikovaný přírodní extrakt s obsahem chininu</li>
          <li>Voda</li>
          <li>Kyselina citrónová</li>
          <li>Stabilizační složky</li>
          <li>Přírodní aroma</li>
        </ul>

        <Typography variant="body2" color="#888" gutterBottom>
          Všechny složky odpovídají nařízení (ES) č. 1333/2008. Bez živočišných složek, konzervantů či syntetických barviv.
        </Typography>

        {/* Tabulka cen */}
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: '#111', color: 'white', marginTop: '50px', border: '1px solid #333' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#4CC9F0', fontWeight: 'bold' }}>Objem</TableCell>
                <TableCell sx={{ color: '#4CC9F0', fontWeight: 'bold' }}>Cena</TableCell>
                <TableCell sx={{ color: '#4CC9F0', fontWeight: 'bold' }}>Cena za drink</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[['10 ml', '149 Kč', '2 Kč'], ['50 ml', '499 Kč', '2 Kč'], ['100 ml', '899 Kč', '2 Kč']].map(
                ([volume, price, perDrink], idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ color: '#ddd' }}>{volume}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{price}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{perDrink}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tlačítko */}
      {/* Spodní blok */}
<Box sx={{ marginTop: '30px', textAlign: 'center' }}>
  <Link to="/kontakt" style={{ textDecoration: 'none' }}>
    <Button variant="contained" sx={{ backgroundColor: '#B90E0A', color: '#000', fontWeight: 'bold' }}>
      Objednat nyní
    </Button>
  </Link>
</Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Blue;