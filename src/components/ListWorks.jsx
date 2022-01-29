import React, {useContext, useState, useEffect} from 'react'
import AppContext from '@context/AppContext'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FaceIcon from '@mui/icons-material/Face'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TagFacesIcon from '@mui/icons-material/TagFaces'

const ListWorks = () => {
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state
  const [expanded, setExpanded] = React.useState(false)

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));



  const [chipData, setChipData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ])


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      { facebook.works && facebook.works.map((work, i) => {
        return(
          <Accordion key={work.id} expanded={expanded === 'panel' + i} onChange={handleChange('panel' +i)} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {work.company}
              </Typography>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {work.time_period}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{work.position}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {work.description}
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  let icon;

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <ListItem key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </AccordionDetails>
          </Accordion>
        )
      })

      }
    </>
  )
}

export default ListWorks
