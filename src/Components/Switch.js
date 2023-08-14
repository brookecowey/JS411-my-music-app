import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

export default function MySwitch() {
  return (
    <div>
<Card sx = {{width:"300px", minHeight: "250px"}}>
  <CardContent>
    <Typography>
    Online Mode
    </Typography>
    <Typography>
      Is this application connected to the internet?
    </Typography>
    <Switch defaultChecked />
  </CardContent>
</Card>
    </div>
  )
}
