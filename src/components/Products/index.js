import React from 'react';
import Link from 'gatsby-link';
import Product from './Product';

const Products = props => (
  <div>
    <h2>Products</h2>
    {props.products.map(({ node }, index) => <Product product={node} />)}
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
