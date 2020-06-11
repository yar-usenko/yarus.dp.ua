import React from 'react';
import styled from 'styled-components';
import LinkBase from '../components/Link.jsx'

const Root = styled.nav`
  display: block;
  font-size: 0.8rem;
  line-height: 1rem;
  min-height: 1rem;
  color: #999;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  display: flex;
  align-items: baseline;

  &:not(:last-child)::after {
    display: block;
    margin-left: .75ch;
    margin-right: .75ch;

    width: 6px;
    height: 8px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIGZpbGw9IiNiMGIwYjAiIHBvaW50cz0iMS42MDMsMC44MDIgNC43OTksNCAxLjYwMyw3LjE5NyAyLjQwMiw3Ljk5NiA2LjM5Niw0IDIuNDAyLDAuMDA0Ii8+PC9zdmc+) 0 0 no-repeat;
    content: '';
  }
`

const Link = styled(LinkBase)`
  display: block;
  color: inherit;
`

const Breadcrumbs = ({ items, ...props }) => (
  <Root {...props}>
    {items && items.length && (
      <List>
        {items.map(({ title, slug }) => (
          <Item key={title + '-' + slug}>
            <Link to={slug}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
    )}
  </Root>
)

export default Breadcrumbs;
