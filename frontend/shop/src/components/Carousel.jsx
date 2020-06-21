import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  overflow-y: scroll;
`

const List = styled.ul`
  display: flex;
  list-style-type: none;
`

const Item = styled.li`
  margin: 0;
  padding: 0;
  min-width: 300px;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const Carousel = ({ children, ...props }) => {
  if (!children) {
    return;
  }

  const slides = children.map(child => (
    <Item key={child.props.key}>
      {child}
    </Item>
  ))

  return (
    <Root {...props}>
      <List>
        {slides}
      </List>
    </Root>
  )
}


export default Carousel;
