import React from 'react';
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import ProductCarousel from '../components/ProductCarousel'

const HomeContainer = () => {
  return (
    <Container>
      <Section title="Стоит приглядеться">
        <ProductCarousel />
      </Section>
      <Section title="Ух ты — любопытно">
        <ProductCarousel />
      </Section>
      <Section title="Популярные категории">
      </Section>
      <Section title="Всё со скидкой, надо брать">
        <ProductCarousel />
      </Section>
      <Section title="Часто бывает нужно">
        <ProductCarousel />
      </Section>
      <Section title="Как для меня выбрано">
        <ProductCarousel />
      </Section>
      <Section title="Отзывы на лучшие товары">
      </Section>
      <Section title="Отзывы на лучшие товары">
      </Section>
      <Section title="Популярные бренды">
      </Section>
    </Container>
  )
}

export default HomeContainer;
