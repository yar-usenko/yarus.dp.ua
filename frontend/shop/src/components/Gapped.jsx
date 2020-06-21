import React from 'react';
import styled from 'styled-components'

const Root = styled.span`
  --gap: ${({ gap }) => (gap * .25) + 'rem'};

  display: inline-flex;
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  align-items: ${({ align }) => align};
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Item = styled.span`
  display: block;
  padding: 0;
  margin: 0 var(--gap);

  &:first-child {
    margin-top: 0;
    margin-left: 0;
  }

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`

const Delimiter = styled.span`
  font: inherit;
  opacity: .7;
`

const Gapped = ({ children, gap = 1, wrap = false, vertical = false, delimiter: propsDelimiter = null, align = 'baseline', ...props }) => {
  let delimiter;
  if (propsDelimiter) {
    delimiter = typeof propsDelimiter === 'string'
      ? (<Delimiter>{propsDelimiter}</Delimiter>)
      : propsDelimiter
  }

  const rendered = React.Children.toArray(children).map((child, index) => {
    return (
      <React.Fragment>
        {(index !== 0) && delimiter}
        <Item key={child.key || index}>
          {child}
        </Item>
      </React.Fragment>
    )
  })

  return (
    <Root gap={gap} wrap={wrap} vertical={vertical} align={align} {...props}>
      {rendered}
    </Root>
  )
}

export default Gapped;
