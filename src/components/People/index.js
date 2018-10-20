import React from 'react'
import styled from 'styled-components'
import Person from './Person'
import { SectionContainer, SectionHeading } from '../styled'

const StyledPeople = styled(SectionContainer)``

const People = props => (
  <div>
    <SectionHeading>People</SectionHeading>
    <StyledPeople>
      {props.people.map(({ node }, index) => {
        return <Person person={node} />
      })}
    </StyledPeople>
  </div>
)

export default People
