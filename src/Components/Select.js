import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

export default function MySelect() {
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
    <Select sx = {{width: "200px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
  </CardContent>
</Card>
    </div>
  )
}