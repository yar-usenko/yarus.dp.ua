import React from 'react'
import styled from 'styled-components'
import LinkBase from '../components/Link.jsx'
import ContainerBase from '../components/Container'
import LogoBase from '../components/Logo.jsx'
import SearchFormBase from '../components/SearchForm.jsx'
import Nav from '../components/Nav.jsx'
import PhonesWidget from '../components/PhonesWidget.jsx'
import CartWidget from '../components/CartWidget.jsx'
import HeaderWidget from '../components/HeaderWidget.jsx'
import HeartIcon from '../assets/icons/heart.svg'
import LibraIcon from '../assets/icons/libra.svg'
import LocationWidget from '../components/LocationWidget.jsx'
import Gapped from '../components/Gapped.jsx'

const Root = styled.header`
  position: relative;
  z-index: 10;
  display: block;
  background-color: #fff;
`

const Link = styled(LinkBase)`
  color: inherit;
`

const Container = styled(ContainerBase)`
  display: flex;
  align-items: center;
  padding-top: .75rem;
  padding-bottom: .75rem;
`

const Description = styled.p`
  display: block;
  margin: 0;
 font-size: max(.85rem, 14px);
 line-height: max(1.25rem, 20px);
 color: #999;
`

const SearchForm = styled(SearchFormBase)`
  flex: 1;
  margin-left: 2rem;
  margin-right: 2rem;
`

const TopNav = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: max(.75rem, 14px);
  line-height: max(1.25rem, 24px);
  color: #999;
`

const Header = () => (
  <Root>
    <TopNav>
      <Gapped gap={3}>
        <LocationWidget />
        <Gapped delimiter="&bull;">
          <Link to="/ua">Укр</Link>
          <Link to="/ru">Рус</Link>
          <Link to="/en">Eng</Link>
        </Gapped>
      </Gapped>

      <Gapped>
        <Link to="/journal">Журнал</Link>
        <Link to="/article">Доставка</Link>
        <Link to="/article">Оплата</Link>
        <Link to="/article">Возврат</Link>
        <Link to="/article">Контакты</Link>
        <Link to="/article">О нас</Link>
      </Gapped>

      <Link to="/my/account">Мой кабинет</Link>
    </TopNav>
    <Container>
      <Gapped align="center" gap={2}>
        <LogoBase />
        <Description>
          Интернет-магазин
          <br />
          строительных материалов
        </Description>
      </Gapped>
      <SearchForm />
      <Gapped gap={3}>
        <PhonesWidget phones={['380956405784']} />
        <HeaderWidget icon={HeartIcon} />
        <HeaderWidget icon={LibraIcon} />
        <CartWidget />
      </Gapped>
    </Container>
  </Root>
)

export default Header;
