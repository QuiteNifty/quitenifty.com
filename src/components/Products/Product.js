import React from 'react';
import styled from 'styled-components';
import * as theme from '../theme';
import { rhythm } from '../../utils/typography';
import Status from './Status';

import wrench from '../../img/wrench.svg';
const productPath = require.context('./', true);
const imgPath = require.context('../../img', true);

const StyledProduct = styled.div`
  position: relative;
  flex-basis: 50%;
  padding: ${rhythm(1.5)};
  margin-right: ${rhythm(1.5)};

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 25%;
    height: 100%;
    position: absolute;
    border-top: 2px solid ${theme.color.highlight2};
    border-bottom: 2px solid ${theme.color.highlight2};
    z-index: -1;
  }
  &:before {
    top: -2px;
    left: -2px;
    border-left: 2px solid ${theme.color.highlight2};
  }

  &:after {
    top: -2px;
    right: -2px;
    border-right: 2px solid ${theme.color.highlight2};
  }
`;

const ProductLink = StyledProduct.withComponent('a');
const StyledProductLink = ProductLink.extend`
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: all 0.25s;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 12rem;
  height: 100%;
  max-height: 12rem;
  margin: 0 auto;
`;
const SvgImage = Image.withComponent('svg');

const ProductName = styled.h3`
  margin: ${rhythm(1)} 0 0;
`;

const Description = styled.p`
  margin: ${rhythm(0.5)} 0 ${rhythm(1)};
`;

const Product = ({ product }) => (
  <Outer product={product}>
    <Logo product={product} />
    <ProductName>{product.name}</ProductName>
    <Status product={product} />
    <Description>{product.description}</Description>
    <Notes notes={product.notes} />
  </Outer>
);

const Outer = props => {
  if (props.product.url) {
    return <StyledProductLink href={props.product.url}>{props.children}</StyledProductLink>;
  } else {
    return <StyledProduct>{props.children}</StyledProduct>;
  }
};

const Logo = ({ product }) => {
  if (product.logo) {
    return <Image src={productPath(product.logo, true)} />;
  } else {
    return (
      <SvgImage>
        <use xlinkHref={`#${wrench.id}`} />
      </SvgImage>
    );
  }
};

const Notes = ({ notes }) => {
  if (notes && notes.length > 0) {
    return (
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </ul>
    );
  }
  return <p>no notes</p>;
};

export default Product;
