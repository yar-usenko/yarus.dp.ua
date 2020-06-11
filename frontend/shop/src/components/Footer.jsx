import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'

const Root = styled.footer`
  display: block;
  background-color: #ccc;
`

const Footer = () => (
  <Root>
    <Container>
      Footer
    </Container>
  </Root>
)

export default Footer;
