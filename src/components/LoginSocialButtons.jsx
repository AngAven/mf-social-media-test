import React from 'react';
import '../styles/pages/Login.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


export default function LoginSocialButtons() {
    return (
        <Grid >
            <Link to="/authFacebook">
                <button type="submit" className="social-button login-button-fb">
                    <FacebookIcon fontSize='large' />
                    <label className='label-button'>Facebook</label>
                </button>
            </Link>
            <Link to="/authTwitter">
                <button type="submit" className="social-button login-button-tw">
                    <TwitterIcon fontSize='large' />
                    <label className='label-button'>Twitter</label>
                </button>
            </Link>
            <Link to="/authLinkedin">
                <button type="submit" className='social-button login-button-lk' >
                    <div className='center-text' >
                        <div className='display-center' >
                            <LinkedInIcon sx={{ fontSize: 25 }} />
                        </div>
                        <div className='display-center'>
                            <label className='label-button'>LinkedIn</label>
                        </div>
                    </div>
                </button>
            </Link>
        </Grid>

    )
};