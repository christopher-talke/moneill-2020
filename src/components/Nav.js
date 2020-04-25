import React from "react"
import styled from "styled-components"

const Nav = ({ opacity }) => {
  return (
    <StyledNav>
      <div id="logo">Mark O'Neill</div>
      <div id="hamburger">
        <div>|||</div>
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
    width: 1300px;
    #logo,
    #hamburger {
      font-size: 26px;
    }
  }
`

export default Nav
