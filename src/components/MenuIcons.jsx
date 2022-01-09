import * as React from 'react';
import MessageIcon from '@mui/icons-material/MarkunreadOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import JobsIcon from '@mui/icons-material/WorkOutlineOutlined';
import IntegrationIcon from '@mui/icons-material/AppRegistrationOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
0
export default function MenuIcons() {
    return (
        <div className="navbar-right">

            <ul className='ul-header' >
                <li className="navbar-email">email@example.com</li>
                <li>
                    <Tooltip title="Message">
                        <IconButton size="large">
                            <MessageIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ bgcolor: "var(--white)" }} size="large">
                            <NotificationsIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Jobs">
                        <IconButton size="large">
                            <JobsIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Integration">
                        <IconButton size="large">
                            <IntegrationIcon />
                        </IconButton>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Account settings">
                        <IconButton onClick={handleClick}>
                            <Avatar>A</Avatar>
                        </IconButton>
                    </Tooltip>
                </li>
            </ul>
        </div>
    );
}


