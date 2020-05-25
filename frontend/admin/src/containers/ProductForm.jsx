import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useForm } from "react-hook-form";
import {
  useParams,
  useHistory
} from "react-router-dom";

const GET_PRODUCT = gql`
  query getProduct($productID: ID!){
    product(ID: $productID) {
      title
    }
  }
`;

function ProductFormContainer() {
  const { productID } = useParams();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    history.push('/product')
  }

  const product = {
    ID: productID !== 'create' ? productID : undefined,
  };

  if (product.ID) {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: {
        productID: product.ID
      }
    });

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    Object.assign(product, data.product)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Название</label>
        <div>
          <input name="title" id="title" ref={register} defaultValue={product.title} />
        </div>
      </div>
      <input type="submit" />
    </form>
  );
};

export default ProductFormContainer;
