
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MessageIcon from '@mui/icons-material/MarkunreadOutlined';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

export default function ProfileIcons() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <Typography variant='h6' >+1 519 615 48 78</Typography>
      
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MessageIcon />
          </Avatar>
        </ListItemAvatar>
        <Typography variant='h6' >ing.alejadiaz@gmail.com</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LanguageIcon />
          </Avatar>
        </ListItemAvatar>
        <Typography variant='h6' >alejandradiaz.com</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <Typography variant='h6' >@alejandradiaz</Typography>
      </ListItem>
    </List>
  );
}

