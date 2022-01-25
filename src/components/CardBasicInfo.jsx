import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import ListItem from '@mui/material/ListItem'
import { List } from '@mui/material'


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

    const IconItems = [
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

                    <ListItem>
                        <IconButton ><EmailIcon color='primary' fontSize='large' /> </IconButton>
                        <Typography variant='h5' >{fbdata.email} </Typography>
                    </ListItem>
                    <ListItem>
                        <IconButton ><CakeIcon color='primary' fontSize='large' /> </IconButton>
                        <Typography variant='h5' >{fbdata.birthday} </Typography>
                    </ListItem>
                    <ListItem>
                        <IconButton ><TwitterIcon color='primary' fontSize='large' /> </IconButton>
                        <Typography variant='h5' >{fbdata.twitter} </Typography>
                    </ListItem>
                    <ListItem>
                        <IconButton ><LanguageIcon color='primary' fontSize='large' /> </IconButton>
                        <Typography variant='h5' >{fbdata.language} </Typography>
                    </ListItem>


                    {  /*  IconItems.map(item => (
                            <ListItem key={item.text}>
                                <IconButton >{item.icon} </IconButton>
                                <Typography variant='h5' >{item.text} </Typography>
                            </ListItem>
                        )) */
                    }
                </CardContent>
            </Card>
        </div>
    )
}