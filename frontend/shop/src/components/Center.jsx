import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`

`

const Center = ({ children, ...props }) => (
  <Root {...props}>
    <Wrapper>
      {children}
    </Wrapper>
  </Root>
)

export default Center;
