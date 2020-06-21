import React from 'react';
import styled from 'styled-components';

const Root = styled.span`
  display: inline-block;
`


const LocationWidget = ({ children, ...props }) => {
  return (
    <Root {...props}>
      Павлоград
    </Root>
  )
}

export default LocationWidget;
