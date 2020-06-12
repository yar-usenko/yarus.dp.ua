import React from 'react'
import styled from 'styled-components'

const Spec = styled.dl`
  display: flex;
  flex-wrap: wrap;
`

const Name = styled.dt`
  flex: 1 0 50%;
`

const Value = styled.dd`
  flex: 1 0 50%;
`

const Item = ({ name, children, key, ...props }) => (
  <React.Fragment key={key}>
    <Name>{name}</Name>
    <Value>{children}</Value>
  </React.Fragment>
)

Spec.Name = Name;

Spec.Value = Value;

Spec.Item = Item;

export default Spec;
