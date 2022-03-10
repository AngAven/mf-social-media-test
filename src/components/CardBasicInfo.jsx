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
import WcIcon from '@mui/icons-material/Wc';
import WorkIcon from '@mui/icons-material/Work';
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
  const [unseen, setUnseen] = useState(true)
  const [clicked, setClicked] = useState({})

  const profileName =
    dashBoardSelected === "linkedin" ? currentObject.localizedFirstName +  " " + currentObject.localizedLastName : currentObject.name;

  const profileLocation =
    dashBoardSelected === "twitter" ? currentObject.location : currentObject.nationality;

  const handleClick = (i) => () => {
    setClicked(state => ({
      ...state,
      [i]: !state[i]
    })),
      setUnseen(state => ({
        ...state,
        [i]: !state[i]
      }))
  }
  {console.log("**")}
  {console.log(dashBoardSelected)}/*
  {console.log(currentObject.twitter.email)} */
  const IconItems = [
    currentObject.email ?
      {
        text: <>{currentObject ? currentObject.email : ''} </>,
        icon: <EmailIcon color="primary" style={{ fontSize: 30 }} />,
      } : '',
    currentObject.birthday ?
      {
        text: <>{currentObject ? currentObject.birthday : ''}</>,
        icon: <CakeIcon color="primary" style={{ fontSize: 30 }} />,
      } : '',
    currentObject.description ?
      {
        text: <>{currentObject ? currentObject.description : ''}</>,
        icon: <WorkIcon color="primary" style={{ fontSize: 30 }} />,
      } : '',
    profileLocation ?
      {
        text: <>{profileLocation}</>,
        icon: <FlagIcon color="primary" style={{ fontSize: 30 }} />,
      } : '',
    currentObject.languages ?
      {
        text: <>{currentObject ? currentObject.languages : ''}</>,
        icon: <LanguageIcon color="primary" style={{ fontSize: 30 }} />,
      } : '',
    currentObject.gender ?
      {
        text: <>{currentObject ? currentObject.gender : ''}</>,
        icon: <WcIcon color="primary" style={{ fontSize: 30 }} />,
      } : ''
  ]

  return (

    <div>
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h4" marginLeft={'1em'} >
            {currentObject ? profileName : ''}
          </Typography>


























          {IconItems.map((item, i) => (
            item !== '' ?
              <ListItem key={i}>
                <Box display={selectedMode ? 'inherit' : 'none'}>
                  <IconButton
                    onClick={handleClick(i)}>
                    {clicked[i]
                      ? (<VisibilityOff />)
                      : (<VisibilityIcon />)}
                  </IconButton>
                </Box>
                {unseen[i]
                  ? <>
                  </>
                  : <>
                    <IconButton
                      style={{ color: '#616' }}
                      color={clicked[i] ? 'default' : 'secondary'}>
                      {item.icon} </IconButton>
                    <Typography variant="h5">{item.text} </Typography>
                  </>
                }

              </ListItem> : ''
          ))
          }
        </CardContent>
      </Card>
    </div>
  )
}
