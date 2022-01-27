import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from "@mui/material";
import AppContext from '@context/AppContext'

export default function CardFollows() {

    const { state } = useContext(AppContext)
    const { facebook, linkedin, twitter } = state
    const followItems = [
        {
          socialmedia: "facebook",
          following: <>{facebook.follow_people}</>,
          followers: <>{facebook.followers}</>,
          icon:<FacebookIcon color="primary" style={{ fontSize: 25 }}/>
        },
        {
            socialmedia: "twitter",
            following: <>{twitter.follow_people}</>,
            followers: <>{twitter.followers}</>,
            icon:<TwitterIcon color="primary" style={{ fontSize: 25 }}/>
          }
        ,
        {
            socialmedia: "linkedIn",
            following: <>{linkedin.follow_people}</>,
            followers: <>{linkedin.followers}</>,
            icon:<LinkedInIcon color="primary" style={{ fontSize: 25 }} />
          }
      ]

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        }

    const items ={
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <div>
        <List style={flexContainer}>
            {followItems.map(item => (
                <ListItem style={items}
                key={item.socialmedia}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={<Typography variant="h6">Following</Typography>}
                    secondary={item.following}>
                    </ListItemText>
                    <ListItemText
                    primary={<Typography variant="h6">Followers</Typography>}
                    secondary={item.followers}>
                    </ListItemText>
                </ListItem>
            ))}
        </List>

        </div>
    )
}