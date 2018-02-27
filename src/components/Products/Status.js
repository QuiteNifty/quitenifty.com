// Libs
import React from 'react';
import styled from 'styled-components';
// Components
import { SimpleLink } from '../styled';
// Styles
import { color } from '../theme';
import { rhythm } from '../../utils/typography';
import linkIntact from '../../img/link-intact.svg';
import beaker from '../../img/beaker.svg';
// Paths
const imgPath = require.context('../../img', true);

const Icon = styled.svg`
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 ${rhythm(0.25)} 0 0;
  vertical-align: middle;

  > use {
    fill: ${color.darkgrey};
  }
`;

const Text = styled.span`
  color: ${color.darkgrey};
`;

const UrlText = Text.extend`
  ${SimpleLink}
`;

const Status = ({ product }) => {
  if (product.url) {
    return (
      <div>
        <Icon>
          <use xlinkHref={`#${linkIntact.id}`} />
        </Icon>
        <UrlText>{product.url}</UrlText>
      </div>
    );
  } else {
    return (
      <div>
        <Icon>
          <use xlinkHref={`#${beaker.id}`} />
        </Icon>
        <Text>{product.status}</Text>
      </div>
    );
  }
};

export default Status;
