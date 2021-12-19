import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import logo from '@logos/logo.svg'
import MenuIcons from '/src/components/MenuIcons';
import '/src/styles/components/Header.scss';

import { HeaderContent, BtnGroup } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children, route }) => {
  return (

    <HeaderContent>
      <Container >
        <div className="navbar-left">
          <Link to={route}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {!isLogged && (
          <div className="navbar-right">
            <Grid display={'flex'} gap={'1rem'} justifyContent={'end'} >
              <input type="submit" value="Sign up" className="sign-button" />
              <input type="submit" value="Login" className="log-button" />
            </Grid>
          </div>
        )}
        {isLogged &&
          (
            <MenuIcons />
          )
        }
      </Container>
    </HeaderContent>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isLogged: PropTypes.bool,
  onClickLogin: PropTypes.func.isRequired,
  onClickSignup: PropTypes.func.isRequired,
  route: PropTypes.string,
};

Header.defaultProps = {
  isLogged: false,
  children: null,
  route: '',
};

export default Header;
