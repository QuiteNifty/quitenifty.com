import React from 'react';
import styled from 'styled-components';
import Person from './Person';
import { SectionHeading } from '../styled';

const People = props => (
  <div>
    <SectionHeading>People</SectionHeading>
    {props.people.map(({ node }, index) => {
      return <Person person={node} />;
    })}
  </div>
);

export default People;
