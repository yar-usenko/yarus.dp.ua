import React from 'react';
import styled from 'styled-components';
import LinkBase from '../components/Link.jsx'
import ThumbBase from '../components/Thumb.jsx'
import CurrencyLabel from '../components/CurrencyLabel.jsx'

const Root = styled.div`
  position: relative;
`

const Title = styled(LinkBase)`
  display: block;
  color: #000;

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Thumb = styled(ThumbBase)`
  display: block;
  margin: .75rem;
`

const Price = styled(CurrencyLabel)`
  display: block;
  font-weight: bold;
`

const ProductCard = ({ children, ...props }) => (
  <Root {...props}>
    <Thumb alt="Цемент CRH ПЦI-500 25 кг" src="https://cdn.27.ua/799/c4/a0/115872_2.jpeg" />
    <Title to="/product">Цемент CRH ПЦI-500 25 кг</Title>
    <Price value={1234567890} />
  </Root>
)

export default ProductCard;
