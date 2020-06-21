import React from 'react';
import styled from 'styled-components';
import LinkBase from '../components/Link.jsx'

const Root = styled(LinkBase)`
  color: #000;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1;
`

const Logo = ({ children, ...props }) => (
  <Root to="/" {...props}>
    Ярус
  </Root>
)

export default Logo;
