import React from 'react';

const Company = ({ company }) => (
  <div>
    <address>
      <span>{company.name}</span>
      <span><a href="mailto:{company.email}">{company.email}</a></span>
      <span>Phone: {company.phone}</span>
      {company.address.map(line => {
        return <span>{line}</span>;
      })}
    </address>
  </div>
);

export default Company;
