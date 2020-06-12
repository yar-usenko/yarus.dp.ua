import React from 'react';
import Container from '../components/Container'
import Headline from '../components/Headline.jsx'
import Grid from '../components/Grid.jsx'
import ProductCard from '../components/ProductCard.jsx'

const CategoryContainer = () => {
  return (
    <Container>
      <Headline breadcrumbs={[{ title: 'Главная', slug: '/' }, { title: 'Стройматериалы', slug: '/category' }, { title: 'Строительные смеси', slug: '/category' }]}>Цемент</Headline>
      <Grid>
        <Grid.Cell column="9">
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
              <Grid.Cell key={item} column="3">
                <ProductCard />
              </Grid.Cell>
            ))}
          </Grid>
        </Grid.Cell>
        <Grid.Cell column="3">
          asdf
        </Grid.Cell>
      </Grid>
    </Container>
  )
}

export default CategoryContainer;
