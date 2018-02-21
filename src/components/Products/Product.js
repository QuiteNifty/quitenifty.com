import Link from 'gatsby-link';
import React from 'react';

const Product = props => (
  <div>
    <Outer product={props.product}>
      <h2>{props.product.name}</h2>
      <p>Status: {props.product.status}</p>
      <p>{props.product.description}</p>
      <Notes notes={props.product.notes} />
    </Outer>
  </div>
);

const Outer = props => {
  if (props.product.url) {
    return <Link to={props.product.url}>{props.children}</Link>;
  } else {
    return <div>{props.children}</div>;
  }
};

const Notes = ({ notes }) => {
  if (notes && notes.length > 0) {
    return (
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </ul>
    );
  }
  return <p>no notes</p>;
};

export default Product;
