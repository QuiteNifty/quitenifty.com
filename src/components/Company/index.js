import React from 'react';
import { SectionHeading } from '../styled';

const Company = ({ company }) => (
  <div>
    <SectionHeading>Company</SectionHeading>
    <address>
      <span>{company.name}</span>
      <span>
        <a href="mailto:{company.email}">{company.email}</a>
      </span>
      <span>Phone: {company.phone}</span>
      {company.address.map(line => {
        return <span>{line}</span>;
      })}
    </address>
  </div>
);

export default Company;
