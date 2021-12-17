import * as React from 'react';
import MessageIcon from '@mui/icons-material/MarkunreadOutlined';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';


const ProfileIcons = () => {
    return (

        <div>
            <ul>
                <li>
                    <CallIcon/>+1 519 616 1523
                </li>
                <li>
                    <MessageIcon /> ing.alejadiaz@gmail.com
                </li>
                <li>
                    <LanguageIcon /> alejandradiaz.com
                </li>
                <li>
                    <LinkIcon /> @alejandradiaz
                </li>
            </ul>

        </div>
    );
}

export default ProfileIcons;
