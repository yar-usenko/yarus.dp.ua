import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon.jsx'

const Root = styled.div`
  display: block;
`

const Bullet = styled(Icon)`

`

const HeaderWidget = ({ children, icon, ...props }) => {
  return (
    <Root {...props}>
      <Bullet width="2rem" src={icon} />
    </Root>
  )
}

export default HeaderWidget;
