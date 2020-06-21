import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link.jsx'
import BagIcon from '../assets/icons/bag.svg'
import Icon from '../components/Icon.jsx'

const Root = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  line-height: 1.25;
`

const Container = styled.div`

`

const Title = styled(Link)`
  display: block;
  color: inherit;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Description = styled.span`
  display: block;
  font-size: max(.85rem, 14px);
  line-height: max(1.25rem, 20px);
`

const Bullet = styled(Icon)`
  margin-right: .5rem;
`

const CartWidget = ({ children, ...props }) => {
  return (
    <Root {...props}>
      <Bullet width="2rem" src={BagIcon} />
      <Container>
        <Title to="/my/cart">Моя корзина</Title>
        <Description>
          пока пуста
        </Description>
      </Container>
    </Root>
  )
}

export default CartWidget;
