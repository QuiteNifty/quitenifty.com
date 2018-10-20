// Libs
import React from 'react'
import styled from 'styled-components'
// Components
import Product from './Product'
import { SectionContainer, SectionHeading } from '../styled'

const ProductContainer = styled(SectionContainer)``

const Products = props => (
  <div>
    <SectionHeading>Products</SectionHeading>
    <ProductContainer>
      {props.products.map(({ node }, index) => (
        <Product product={node} />
      ))}
    </ProductContainer>
  </div>
)

export default Products
