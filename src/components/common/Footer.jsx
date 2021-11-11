import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './Copyright'
import Link from 'next/link'

const Footer = ({home}) => {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            {!home && <Link passHref href="/">
              <h2>
                &larr; Go back to Homepage
              </h2>
            </Link>}
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}

export default Footer;