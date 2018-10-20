// Libs
import React from 'react'
import styled from 'styled-components'
// Components
import { SimpleLink } from '../styled'
// Styles
import { color } from '../theme'
import { rhythm } from '../../utils/typography'
import LinkIntact from '../../img/link-intact.svg'
import Beaker from '../../img/beaker.svg'

const iconStyle = {
  width: '0.8rem',
  height: '0.8rem',
  margin: `0 ${rhythm(0.25)} 0 0`,
  verticalAlign: 'middle',
}

const Text = styled.span`
  color: ${color.darkgrey};
`

const UrlText = Text.withComponent('a')
const StyledUrlText = styled(UrlText)`
  ${SimpleLink};
`

const Status = ({ product }) => {
  if (product.url) {
    return (
      <div>
        <LinkIntact style={iconStyle} fill={color.darkgrey} />
        <StyledUrlText href={product.url}>{product.url}</StyledUrlText>
      </div>
    )
  } else {
    return (
      <div>
        <Beaker style={iconStyle} fill={color.darkgrey} />
        <Text>{product.status}</Text>
      </div>
    )
  }
}

export default Status
