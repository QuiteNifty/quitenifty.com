// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { bp } from '../theme';
// Paths
const productPath = require.context('./', true);

const ImageContainer = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 20vh;
  margin: 0 auto;

  @media (max-width: ${bp.narrowTiny}) {
    height: 12vh;
  }
`;

const SvgContainer = ImageContainer.withComponent('svg');

const Logo = ({ product }) => {
  if (product.logo) {
    const styles = {
      backgroundImage: 'url(' + productPath(product.logo, true) + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%'
    };
    return <ImageContainer style={styles} />;
  } else {
    return (
      <SvgContainer>
        <use xlinkHref={`#${wrench.id}`} />
      </SvgContainer>
    );
  }
};

export default Logo;
