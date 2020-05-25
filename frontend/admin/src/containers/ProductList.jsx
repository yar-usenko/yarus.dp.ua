import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {
  Link
} from "react-router-dom";

const GET_BOOKS = gql`
  {
    products {
      ID
      title
    }
  }
`;

function ProductListContainer() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div>
        <Link to={`/product/create`}>
          Добавить
        </Link>
      </div>
      <ul>
        {data.products.map(({ ID, title }) => (
          <li key={ID}>
            <Link to={`/product/${ID}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ProductListContainer;
