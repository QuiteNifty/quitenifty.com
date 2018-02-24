import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import { color } from '../theme';
import { rhythm } from '../../utils/typography';

const imgPath = require.context('../../img', true);

const Icon = styled.img`
  margin: 0 ${rhythm(0.25)} 0 0;
  vertical-align: middle;
  color: ${color.darkgrey};
`;

const Text = styled.span`
  color: ${color.darkgrey};
`;

const Status = ({ product }) => {
  if (product.url) {
    return (
      <div>
        <Icon src={imgPath('./link-intact.svg', true)} />
        <Text>{product.url}</Text>
      </div>
    );
  } else {
    return (
      <div>
        <Icon src={imgPath('./beaker.svg', true)} />
        <Text>{product.status}</Text>
      </div>
    );
  }
};

export default Status;
