// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import iconData from '../../img/twitter.svg';
import { color } from '../theme';
import { rhythm } from '../../utils/typography';
// Componenets
import { ScreenReaderSpan, SimpleLink } from '../styled';

const Label = ScreenReaderSpan.extend``;
const Icon = styled.svg`
    width: 1em;
    height: 1em;
    margin-right: ${rhythm(0.25)};
    vertical-align: middle;
    color: ${color.darkgrey};
`;
const Link = styled.a`
  ${SimpleLink}
`;

const Twitter = ({ twitter }) => {
  if (twitter) {
    return (
      <div>
        <Label>Twitter:</Label>
        <Icon>
          <use xlinkHref={`#${iconData.id}`} />
        </Icon>
        <Link href={twitter.url}>{twitter.handle}</Link>
      </div>
    );
  }
  return null;
};

export default Twitter;
