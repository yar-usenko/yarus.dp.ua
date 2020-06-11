import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'

const Root = styled.header`
  display: block;
`

const Header = () => (
  <Root>
    <Container>
      Header
    </Container>
  </Root>
)

export default Header;
