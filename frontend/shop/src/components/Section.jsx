import React from 'react'
import styled from 'styled-components'
import HeadingBase from '../components/Heading.jsx'

const Root = styled.div`
  display: block;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const Title = styled(HeadingBase)`
  margin-top: 0;
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
