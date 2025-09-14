import React from 'react';
import './Styles/Detail.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button, Stack, CardMedia, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Yellow = () => {
  return (
    <div className="yellow-page">
      <Navbar />
      <Box textAlign="center" sx={{ mt: 6, marginTop: '200px' }}>
        <Typography variant="h2" color="#D4AF37">
          Solaris Yellow
        </Typography>
        <Typography variant="subtitle1" color="#ccc" sx={{ mt: 1 }}>
          Zářivě žluté fluorescenční barvivo pro světlé dny a ještě světlejší noci.
        </Typography>
      </Box>

      {/* Hlavní sekce */}
      <Box className="yellow-center-container">
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={6}>
          {/* Levý text */}
          <Box className="yellow-side-text" sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Sluneční jiskra v každé kapce
            </Typography>
            <Typography sx={{ marginBottom: '75px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Solaris Yellow reaguje s UV světlem s jemností a grácií. Ve světlých nápojích vytváří teplý zlatavý lesk, který oživí každou sklenku.
            </Typography>

            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Chuť sluneční čistoty
            </Typography>
            <Typography sx={{ marginBottom: '50px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Neutrální chuťová stopa, žádná pachuť. Solaris Yellow nechá nápoj vyniknout takový, jaký je – jen s dotekem slunečního světla.
            </Typography>

            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Jednoduchost, která zazáří
            </Typography>
            <Typography sx={{ marginBottom: '100px', width: '80%', marginLeft: '20%' }} variant="body1" color="#ccc">
              Bez nutnosti míchání či odměřování – stačí pár kapek a Solaris Yellow rozzáří každé doušky.
            </Typography>
          </Box>

          {/* Obrázek */}
          <Box className="yellow-image-box">
            <CardMedia
              component="img"
              image="/yellow.png"
              alt="Solaris Yellow Effect"
              sx={{ width: '600px', maxWidth: '100%', objectFit: 'contain', borderRadius: '16px' }}
            />
          </Box>

          {/* Pravý text */}
          <Box className="yellow-side-text">
            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Solaris Yellow – světlo v pohybu
            </Typography>
            <Typography sx={{ marginBottom: '80px', width: '80%' }} variant="body1" color="#ccc">
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
                <li>Podporuje vitalitu a přirozený metabolismus</li>
                <li>Má přirozené fluorescenční vlastnosti</li>
                <li>Vhodné i pro denní použití – jemné, ale viditelné</li>
              </ul>
            </Typography>

            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Český původ, globální kvalita
            </Typography>
            <Typography sx={{ marginBottom: '50px', width: '80%' }} variant="body1" color="#ccc">
              Vyvinuto v ČR. Bez konzervantů, živočišných složek či syntetických barviv. Elegantní, etické a funkční.
            </Typography>

            <Typography variant="h6" color="#D4AF37" gutterBottom>
              Kompozice
            </Typography>
            <Typography sx={{ marginBottom: '100px', width: '90%' }} variant="body1" color="#ccc">
              Vysoce purifikovaný přírodní extrakt, voda.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Doporučení a použití */}
      <Box sx={{ maxWidth: '1000px', margin: '60px auto', px: 3 }}>
        <Typography variant="h4" color="#D4AF37" gutterBottom>
          Kam Solaris Yellow sedí nejlépe
        </Typography>

        <Typography variant="body1" color="#ccc" sx={{ mb: 3 }}>
          Jemný zlatý efekt, který přitáhne pohledy, aniž by křičel. Ideální do světlých nápojů a denního světla.
        </Typography>

        <Typography variant="h6" color="#D4AF37" gutterBottom>
          Doporučené drinky:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', marginBottom: '30px' }}>
          <li>🍯 Medový spritz s citronem a šalvějí</li>
          <li>🍹 Tonik s grepem a tymiánem</li>
          <li>🍍 Ananasový fizz s limetkou</li>
          <li>🍑 Broskvový mocktail s mátou</li>
        </ul>

        <Typography variant="h6" color="#D4AF37" gutterBottom>
          Ideální atmosféra:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>🌞 Garden party a brunch</li>
          <li>📸 Letní focení a venkovní eventy</li>
          <li>🌿 Přírodní bary a bio festivaly</li>
          <li>🎶 Akustické večery a chill-out zóny</li>
        </ul>

        <Typography variant="h6" color="#D4AF37" gutterBottom>
          Složení:
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
          <li>Vysoce purifikovaný přírodní extrakt</li>
          <li>Voda</li>
          <li>Kyselina citrónová</li>
          <li>Stabilizační složky</li>
          <li>Přírodní aroma</li>
        </ul>

        <Typography variant="body2" color="#888" gutterBottom>
          Všechny složky odpovídají nařízení (ES) č. 1333/2008. Bez živočišných složek, konzervantů či syntetických barviv.
        </Typography>

        {/* Tabulka cen */}
        <TableContainer component={Paper} sx={{ backgroundColor: '#111', color: 'white', marginTop: '50px', border: '1px solid #333' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#D4AF37', fontWeight: 'bold' }}>Objem</TableCell>
                <TableCell sx={{ color: '#D4AF37', fontWeight: 'bold' }}>Cena</TableCell>
                <TableCell sx={{ color: '#D4AF37', fontWeight: 'bold' }}>Cena za drink</TableCell>
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

export default Yellow;
