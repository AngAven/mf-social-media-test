import React, { useContext, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/system';
import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from "@mui/material";
import AppContext from '@context/AppContext'
import { styled } from '@mui/material/styles';

export default function CardFollows() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state

    const [selectedIndex,setSelectedIndex] = useState(1)

    const followItems = [
        {
          id: "3",
          socialmedia: "facebook",
          following: <>{facebook.follow_people}</>,
          followers: <>{facebook.followers}</>,
          icon:<FacebookIcon color="primary" style={{ fontSize: 35 }}/>
        },
        {
            id: "2",
            socialmedia: "twitter",
            following: <>{twitter.follow_people}</>,
            followers: <>{twitter.followers}</>,
            icon:<TwitterIcon color="primary" style={{ fontSize: 35 }}/>
          }
        ,
        {
            id: "1",
            socialmedia: "linkedin",
            following: <>{linkedin.follow_people}</>,
            followers: <>{linkedin.followers}</>,
            icon:<LinkedInIcon color="primary" style={{ fontSize: 35 }} />
          }
      ]

      const handleListItemClick = (event, id) => {
        setSelectedIndex(id);
      };

    const rules = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        bottom:0,
        height:140,
        justifyContent: 'center',
        alignItems: 'center',

        }

    const items ={
        flexDirection: 'column',
        alignItems: 'center',

    }

    return (
        <div>

        <Grid container spacing={8}>
            <Grid item xs={3}>
                <List xs={2}>
                    {followItems.map(item => (
                        <ListItemButton
                        key={item.id}
                        style={items}
                        md={5}
                        selected={selectedIndex == `${item.id}`}
                        onClick={(event) =>handleListItemClick(event,`${item.id}`)}>
                        {item.icon}
                        </ListItemButton>
                    ))}
                </List>
            </Grid>

            <Grid item xs={4} >
                <Paper style={rules} >
                    <Box >
                    <Typography sx={{padding:1, textAlign:'center'}} variant="h3">
                    {followItems[0].followers}</Typography>
                    <Typography sx={{padding:1, textAlign:'center'}} variant="h5">Followers</Typography>
                    </Box>
                </Paper>
             </Grid>
             <Grid item xs={4} >
                <Paper style={rules} >
                    <Box >
                    <Typography sx={{padding:1, textAlign:'center'}} variant="h3">
                        {followItems[0].following}</Typography>
                    <Typography sx={{padding:1, textAlign:'center'}} variant="h5">Following</Typography>
                    </Box>
                </Paper>
             </Grid>

        </Grid>

        </div>
    )
}