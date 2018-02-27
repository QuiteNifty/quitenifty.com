// Libs
import styled, {css} from 'styled-components';
// Styles
import { bp, color } from './theme';
import { rhythm } from '../utils/typography';

export const SimpleLinkNoColor = css`
  text-decoration: underline;
`;
export const SimpleLink = css`
  ${SimpleLinkNoColor}
  color: ${color.darkgrey} !important; // Override :visited
`;

export const ScreenReaderSpan = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
`;

export const SectionHeading = styled.h2`
  display: block;
  border-bottom: 1px solid ${color.grey};

  @media (max-width: ${bp.narrowTiny}) {
    margin-bottom: ${rhythm(0.5)};
    border-bottom: 0;
    text-align: center;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${bp.narrowTiny}) {
    flex-wrap: wrap;
  }
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - ${rhythm(1)});
  padding: ${rhythm(1.5)};

  @media (max-width: ${bp.narrowMid}) {
    width: calc(50% - ${rhythm(0.25)});
  }
  @media (max-width: ${bp.narrowSmall}) {
    padding: ${rhythm(0.75)};
  }
  @media (max-width: ${bp.narrowTiny}) {
    width: 100%;
    margin-bottom: ${rhythm(1)};
  }
`;
