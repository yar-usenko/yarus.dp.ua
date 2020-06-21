import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container'
import LinkBase from '../components/Link.jsx'

const Root = styled.nav`
  display: block;
  border: 1px solid rgba(0, 0, 0, .04);
  border-left: 0;
  border-right: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
  position: relative;
  z-index: 9;
`

const List = styled.ul`
  display: flex;
  margin-left: -.5rem;
  margin-right: -.5rem;
`

const ListItem = styled.li`
  display: block;
`

const Link = styled(LinkBase)`
  display: block;
  color: #000;
  font: inherit;
  line-height: inherit;
  padding: .5rem;
`

const LINKS = [{
  title: 'Каталог',
  url: '/category'
}, {
  title: 'Товар',
  url: '/product'
}, {
  title: 'Корзина',
  url: '/my/cart'
}, {
  title: 'Статья',
  url: '/article'
}, {
  title: 'Не найдена',
  url: '/not-found'
}]

const MainMenu = ({ children, ...props }) => {
  return (
    <Root {...props}>
      <Container>
        <List>
          {LINKS.map(({ title, url }) => (
            <ListItem key={title + '-' + url}>
              <Link to={url}>{title}</Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </Root>
  )
}

export default MainMenu;
