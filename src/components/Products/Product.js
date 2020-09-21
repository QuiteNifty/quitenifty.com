// Libs
import React from 'react';
import styled from 'styled-components';
import ResponsiveEmbed from 'react-responsive-embed'
// Styles
import { color, bp } from '../theme';
import { rhythm } from '../../utils/typography';
// Components
import Status from './Status';
import Logo from './Logo';
import { SectionItem } from '../styled';
import Twitter from '../People/Twitter';

const StyledProduct = styled.div`
  display: flex;
  width: 100%;
`
const EmbedContainer = styled.div`
  width: 66%;
`
const ProductDetails = styled.div`
  margin-left: ${rhythm(1)};
`

const Product = ({ product }) => (
  <StyledProduct>
    <EmbedContainer>
      <ResponsiveEmbed src={product.embedURL} />
    </EmbedContainer>
    <ProductDetails>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </ProductDetails>
  </StyledProduct>
);

export default Product;
