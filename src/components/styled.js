// Libs
import styled from 'styled-components';
// Styles
import { bp, color } from './theme';
import { rhythm } from '../utils/typography';

export const SectionHeading = styled.h2`
  display: block;
  border-bottom: 1px solid ${color.grey};

  @media (max-width: ${bp.narrowTiny}) {
    margin-bottom: ${rhythm(0.5)};
    border-bottom: 0;
    text-align: center;
  }
`;
