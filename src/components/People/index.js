import React from 'react';
import styled from 'styled-components';
import Person from './Person';
import { SectionContainer, SectionHeading } from '../styled';

const Container = styled.div`
  margin-top: 4rem;
`
const StyledPeople = styled(SectionContainer)``;

const People = props => (
  <Container>
    {/* <SectionHeading>People</SectionHeading> */}
    <StyledPeople>
      {props.people.map(({ node }, index) => {
        return <Person person={node} />;
      })}
    </StyledPeople>
  </Container>
);

export default People;
