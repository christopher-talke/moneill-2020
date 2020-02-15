import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Nav from "./Nav"
// import Footer from "./Footer"

const Layout = ({ children }) => {
  const [opacity, setOpacity] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setOpacity(!opacity)
    }, 1000 * 20)
  }, [opacity, setOpacity])

  return (
    <>
      <Helmet title="[Mark O'Neill]" defer={false}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle opacity={opacity} />
      <main>
        <Nav opacity={opacity} />
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
  }

  :root {
    --text-size: 14px;
    --main-colour: #004374;
    --secondary-colour: #797979;
  }

  main::after,
  main::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    width: 100%;
    transition: all 15s;
  }

  main::after {
    background: linear-gradient(90deg, rgba(95,192,223,1) 0%, rgba(255,192,192,1) 100%);
    opacity: ${({ opacity }) => (opacity ? "1" : "0")};
  }

  main::before {
    background: linear-gradient(90deg, rgba(255,192,192,1) 0%, rgba(95,192,223,1) 100%);
    opacity: ${({ opacity }) => (opacity ? "0" : "1")};
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
