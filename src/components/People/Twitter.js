// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import IconData from '../../img/twitter.svg';
import { color } from '../theme';
import { rhythm } from '../../utils/typography';
// Componenets
import { ScreenReaderSpan, SimpleLink } from '../styled';

const Label = styled(ScreenReaderSpan)``;
const iconStyle = {
    width: '1em',
    height: '1em',
    marginRight: rhythm(0.25),
    verticalAlign: 'text-bottom',
    color: color.darkgrey,
};
const Link = styled.a`
  ${SimpleLink}
`;

const Twitter = ({ twitter }) => {
  if (twitter) {
    return (
      <div>
        <Label>Twitter:</Label>
        <IconData style={iconStyle} />
        <Link href={twitter.url}>{twitter.handle}</Link>
      </div>
    );
  }
  return null;
};

export default Twitter;
