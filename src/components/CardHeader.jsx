import React, { useState } from 'react';
import { Button, FormGroup } from '@mui/material';
import {Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function CardHeader({childToParent}) {
    const EditSwitch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
          borderRadius: 22 / 2,
          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
          },
          '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
              theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
          },
          '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
              theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: 'none',
          width: 16,
          height: 16,
          margin: 2,
        },
      }));

    /* const [editMode, setEditMode]=useState(false)*/
    const [checked, setChecked] = React.useState(false);
    const data=checked

    const handleChange = (event) => {
      setChecked(event.target.checked);
  }


    return(
    <Grid
    display='flex'
    justifyContent= 'flex-end'
    >
    <FormGroup
     >
    <FormControlLabel
        control={<EditSwitch sx={{ m: 1 }} />}
        label="Edit mode"
        labelPlacement='start'
        checked={checked}
        onChange={()=>childToParent(data),handleChange}
    />
    </FormGroup>
    <Button variant="contained" sx={{height:30 ,marginTop:1.5, marginLeft:3}}
    onClick={()=>setChecked(false)}
    endIcon={<AutoFixHighIcon />}> Preview
    </Button>
    </Grid>
  )
}
