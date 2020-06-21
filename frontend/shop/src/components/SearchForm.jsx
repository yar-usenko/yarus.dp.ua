import React from 'react'
import styled from 'styled-components'

const Root = styled.form`
  display: flex;
  background-color: #eee;
  font-size: 1.2rem;
  line-height: 2.5rem;
  border-radius: .25rem;
  overflow: hidden;
`

const Input = styled.input`
  flex: 1;
  outline: 0;
  font: inherit;
  background-color: transparent;
  margin-left: .75rem;
  margin-right: .75rem;
`

const Button = styled.button`
  padding-left: .5rem;
  padding-right: .5rem;
`

const SearchForm = ({ children, ...props }) => (
  <Root {...props} method="get" action="/search">
    <Input placeholder="Я ищу..." name="q" type="search" />
    <Button type="submit" >Найти</Button>
  </Root>
)

export default SearchForm;
