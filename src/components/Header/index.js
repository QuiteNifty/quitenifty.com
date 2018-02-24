import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import { rhythm } from '../../utils/typography';
import logo from './logo-white.png';

const headerStyles = {
  display: 'block'
};

const H1 = styled.h1`
  margin: ${rhythm(1)} 0;
  text-align: center;
`;

const Logo = styled.img`
  height: 15vh;
  margin-bottom: ${rhythm(0.5)};
`;

const Header = ({ title, url }) => (
  <H1>
    <Link to="/">
      <Logo src={logo} alt="" />
      <br />
      {title}
    </Link>
  </H1>
);

export default Header;
