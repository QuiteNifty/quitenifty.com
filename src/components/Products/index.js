// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { bp } from '../theme';
// Components
import Product from './Product';
import { SectionContainer, SectionHeading } from '../styled';

const ProductContainer = SectionContainer.extend``;

const Products = props => (
  <div>
    <SectionHeading>Products</SectionHeading>
    <ProductContainer>
      {props.products.map(({ node }, index) => <Product product={node} />)}
    </ProductContainer>
  </div>
);

const allValues = arg => {
  let str = '';
  for (let key in arg) {
    if (arg.hasOwnProperty(key)) {
      str += key + ',' + arg[key];
    }
  }
  return str;
};

export default Products;
