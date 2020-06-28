// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import LinkIntact from '../../img/link-intact.svg';
import { color } from '../theme';
import { rhythm } from '../../utils/typography';
// Componenets
import { ScreenReaderSpan, SimpleLink } from '../styled';

const Container = styled.div``
const Label = styled(ScreenReaderSpan)``;
const iconStyle = {
  width: '1em',
  height: '1em',
  marginRight: rhythm(0.25),
  verticalAlign: 'text-bottom',
  color: color.darkgrey,
};
const Link = styled.a`
  ${SimpleLink};
`;

const LinkedIn = ({ linkedin }) => {
  if (linkedin) {
    return (
      <Container>
        <LinkIntact style={iconStyle}  fill={color.darkgrey} />
        <Link href={linkedin}>LinkedIn</Link>
      </Container>
    );
  }
  return null;
};

export default LinkedIn;
