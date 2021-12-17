import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import logo from '@logos/logo.svg'
import MenuIcons from '/src/components/MenuIcons';
import '/src/styles/components/Header.scss';

/* import { Logotype } from '@master-c8/commons'; */

import { HeaderContent, BtnGroup } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children, route }) => {
  return (

    <HeaderContent>
      <Container>
        <div className="navbar-left">
          <Link to={route}>
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>
        </div>

        {!isLogged && (
          <BtnGroup>
            <Button variant="outlined" size="large" onClick={onClickLogin} type="button">
              Login
            </Button>
            <Button variant="contained" size="large" onClick={onClickSignup} type="button">
              Sign Up
            </Button>
          </BtnGroup>
        )}
        {isLogged && children}


        <div className="navbar-right">
          <ul>
            <li className="navbar-email">email@example.com</li>
            <li>
              <MenuIcons />
            </li>
            
          </ul>
        </div>

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
