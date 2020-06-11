import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link.jsx'
import Container from '../components/Container'

const Root = styled.header`
  display: block;
  background-color: #ccc;
`

const Header = () => (
  <Root>
    <Container>
      <Link to="/">Главная</Link>
      {' '}
      <Link to="/category">Категория</Link>
      {' '}
      <Link to="/product">Товар</Link>
      {' '}
      <Link to="/my/cart">Корзина</Link>
      {' '}
      <Link to="/article">Статья</Link>
      {' '}
      <Link to="/not-found">404</Link>
    </Container>
  </Root>
)

export default Header;
