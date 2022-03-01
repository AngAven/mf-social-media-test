import React, { useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import FormDialog from '@components/FormDialog'


export default function CardEducation() {
  const { state } = useContext(AppContext)
  const { currentObject, dashBoardSelected } = state
  const [selectedMode, setSelectedMode] = useState(false)

  const educationData = () => {
    switch (dashBoardSelected) {
      case 'dashboard': return currentObject? currentObject.education : '';
      case 'facebook': return "";
      case 'linkedin': return "";
      case 'twitter': return "";
    }
  }

  return (
    <>
      {dashBoardSelected && educationData() && (

        dashBoardSelected === "linkedin" ?
          <Typography variant='h5' >
            {educationData()}
          </Typography>
          :
          <>
            <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>

              {/* Object.keys(currentObject).length > 0 && currentObject.education && currentObject.education.map((item) => (  */}
              {educationData().map((item) => (
                <ListItem
                  alignItems="flex-start"
                  key={item.id}
                >
                  <ListItemAvatar>
                    <Avatar alt={item.institute} src={item.logo} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Typography variant="h5">{item.title}</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="h6"
                          color="text.primary"
                        >
                          {item.institute} -
                        </Typography>
                        {item.time_period} - {item.country}
                      </React.Fragment>
                    }
                  >
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <div sx={{ mt: 5 }} >
              <FormDialog selectedMode={selectedMode} ></FormDialog>
            </div>

          </>

      )
      }
    </>
  )
}
