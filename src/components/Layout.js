import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Nav from "./Nav"
import Footer from "./Footer"

import "react-responsive-carousel/lib/styles/carousel.min.css"

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
        <Footer />
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

  body {
    position: relative;
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
  }

  h3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 25px;
  }

  @media (min-width: 1025px) {
    #main-content {
      background: white;
    }
  }
`

export default Layout
