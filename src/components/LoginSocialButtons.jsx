import React from 'react';
import '../styles/pages/Login.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function LoginSocialButtons() {
    return (
        <Grid marginBottom={'14px'}>

            <Link to="/authLinkedin">
                <button type="submit"  className="social-button login-button-linkedin" >
                    <LinkedInIcon fontSize='large' />
                </button>
            </Link>
            <Link to="/authFacebook">
                <button type="submit"  className="social-button login-button-facebook">
                    <FacebookIcon fontSize='large' />
                </button>
            </Link>
            <button type="submit"  className="social-button login-button-twitter">
                <TwitterIcon fontSize='large'/>
            </button>
        </Grid>

    )
};