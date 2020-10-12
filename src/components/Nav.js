import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from "../components/Button"

const Nav = ({ opacity, toHome }) => {
  console.log(toHome)

  return (
    <StyledNav>
      {/* <div id="logo">Mark O'Neill</div> */}
      <div>
        {toHome ? (
          <Link to="/">
            <Button dark>Home</Button>
          </Link>
        ) : (
          <Link to="/pay-online">
            <Button dark>Pay Online</Button>
          </Link>
        )}
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: sticky;
  z-index: 50;
  width: 375px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  #logo {
    background: white;
    transition: color 15s;
    width: fit-content;
    padding: 7.5px;
    font-size: 22px;
    font-weight: bolder;
  }

  #hamburger {
    display: none;
    right: 0;
    background: white;
    transition: color 15s;
    letter-spacing: -5px;
    width: fit-content;
    padding: 7.5px;
    font-size: 22px;
    padding-bottom: 5px;
    padding-left: 15px;
    font-weight: bolder;

    div {
      transform: rotate(90deg);
      position: relative;
      bottom: 2px;
    }
  }

  @media (min-width: 1025px) {
    width: 1150px;
    #logo,
    #hamburger {
      font-size: 26px;
    }
  }
`

export default Nav
