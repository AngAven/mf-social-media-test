import React from 'react';
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Linkedin from '@material-ui/icons/Linkedin'
import Web from '@material-ui/icons/Web'
import LeftArrow from '@mui/icons-material/ArrowCircleLeftSharp'
import '../styles/components/LateralMenu.scss';

const LateralMenu = () => {
	return (
		<div className="LateralMenu">
			<ul className="icons">
                <li className="Dash">
					<a href="/dashboard"><Web className="icon"/><br/>Dashboard</a>
				</li>
                <li className="fb">

					<a href="/dashboard"> <Facebook className="icon"/><br/>Facebook</a>
				</li>
                <li className="tw">
					<a href="/dashboard"><Twitter className="icon"/><br/>Twitter</a>
				</li>
                <li className="lk">
					<a href="/dashboard"><Linkedin className="icon" /><br/>Linkedin</a>
				</li>
            </ul>
            <LeftArrow className="leftArrow" />
		</div>
	);
}

export default LateralMenu;
