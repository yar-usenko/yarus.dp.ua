import React from 'react'
import styled,  { createGlobalStyle }  from 'styled-components'
import Header from '../components/Header.jsx'
import MainMenu from '../components/MainMenu.jsx'
import Footer from '../components/Footer.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  :root {
    font-family: system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5;

    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;

    width: 100%;
    height: 100%;
    min-height: 100%;

    overflow-y: scroll;
  }

  #∇ {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: baseline;
  }
`

const Root = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`

const Layout = ({ children }) => (
  <Root>
    <GlobalStyle />
    <Header />
    <MainMenu />
    <Main>{children}</Main>
    <Footer />
  </Root>
)

export default Layout;
