import React from 'react';
import Container from '../components/Container'
import Headline from '../components/Headline.jsx'

const CategoryContainer = () => {
  return (
    <Container>
      <Headline breadcrumbs={[{ title: 'Главная', slug: '/' }, { title: 'Стройматериалы', slug: '/category' }, { title: 'Строительные смеси', slug: '/category' }]}>Цемент</Headline>
    </Container>
  )
}

export default CategoryContainer;
