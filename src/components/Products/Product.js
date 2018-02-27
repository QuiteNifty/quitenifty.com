// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { color, bp } from '../theme';
import { rhythm } from '../../utils/typography';
// Components
import Status from './Status';
import Logo from './Logo';
import Notes from './Notes';
import { SectionItem } from '../styled';

const StyledProduct = SectionItem.extend`
  position: relative;
  
  @media (max-width: ${bp.narrowTiny}) {
    text-align: center;
  }

  // Borders
  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 25%;
    height: 100%;
    position: absolute;
    border-top: 2px solid ${color.highlight2};
    border-bottom: 2px solid ${color.highlight2};
    z-index: -1;

    @media (max-width: ${bp.narrowTiny}) {
      border-width: 1px;
    }
  }
  &:before {
    top: -2px;
    left: -2px;
    border-left: 2px solid ${color.highlight2};

    @media (max-width: ${bp.narrowTiny}) {
      border-width: 1px;
    }
  }

  &:after {
    top: -2px;
    right: -2px;
    border-right: 2px solid ${color.highlight2};

    @media (max-width: ${bp.narrowTiny}) {
      border-width: 1px;
    }
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

const ProductName = styled.h3`
  margin: ${rhythm(1)} 0 0;
`;

const Description = styled.p`
  margin: ${rhythm(1)} 0 ${rhythm(1)};
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

export default Product;
