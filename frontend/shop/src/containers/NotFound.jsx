import React from 'react';
import styled from 'styled-components'
import Center from '../components/Center'
import Container from '../components/Container.jsx'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'

const Wrapper = styled.div`
  max-width: 60ch;
`

const Title = styled(Heading)`
  text-align: center;
`

const NotFoundContainer = () => {
  return (
    <Center>
      <Container>
        <Wrapper>
          <Title>Страница не найдена</Title>
          <Paragraph>Скорее всего эта страница никогда не существовала, либо стала ненужной и мы её грохнули.</Paragraph>
          <Paragraph>Так бывает, не расстраивайтесь. <Link to="/">На главной</Link> есть ещё страницы, не хуже этой.</Paragraph>
        </Wrapper>
      </Container>
    </Center>
  )
}

export default NotFoundContainer;
