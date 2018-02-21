import Link from 'gatsby-link';
import React from 'react';

const Person = ({ person }) => (
  <div>
    <h3>{person.shortName}</h3>
    <ul>
    {person.roles.map((role, index) => {
      return <li key={index}>{role}</li>;
    })}
    </ul>
    <ul>
      <Twitter twitter={person.twitter} />
      <LinkedIn linkedin={person.linkedin} />
    </ul>
  </div>
);

const Twitter = ({ twitter }) => {
  if (twitter) {
    return (
      <li>
        Twitter: <Link to={twitter.url}>{twitter.handle}</Link>
      </li>
    );
  }
  return null;
};

const LinkedIn = ({ linkedin }) => {
  if (linkedin) {
    return (
      <li>
        <Link to={linkedin}>LinkedIn</Link>
      </li>
    );
  }
  return null;
};

export default Person;
