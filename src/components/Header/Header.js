import PropTypes from 'prop-types';

import { Button, Container } from '@mui/material';

import { Logotype } from '../Logotype/Logotype'; 

import { HeaderContent, BtnGroup } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children }) => {
  return (
    <HeaderContent>
      <Container>
       <Logotype width={140} /> 
      </Container>
    </HeaderContent>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isLogged: PropTypes.bool,
  onClickLogin: PropTypes.func.isRequired,
  onClickSignup: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLogged: false,
  children: null,
};

export default Header;
