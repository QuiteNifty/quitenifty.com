// Libs
import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
// Styles
import { rhythm } from '../../utils/typography';
import { bp } from '../theme';
// Paths
import logo from './logo-white.png';

const H1 = styled.h1`
  margin: ${rhythm(1)} 0;
  text-align: center;
`;

const HeaderLink = ({ children, className }) => (
  <Link className={className} to="/">
    {children}
  </Link>
);
const StyledLink = styled(HeaderLink)`
  display: block;
`;

const Logo = styled.img`
  margin: 0;
  height: 15vh;
  vertical-align: middle;

  @media (max-width: ${bp.narrowTiny}) {
    height: 10vh;
  }
`;

const PartialTitle = styled.span`
  position: relative;
  z-index: 2;
  vertical-align: middle;
`;
const Quite = PartialTitle.extend`
  margin-right: -2rem;
`;
const Nifty = PartialTitle.extend`
  margin-left: -2rem;
`;

const Header = ({ title, url }) => (
  <H1>
    <StyledLink>
      <Quite>Quite</Quite>
      <Logo src={logo} alt="" />
      <Nifty>Nifty</Nifty>
    </StyledLink>
  </H1>
);

export default Header;
