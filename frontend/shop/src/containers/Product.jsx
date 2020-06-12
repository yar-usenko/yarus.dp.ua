import React from 'react';
import Container from '../components/Container'
import Headline from '../components/Headline.jsx'
import Heading from '../components/Heading.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Article from '../components/Article.jsx'
import List from '../components/List.jsx'
import Section from '../components/Section.jsx'
import Grid from '../components/Grid.jsx'
import Spec from '../components/Spec.jsx'

const ProductContainer = () => {
  return (
    <Container>
      <Headline
        breadcrumbs={[{
          title: 'Главная',
          slug: '/'
        }, {
          title: 'Стройматериалы',
          slug: '/category'
        }, {
          title: 'Строительные смеси',
          slug: '/category'
        }, {
          title: 'Цемент',
          slug: '/category'
        }]}
      >
        Цемент CRH ПЦI-500 25 кг
      </Headline>
      <img src="https://cdn.27.ua/799/c4/a0/115872_2.jpeg" alt=""/>
      <Section title="Также вас могут заинтересовать">
        Также вас могут заинтересовать
      </Section>
      <Grid>
        <Grid.Cell column="8">
          <Section title="Описание">
            <Article>
              <Paragraph>
                Цемент (лат. caementum&nbsp;&mdash; &laquo;щебень, битый камень&raquo;)&nbsp;&mdash; искусственное неорганическое вяжущее вещество. Один из&nbsp;основных строительных материалов. При взаимодействии с&nbsp;водой, водными растворами солей и&nbsp;другими жидкостями образует пластичную массу, которая затем затвердевает и&nbsp;превращается в&nbsp;камневидное тело.
              </Paragraph>
              <Paragraph>
                Марка цемента — условная величина, которая обозначает, что прочность при сжатии будет не ниже обозначенной марки (200, 300, 400, 500, 600)
              </Paragraph>
              <Paragraph>
                По наличию основного минерала цементы подразделяются:
              </Paragraph>
              <List>
                <li>
                  романцемент — преобладание белита, в настоящее время не производится;
                </li>
                <li>
                  портландцемент — преобладание алита, наиболее широко распространён в строительстве;
                </li>
                <li>
                  глинозёмистый цемент — преобладание алюминатной фазы;
                </li>
                <li>
                  магнезиальный цемент (цемент Сореля) — на основе магнезита, затворяется водным раствором солей;
                </li>
              </List>
              <Paragraph>
                Используется в&nbsp;строительстве промышленных, жилых или коммерческих сооружений.
              </Paragraph>
              <Paragraph>
                Бетонирование в&nbsp;холодное время года, изготовление архитектурных элементов​. Для бетона, где важны высокая прочность в&nbsp;короткие сроки и&nbsp;повышенные требования к&nbsp;морозостойкости конструкций.
              </Paragraph>
            </Article>
          </Section>
          <Section title="Характеристики">
            <Article>
              <Section title="Стандарт связи/интернет" level="3">
                <Spec>
                  <Spec.Item name="Стандарт связи">
                    4G (LTE)
                  </Spec.Item>
                </Spec>
              </Section>
              <Section title="Дисплей" level="3">
                <Spec>
                  <Spec.Item name="Диагональ экрана">
                    6.53
                  </Spec.Item>
                  <Spec.Item name="Разрешение дисплея">
                    2340 x 1080
                  </Spec.Item>
                  <Spec.Item name="Тип матрицы">
                    IPS
                  </Spec.Item>
                  <Spec.Item name="Материал экрана">
                    Стекло (Gorilla Glass 5)
                  </Spec.Item>
                </Spec>
              </Section>
              <Section title="СИМ-карты" level="3">
                <Spec>
                  <Spec.Item name="Количество СИМ-карт">
                    2
                  </Spec.Item>
                  <Spec.Item name="Размеры СИМ-карты">
                    Nano-SIM
                  </Spec.Item>
                </Spec>
              </Section>
            </Article>
          </Section>
          <Section title="Отзывы покупателей">
            Отзывы покупателей
          </Section>
        </Grid.Cell>
        <Grid.Cell column="4">
          sdf
        </Grid.Cell>
      </Grid>
      <Section title="Вы просматривали">
        ыва
      </Section>
    </Container>
  )
}

export default ProductContainer;
