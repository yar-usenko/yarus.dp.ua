import React from 'react';
import styled from 'styled-components'
import Container from '../components/Container'
import Headline from '../components/Headline.jsx'
import Paragraph from '../components/Paragraph'
import List from '../components/List.jsx'

const Wrapper = styled.article`
  max-width: 75ch;
`

const ArticleContainer = () => {
  return (
    <Container>
      <Headline>
        Возврат товара
      </Headline>
      <Wrapper>
        <Paragraph>
          Возврат товаров в фирменные магазины осуществляется в течении 14 дней от даты продажи.
        </Paragraph>
        <Paragraph>
          Требования к инструменту в случае его возврата:
        </Paragraph>
        <List>
          <li>коробка от инструмента, который Вы возвращаете, должна иметь продажный вид;</li>
          <li>допускается отсутствие пленки от инструмента;</li>
          <li>серийный номер на коробке и инструменте должны совпадать.</li>
        </List>
        <Paragraph>
          Полный возврат средств в соответствии с действующим законодательством осуществляется в следующих случаях:
        </Paragraph>
        <List>
          <li>при возврате нового, рабочего товара в полной комплектации;</li>
          <li>при возврате нерабочего товара с легкими следами эксплуатации, без механических дефектов и повреждений, царапин и в полной комплектации;</li>
          <li>при возврате рабочего товара с видимыми следами эксплуатации, но без механических дефектов и повреждений, без царапин и в полной комплектации.</li>
        </List>
        <Paragraph>
          При возврате рабочего инструмента с видимыми следами эксплуатации, а также при наличии механических дефектов, повреждений и не в полной комплектации Вы можете получить скидку 25% на приобретение товара из той же группы.
        </Paragraph>
      </Wrapper>
    </Container>
  )
}

export default ArticleContainer;
