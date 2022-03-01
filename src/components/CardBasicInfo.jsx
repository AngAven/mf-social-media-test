import React, { useContext, useEffect, useState } from 'react'
import AppContext from '@context/AppContext'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import { yellow, blue } from '@material-ui/core/colors'
import EmailIcon from '@mui/icons-material/Email'
import CakeIcon from '@mui/icons-material/Cake'
import FlagIcon from '@mui/icons-material/Flag'
import LanguageIcon from '@mui/icons-material/Language'
import ListItem from '@mui/material/ListItem'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Box } from '@mui/material'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (facebook) => {
      if (facebook.id === '1') {
        return yellow[700]
      }
      return blue[500]
    },
    button: {
      display: 'none',
      visibility: 'hidden'
    }
  }
})




export default function CardBasicInfo({ selectedMode }) {
  const { state } = useContext(AppContext)
  const { currentObject, dashBoardSelected } = state
  const [clicked, setClicked] = useState({})


  const profileName =
    dashBoardSelected === "linkedin" ? currentObject.localizedFirstName + " " + currentObject.localizedLastName : currentObject.name;

  const handleClick = (i) => () => {
    console.log('i => ', i)
    setClicked(state => ({
      ...state,
      [i]: !state[i]
    }))
  }

  const IconItems = [
    {
      text:
        <>
          {
            currentObject &&
            (
              currentObject.email
                ? currentObject.email
                : ''
            )
          }
        </>,
      icon: <EmailIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{currentObject ? currentObject.birthday : ''}</>,
      icon: <CakeIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{currentObject ? currentObject.nationality : ''}</>,
      icon: <FlagIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{currentObject ? currentObject.languages : ''}</>,
      icon: <LanguageIcon color="primary" style={{ fontSize: 30 }} />,
    }
  ]

  return (
    <div>

      <Card elevation={1}>
        <CardContent>

          <Typography variant="h4" marginLeft={'1em'} >
            {currentObject ? profileName : ''}
          </Typography>

          {IconItems.map((item, i) => (
            <ListItem key={i}>
              {/* <IconButton >
              {/* <VisibilityIcon  sx={{display:'none'}} visibility='hidden' />
            </IconButton> */}
              <Box display={selectedMode ? 'inherit' : 'none'}>
                <IconButton
                  onClick={handleClick(i)}>
                  {clicked[i] ? <VisibilityIcon /> : <VisibilityOff />}
                </IconButton>
              </Box>
              <IconButton
                color={clicked[i] ? 'default' : 'secondary'}>
                {item.icon} </IconButton>
              <Typography variant="h5">{item.text} </Typography>
            </ListItem>
          ))
          }
        </CardContent>
      </Card>
    </div>
  )
}
