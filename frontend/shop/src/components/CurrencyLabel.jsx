import React from 'react';
import styled from 'styled-components';

const Root = styled.span`
  display: inline-block;
`

const CurrencyLabel = ({ children, value, ...props }) => {
  return (
    <Root {...props}>
      {value}
    </Root>
  )
}

export default CurrencyLabel;
