import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import './index.css';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.slogan },
        { name: 'keywords', content: 'quite nifty, superannuation, comparison, super detailed, cheapest super, cheapest superannuation' }
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        slogan
      }
    }
  }
`;

export default TemplateWrapper;
