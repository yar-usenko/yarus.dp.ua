import React from 'react';
import styled from 'styled-components'
import Center from '../components/Center'
import Container from '../components/Container.jsx'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

const Wrapper = styled.div`
  margin-top: .75rem;
  margin-bottom: .75rem;
  max-width: 60ch;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`

const Title = styled(Heading)`
  text-align: center;
`

const NotFoundContainer = () => {
  return (
    <Center>
      <Container>
        <Wrapper>
          <Title>Страница не&nbsp;найдена</Title>
          <Paragraph>Скорее всего эта страница никогда не&nbsp;существовала, либо стала ненужной и&nbsp;мы&nbsp;её&nbsp;грохнули.</Paragraph>
          <Paragraph>Так бывает, не&nbsp;расстраивайтесь. <Link to="/">На&nbsp;главной</Link> есть ещё страницы, не&nbsp;хуже этой.</Paragraph>
        </Wrapper>
      </Container>
    </Center>
  )
}

export default NotFoundContainer;
