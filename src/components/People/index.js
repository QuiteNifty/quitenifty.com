import Link from 'gatsby-link';
import React from 'react';
import Person from './Person';

const People = props => (
  <div>
    {props.people.map(({ node }, index) => {
      return <Person person={node} />;
    })}
  </div>
);

export default People;
