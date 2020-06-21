import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard.jsx'
import Carousel from '../components/Carousel.jsx';

const Root = styled.div`
  position: relative;
  display: block;
  margin-left: -.75rem;
  margin-right: -.75rem;
  overflow: hidden;
`;

const Item = styled.div`
  float: left;
  max-width: 30rem;
  margin-left: .75rem;
  margin-right: .75rem;
`

const ProductCarousel = ({ children, ...props }) => (
  <Root>
    <Carousel>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
        <ProductCard key={item}/>
      ))}
    </Carousel>
  </Root>
);

export default ProductCarousel;
