import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link.jsx'
import Icon from '../components/Icon.jsx'
import PhoneIcon from '../assets/icons/phone.svg'
import PhoneLabel from '../components/PhoneLabel.jsx'

const Root = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.25;
`

const Container = styled.div`
  text-align: right;
`

const Phone = styled(PhoneLabel)`
  display: block;
  font-weight: bold;
  letter-spacing: .02em;
`

const Small = styled.small`
  font-size: max(.85rem, 14px);
  line-height: max(1.25rem, 20px);
  font-weight: normal;
`

const Trigger = styled(Link)`
  font-size: max(.85rem, 14px);
  line-height: max(1.25rem, 20px);
`

const Bullet = styled(Icon)`
  margin-right: .5rem;
`


const PhonesWidget = ({ children, phones, ...props }) => {
  if (!phones || !phones.length) {
    return null;
  }

  return (
    <Root {...props}>
      <Bullet width="1.5rem" src={PhoneIcon} />
      <Container>
        {phones.map(phone => (
          <Phone key={phone} number={phone} />
        ))}
        <Trigger>
          Заказать звонок
        </Trigger>
      </Container>
    </Root>
  )
}

export default PhonesWidget;
