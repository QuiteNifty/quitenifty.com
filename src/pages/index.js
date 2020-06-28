// Libs
import React from 'react';
// Components
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/Header';
import Company from '../components/Company';
import People from '../components/People';
import Products from '../components/Products';

function gaTag() {
  return {
    __html:
      'window.dataLayer = window.dataLayer || [];' +
      'function gtag(){dataLayer.push(arguments);}' +
      "gtag('js', new Date());" +
      "gtag('config', 'UA-117928228-2');",
  };
}
const IndexPage = ({ data }) => (
  <Layout>
    <script dangerouslySetInnerHTML={gaTag()} />
    <Header
      title={data.site.siteMetadata.title}
      url={data.site.siteMetadata.siteUrl}
    />
    <Company company={data.allCompanyJson.edges[0].node} />
    {/* <Products products={data.allProductsJson.edges} /> */}
    <People people={data.allPeopleJson.edges} />
  </Layout>
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
          websites {
            title
            description
            url
          }
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
      edges {
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
