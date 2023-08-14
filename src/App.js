import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import MenuBar from './Components/MenuBar';
import Dashboard from './Components/Dashboard';

export function App() {
 
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <div>
      <MenuBar />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Password"
        />
        <Button variant="contained">Login</Button>
        <Dashboard />
      </div>
    </Box>
    
  );
  
}

  export default App;
