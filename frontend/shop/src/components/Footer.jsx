import React from 'react'
import styled from 'styled-components'
import ContainerBase from '../components/Container'
import Logo from '../components/Logo.jsx'
import Paragraph from '../components/Paragraph.jsx'

const Root = styled.footer`
  display: block;
  color: #999;
  background-color: #f4f4f4;
`

const Container = styled(ContainerBase)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Copyright = styled.div`
  font-size: max(14px, .75rem);
  line-height: max(20px, 1.25rem);
  background-color: #e8e8e8;
  padding-top: .5rem;
  padding-bottom: .5rem;
`

const Footer = () => (
  <Root>
    <Container>
      <Logo />
      <Paragraph>
        Интернет-магазин строительных материалов
      </Paragraph>
    </Container>
    <Copyright>
      <ContainerBase>
        &copy;&nbsp;2020 &laquo;Ярус&raquo;&nbsp;&mdash; интернет-магазин строительных материалов &bull;&nbsp;Made with &hearts; by&nbsp;Yaroslav Usenko
      </ContainerBase>
    </Copyright>
  </Root>
)

export default Footer;
