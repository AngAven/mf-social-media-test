import * as React from 'react';
import MessageIcon from '@mui/icons-material/MarkunreadOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import JobsIcon from '@mui/icons-material/WorkOutlineOutlined';
import IntegrationIcon from '@mui/icons-material/AppRegistrationOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

export default function AccessibilityTooltips() {
    return (
        <div>
            <Tooltip title="Message">
                <IconButton size="large">
                    <MessageIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
                <IconButton size="large">
                    <NotificationsIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Jobs">
                <IconButton size="large">
                    <JobsIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Integration">
                <IconButton size="large">
                    <IntegrationIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick}>
                    <Avatar>M</Avatar>
                </IconButton>
            </Tooltip>
        </div>
    );
}


