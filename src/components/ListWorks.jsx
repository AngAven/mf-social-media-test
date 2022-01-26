import React, {useContext, useState, useEffect} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@mui/icons-material/School'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import InterestsIcon from '@mui/icons-material/Interests'
import CardInterest from './CardInterest'
import ShortTextIcon from '@mui/icons-material/ShortText'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandLess from '@material-ui/icons/ExpandLess'
import Collapse from '@material-ui/core/Collapse'
import StarBorder from '@material-ui/icons/StarBorder'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AppContext from '@context/AppContext'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const ListWorks = () => {
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state
  const [works, setWorks] = useState([])
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }


  return (
    <List
      sx={{width: '100%', bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Historical
      //   </ListSubheader>
      // }
    >
      {
        facebook.works && facebook.works.map(work => {
          const title = `${work.company} - ${work.position}`
          return (
            <>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <WorkIcon/>
                </ListItemIcon>
                <ListItemText sx={{}} primary={work.company} secondary={work.position}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <ShortTextIcon/>
                    </ListItemIcon>
                    <ListItemText primary={work.description}/>
                  </ListItemButton>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <CalendarTodayIcon/>
                    </ListItemIcon>
                    <ListItemText primary={work.time_period}/>
                  </ListItemButton>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <LocationOnIcon/>
                    </ListItemIcon>
                    <ListItemText primary={work.city}/>
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )
        })
      }

    </List>
  )
}

export default ListWorks
