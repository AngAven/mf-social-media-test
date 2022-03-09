import React, { useContext, useState } from 'react'
import AppContext from '@context/AppContext'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, fab)

const ListWorks = () => {
  const { state } = useContext(AppContext)
  const { currentObject } = state
  const [expanded, setExpanded] = React.useState(false)

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }))

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const iconEvaluation = (icon) => {
    switch (icon.toLowerCase()) {
      case 'html':
        return <FontAwesomeIcon icon={['fab', 'html5']} />
      case 'css':
        return <FontAwesomeIcon icon={['fab', 'css3-alt']} />
      case 'javascript':
        return <FontAwesomeIcon icon={['fab', 'js']} />
      case 'react':
        return <FontAwesomeIcon icon={['fab', 'react']} />
      case 'docker':
        return <FontAwesomeIcon icon={['fab', 'docker']} />
      case 'angular':
        return <FontAwesomeIcon icon={['fab', 'angular']} />
      case 'java':
        return <FontAwesomeIcon icon={['fab', 'java']} />
      case 'linux':
        return <FontAwesomeIcon icon={['fab', 'linux']} />
      case 'figma':
        return <FontAwesomeIcon icon={['fab', 'figma']} />
      default:
        return <FontAwesomeIcon icon={['fas', 'code']} />
    }
  }

  return (
    <>

      {currentObject.works && currentObject.works.map((work, i) => {
        return (
          <Accordion
            key={work.id}
            expanded={expanded === 'panel' + i}
            onChange={handleChange('panel' + i)}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '30%', flexShrink: 0 }} variant='h6'>
                {work.company}
              </Typography>
              <Typography sx={{ width: '10%', flexShrink: 0 }} variant='h6' >
                {work.current && (<FontAwesomeIcon icon={['fas', 'check']} color='lightgreen' />)}
              </Typography>
              <Typography sx={{ width: '30%', flexShrink: 0 }} >
                {work.time_period}
              </Typography>
              <Typography sx={{ width: '30%', color: 'text.secondary' }} variant='h6'>
                {work.position}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h6'>
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
                {work.habilities.map((skill, i) => {
                  let icon

                  return (
                    <ListItem key={i}>

                      <Chip
                        size="small"
                        variant="outlined"
                        color="primary"
                        icon={iconEvaluation(skill)}
                        label={skill}
                      />
                    </ListItem>
                  )
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
