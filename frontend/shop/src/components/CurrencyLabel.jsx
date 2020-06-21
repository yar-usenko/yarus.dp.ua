import React, { useMemo } from 'react';
import styled from 'styled-components';

const Root = styled.span`
  display: inline-block;
`

const Small = styled.small`
  font-size: max(14px, .75rem);
  line-height: inherit;
  font-weight: normal;
  opacity: .7;
  vertical-align: baseline;
`;

const CurrencyLabel = ({ children, value, currency = 'грн.', ...props }) => {
  let [money, count] = useMemo(() => {
    const [money, count] = parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).split('.')
    return [money.replace(/\,/g, '\u2009'), count]
  }, value);

  return (
    <Root {...props}>
      {money}
      <Small>.{count}</Small>
      {currency && "\u00A0" /* &nbsp; */}
      {currency && <Small>{currency}</Small>}
    </Root>
  )
}

export default CurrencyLabel;
