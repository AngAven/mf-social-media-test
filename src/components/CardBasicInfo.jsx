import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import { yellow, blue } from '@material-ui/core/colors'
import EmailIcon from '@mui/icons-material/Email'
import CakeIcon from '@mui/icons-material/Cake'
import FlagIcon from '@mui/icons-material/Flag';
import LanguageIcon from '@mui/icons-material/Language'
import ListItem from '@mui/material/ListItem'


const useStyles = makeStyles({
  avatar: {
    backgroundColor: (facebook) => {
      if (facebook.id === '1') {
        return yellow[700]
      }
      return blue[500]
    },
  }
})

export default function CardBasicInfo() {
  const classes = useStyles(facebook)
  const { state } = useContext(AppContext)
  const { facebook, linkedin, twitter } = state
  const IconItems = [
    {
      text: <>{facebook.email}</>,
      icon: <EmailIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{facebook.birthday}</>,
      icon: <CakeIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{facebook.nationality}</>,
      icon: <FlagIcon color="primary" style={{ fontSize: 30 }} />,
    },
    {
      text: <>{facebook.languages}</>,
      icon: <LanguageIcon color="primary" style={{ fontSize: 30 }} />,
    }
  ]

  return (
    <div>

      <Card elevation={1}>
        <CardContent>
          <Typography variant="h4">
            {facebook.name}
          </Typography>

          {IconItems.map((item, i) => (
            <ListItem key={i}>
              <IconButton >{item.icon} </IconButton>
              <Typography variant='h5' >{item.text} </Typography>
            </ListItem>
          ))
          }
        </CardContent>
      </Card>
    </div>
  )
}
