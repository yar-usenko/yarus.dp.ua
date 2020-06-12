import React from 'react';
import styled from 'styled-components';
import HeadingBase from '../components/Heading.jsx'
import BreadcrumbsBase from '../components/Breadcrumbs.jsx'

const Root = styled.div`
  margin-top: .75rem;
  margin-bottom: .75rem;
`

const Breadcrumbs = styled(BreadcrumbsBase)`

`

const Title = styled(HeadingBase)`
  margin-top: 0;
  margin-bottom: 0;
`

const Headline = ({ children, breadcrumbs, level = 1, ...props }) => (
  <Root {...props}>
    <Breadcrumbs items={breadcrumbs} />
    <Title level={level}>{children}</Title>
  </Root>
)

export default Headline;
