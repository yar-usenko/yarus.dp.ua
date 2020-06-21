import React from 'react';
import Container from '../components/Container'
import Headline from '../components/Headline.jsx'
import Paragraph from '../components/Paragraph.jsx'

const CartContainer = () => {
  return (
    <Container>
      <Headline>
        В корзине пока ничего нет
      </Headline>
      <Paragraph>
        Чтобы увидеть ранее добавленные вами товары, авторизуйтесь.
      </Paragraph>
    </Container>
  )
}

export default CartContainer;
