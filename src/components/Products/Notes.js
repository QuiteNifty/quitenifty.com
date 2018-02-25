import React from 'react';
import styled from 'styled-components';

const Notes = ({ notes }) => {
  if (notes && notes.length > 0) {
    return (
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </ul>
    );
  }
  return null;
};

export default Notes;
