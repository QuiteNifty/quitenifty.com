// Libs
import React from 'react';
import styled, { css } from 'styled-components';
// Styles
import { rhythm } from '../../utils/typography';
// Components
import { SectionHeading, SimpleLinkNoColor } from '../styled';

const Address = styled.address`
  font-style: normal;
`;
const Name = styled.div``;
const PostalAddress = styled.div`
  margin-bottom: ${rhythm(0.5)}
`;
const PostalAddressLine = styled.span`
  display: block;
`;
const Email = styled.div``;
const EmailLink = styled.a`
  ${SimpleLinkNoColor}
`;
const Phone = styled.div``;
const PhoneLabel = styled.span``;
const PhoneNumber = styled.span``;

const Company = ({ company }) => (
  <div>
    <SectionHeading>Company</SectionHeading>
    <Address>
      <Name>{company.name}</Name>
      <PostalAddress>
      {company.address.map(line => {
        return <PostalAddressLine>{line}</PostalAddressLine>;
      })}
      </PostalAddress>
      <Email>
        <EmailLink href="mailto:{company.email}">{company.email}</EmailLink>
      </Email>
      <Phone><PhoneLabel>Phone: </PhoneLabel><PhoneNumber>{company.phone}</PhoneNumber></Phone>
    </Address>
  </div>
);

export default Company;
