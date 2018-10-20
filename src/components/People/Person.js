// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { bp } from '../theme';
import { rhythm } from '../../utils/typography';
// Components
import { SectionItem } from '../styled';
import Twitter from './Twitter';
// Paths
const imgPath = require.context('../../img', true);

const StyledPerson = styled(SectionItem)`
  // Element has no border so looks like more space between this and heading
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  text-align: center;

  @media (max-width: ${bp.narrowTiny}) {
    & + & {
      margin-top: ${rhythm(1)};
    }
  }
`;

const Image = styled.img`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  margin: 0 auto;
  max-height: 40vh;
`;

const Name = styled.h3`
  margin: ${rhythm(0.5)} 0 0;
`;

const Roles = styled.ul`
  list-style: none;
  margin: ${rhythm(1)} 0 0;

  > li {
    margin: 0 0 ${rhythm(0.25)} 0;
  }

  @media (max-width: ${bp.narrowTiny}) {
    margin: ${rhythm(0.5)} 0 0;
  }
`;

const Person = ({ person }) => (
  <StyledPerson>
    <Image src={imgPath(person.img, true)} />
    <Name>{person.shortName}</Name>
    <Twitter twitter={person.twitter} />
    <Roles>
      {person.roles.map((role, index) => {
        return <li key={index}>{role}</li>;
      })}
    </Roles>
  </StyledPerson>
);

export default Person;
