import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

export default function MySlider() {
  return (
    <div>
<Card sx = {{width:"300px", minHeight: "250px"}}>
  <CardContent>
    <Typography>
    Master Volume
    </Typography>
    <Typography>
      Overrides all other sound settings in this application.
    </Typography>
    <Slider
  aria-label="Temperature"
  defaultValue={30}
  // getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={110}
/>
  </CardContent>
</Card>
    </div>
  )
}
