import React from 'react'
import styled from 'styled-components'
import HeadingBase from '../components/Heading.jsx'

const Root = styled.div`
  display: block;
`

const Title = styled(HeadingBase)`

`

const Section = ({ title, children, level = 2, ...props }) => (
  <Root>
    {title && (
      <Title level={level}>
        {title}
      </Title>
    )}
    {children}
  </Root>
)

export default Section;
