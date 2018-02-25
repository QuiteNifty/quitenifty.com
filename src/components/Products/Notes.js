// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { bp, color } from '../theme';
import { rhythm } from '../../utils/typography';

const StyledNotes = styled.ul`
  margin: 0 0 0 1em;
  font-style: italic;
  color: ${color.darkgrey};

  > li {
    margin-bottom: ${rhythm(0.25)};
  }

  @media (max-width: ${bp.narrowTiny}) {
    list-style-position: inside;
  }
`;

const Notes = ({ notes }) => {
  if (notes && notes.length > 0) {
    return (
      <StyledNotes>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </StyledNotes>
    );
  }
  return null;
};

export default Notes;
