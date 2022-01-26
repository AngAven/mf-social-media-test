import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function CardEducation({ state }) {
    const { facebook, linkedin, twitter } = state

    return (
        <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>
            {
                linkedin.education && linkedin.education.map((item) => (
                    <ListItem
                        alignItems="flex-start"
                        key={item.id}
                    >
                        <ListItemAvatar>
                            <Avatar alt={item.institute} src={item.logo} />
                        </ListItemAvatar>

                        <ListItemText
                            primary={
                                <Typography variant='h5' >{item.title}</Typography>}
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

                ))
            }
        </List>
    )
}