import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for routing

function FinHeader() {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button component={Link} to="/mkpayment" color="inherit">
              Make Payment
            </Button>
            <Button component={Link} to="/getstarted" color="inherit">
              Payment Plans
            </Button>
            <Button component={Link} to="/transactions" color="inherit">
              Transactions
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default FinHeader;
