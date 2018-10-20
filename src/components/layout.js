// Libs
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
// Styles
import { bp } from '../components/theme'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 ${rhythm(0.75)} ${rhythm(1)};
  padding-top: 0;

  @media (max-width: ${bp.narrowMid}) {
    padding: 0 ${rhythm(0.25)} ${rhythm(1)};
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
            slogan
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.slogan },
            {
              name: 'keywords',
              content:
                'quite nifty, superannuation, comparison, super detailed, cheapest super, cheapest superannuation',
            },
          ]}
        >
          <script
            async={true}
            src="https://www.googletagmanager.com/gtag/js?id=UA-117928228-2"
          />
        </Helmet>
        <Wrapper>{children}</Wrapper>
      </div>
    )}
  />
)
