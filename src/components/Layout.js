import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Nav from "./Nav"
// import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="[Mark O'Neill]" defer={false}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <main>
        <Nav />
        <div id="main-content">{children}</div>
      </main>
    </>
  )
}

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

  html, body { 
    margin: 0; 
    padding: 0; 
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background: white;
    overflow-x: hidden;
  }

  :root {
    --text-size: 14px;
    --main-colour: #004374;
    --secondary-colour: #797979;
  }

  main {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
  }

  #main-content {
    position: relative;
    z-index: 50;
    background: white;
    width: 325px;
    padding: 50px 25px 50px 25px;
    margin: 0px auto 150px auto;
  }

  @media (min-width: 1025px) {
    #main-content {
      background: white;
      width: 1150px;
      padding: 75px;
    }
  }
`

export default Layout
