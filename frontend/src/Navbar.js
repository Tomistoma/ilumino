import React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'Katalog', icon: <ShoppingCartIcon />, href: '/katalog' },
    { text: 'Contacts', icon: <ContactMailIcon />, href: '/kontakt' },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: '60vw',
        height: '100%',
        backgroundColor: '#1e1e1e',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <Box>
        <Typography
          variant="h5"
          align="center"
          sx={{
            marginBottom: 4,
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Menu
        </Typography>
        <List>
          {menuItems.map(({ text, icon, href }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={href}>
                <ListItemIcon sx={{ color: '#e4e500' }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat, sans-serif',
                    align: 'left',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 'fit-content',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        zIndex: 1300,
      }}
    >
      {/* Logo vlevo */}
      <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: '100px', objectFit: 'contain' }}
        />
      </Box>

      {/* Ikona menu vpravo */}
      <IconButton onClick={handleToggle} sx={{ color: '#e4e500', padding: '50px', paddingTop: '100px' }}>
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer panel */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={600}
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            width: '60vw',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Navbar;
