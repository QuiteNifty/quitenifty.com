import React from 'react';
import styled from 'styled-components';
import * as theme from '../theme';
import { rhythm } from '../../utils/typography';
import Status from './Status';
import wrench from '../../img/wrench.svg';

const productPath = require.context('./', true);

const StyledProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: ${rhythm(1.5)};

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

const ImageContainer = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 20vh;
  margin: 0 auto;
`;
const ImageImg = styled.img`
  width: 100%;
`;
const SvgImageContainer = ImageContainer.withComponent('svg');

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
    const styles = {
      backgroundImage: 'url(' + productPath(product.logo, true) + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%'
    };
    return (
      <ImageContainer style={styles} />
    );
  } else {
    return (
      <SvgImageContainer>
        <use xlinkHref={`#${wrench.id}`} />
      </SvgImageContainer>
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
  return null;
};

export default Product;
