// Libs
import React from 'react';
import Link from 'gatsby-link';
// Components
import Header from '../components/Header';
import Company from '../components/Company';
import People from '../components/People';
import Products from '../components/Products';

const IndexPage = ({ data }) => (
  <div>
    <Header title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} />
    <Products products={data.allProductsJson.edges} />
    <People people={data.allPeopleJson.edges} />
    <Company company={data.allCompanyJson.edges[0].node} />
  </div>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        slogan
        siteUrl
      }
    }
    allPeopleJson {
      edges {
        node {
          shortName
          longName
          img
          roles
          twitter {
            handle
            url
          }
          linkedin
        }
      }
    }
    allProductsJson {
      edges {
        node {
          name
          url
          status
          description
          notes
          logo
          twitter {
            handle
            url
          }
        }
      }
    }
    allCompanyJson {
      edges{
        node {
          name
          email
          address
          phone
        }
      }
    }
  }
`;

export default IndexPage;
