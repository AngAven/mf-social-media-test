import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { ListItemIcon } from '@material-ui/core'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (fbdata) => {
            if (fbdata.id == '1') {
                return yellow[700]
            }
            return blue[500]
        },
    }
})

export default function CardBasicInfo({ fbdata }) {
    const classes = useStyles(fbdata)

    const menuItems = [
        {
            text: 'Email',
            icon: <EmailIcon color="primary" style={{ fontSize: 30 }} />,
        },
        {
            text: 'Birthday',
            icon: <CakeIcon color="primary" style={{ fontSize: 30 }} />,
        },
        {
            text: 'Country',
            icon: <TwitterIcon color="primary" style={{ fontSize: 30 }} />,
        },
        {
            text: 'Language',
            icon: <LanguageIcon color="primary" style={{ fontSize: 30 }} />,
        }
    ]

    return (
        <div>
            <Card elevation={1}>
                <CardContent>
                    <Typography variant='h4'>
                        {fbdata.name}
                    </Typography>
                    <List>
                        {
                            menuItems.map(item => (
                                <ListItem
                                    button
                                    key={item.text}
                                    onClick={() => {
                                        history.push(item.path)
                                    }}
                                    className={location.pathname === item.path ? classes.active : null}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{ fontSize: '1.7rem' }} />
                                </ListItem>
                            ))
                        }
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}