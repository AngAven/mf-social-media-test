import React from 'react'
import {Card, CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import {Paper} from '@mui/material'
import {InputBase} from '@mui/material'
import {IconButton} from '@mui/material'
import {Divider} from '@mui/material'
import SearchIcon from '@material-ui/icons/Search'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import {Box} from '@mui/material'

import '../styles/components/DashboardTwitter.scss'

const DashboardTwitter = () => {
  return (
    <div className={"twitter-chunk"}>
      <div className={"search"}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="#RemoteJob @SYSEGROUP technologist"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </div>

      <div className={"content"}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="body2" fontSize={"1.6rem"}>
              SYSE <br/>
              <strong>@SYSEGROUP</strong> <br/>
              5h <br/>
              Woman <strong>technologist</strong> Are you looking for a remote job?
              Apply today. Send your CV to
              Envelope with downwards arrow abovetalentacquisition@sysegroup.com

              #AdministrativeAssistant <strong>#RemoteJob</strong> #JobOpportunity
              <br />
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" fontSize={"1.6rem"}>
              SYSE <br/>
              <strong>@SYSEGROUP</strong> <br/>
              5h <br/>
              Woman <strong>technologist</strong> you looking for a remote job?
              Apply today. Send your CV to
              Envelope with downwards arrow abovetalentacquisition@sysegroup.com

              #AdministrativeAssistant <strong>#RemoteJob</strong> #JobOpportunity
              <br />
            </Typography>
          </CardContent>
          {/*<CardActions>*/}
          {/*  <Button size="small">Learn More</Button>*/}
          {/*</CardActions>*/}
        </Card>
      </div>

      <div className={"logo-dashboard-card"}>
        <img src="https://raw.githubusercontent.com/AngAven/mf-social-media-test/bbc084e1fb1cb40b2ec3033efbf34910a47b74af/public/icons/tw-icon.svg" alt="twitter-logo"/>
      </div>
    </div>
  )
}

export default DashboardTwitter
