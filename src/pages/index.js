import React from 'react';
import Link from 'gatsby-link';
import Company from '../components/Company';
import People from '../components/People';
import Products from '../components/Products';


const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
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
      }
    }
    allPeopleJson {
      edges {
        node {
          shortName
          longName
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
