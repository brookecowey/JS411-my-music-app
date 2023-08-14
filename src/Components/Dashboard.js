import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MUISwitch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Switch from "./Switch"
import Slider from "./Slider"
import Select from "./Select"

export default function BasicCard() {
  return (
    <div style = {{display: "flex", gap: "15px", zjustifyContent: "center"}}>
   <Switch />

   <Slider />

   <Select />
      
    </div>

  );

}
