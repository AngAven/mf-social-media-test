import React from 'react'
import "../styles/pages/stylesVideo.css"
import YoutubeEmbed from "@components/youtubeEmbed";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import { Button } from '@mui/material';


export default function Landing() {
    const handleChange = (event) => {
        setName(event.target.value);
      };

  return (
    <div >
    <Box >
      <YoutubeEmbed embedId="3guUoaxYYCE" />
      <Typography variant ="h1" color="primary"> Get early access now!</Typography>
      <TextField
      style={{marginLeft:50, width: 300}}
  id="outlined-name"
  label="E-mail Address"
  value={"sample@example.org"}
  onChange={handleChange}
/><Box>
<Button style={{marginLeft:110,marginTop:15, width: 100}}variant="contained" >Send</Button>
</Box>
<Box>
    <Link href="https://marketplace.visualstudio.com/items?itemName=GetHiredCodeTracker.gethired-code-tracker"><Typography variant ="h3" color="primary"> I want the plugin !!! </Typography></Link>
</Box>
    </Box>

    </div>);
}

    /* https://youtu.be/3guUoaxYYCE */




