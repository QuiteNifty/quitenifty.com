// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import {color} from '../theme';
import { rhythm } from '../../utils/typography';

const StyledNotes = styled.ul`
    margin-left: 1em;
    font-style: italic;
    color: ${color.darkgrey};

    > li {
        margin-bottom: ${rhythm(0.25)};
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
