import * as React from 'react';
import MessageIcon from '@mui/icons-material/MarkunreadOutlined';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ProfileIcons = () => {
    return (

        <div>
            <ul>
                <li>
                    <CallIcon />
                </li>
                <li>
                    <MessageIcon />
                </li>
                <li>
                    <LanguageIcon />
                </li>
                <li>
                    <LinkIcon />
                </li>
            </ul>

        </div>
    );
}

export default ProfileIcons;
