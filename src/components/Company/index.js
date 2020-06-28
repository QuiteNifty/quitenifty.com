// Libs
import React from 'react';
import styled from 'styled-components';
// Styles
import { rhythm } from '../../utils/typography';
// Components
import { SectionHeading, SimpleLinkNoColor } from '../styled';

const Address = styled.address`
  font-style: normal;
  text-align: center;
`;
const Name = styled.div``;
const PostalAddress = styled.div`
  margin-bottom: ${rhythm(0.5)};
`;
const PostalAddressLine = styled.span`
  display: block;
`;
const Email = styled.div``;
const EmailLink = styled.a`
  ${SimpleLinkNoColor};
`;
const Phone = styled.div``;
const PhoneLabel = styled.span``;
const PhoneNumber = styled.a`
  ${SimpleLinkNoColor};
`;

const Company = ({ company }) => (
  <div>
    <Address>
      <Email>
        <EmailLink href={'mailto:' + company.email}>{company.email}</EmailLink>
      </Email>
    </Address>
  </div>
);

export default Company;
