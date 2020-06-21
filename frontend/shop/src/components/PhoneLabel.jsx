import React from 'react';
import styled from 'styled-components'

const Root = styled.span`
  display: inline-block;
  vertical-align: baseline;
`

const Small = styled.small`
  font-size: max(14px, .75rem);
  line-height: inherit;
  font-weight: normal;
  opacity: .7;
  vertical-align: baseline;
`

const PhoneLabel = ({ number, children, ...props }) => {
  const cleaned = ('' + number).replace(/\D/g, '');
  const match = cleaned.match(/^(\d+)?(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (!match) {
    return null;
  }

  return (
    <Root {...props}>
      <Small>{'+' + (match[1] || '38')}</Small>&thinsp;{match[2]}&thinsp;{match[3]}&thinsp;{match[4]}&thinsp;{match[5]}
    </Root>
  )
}

export default PhoneLabel;
