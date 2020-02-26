import React from "react"
import styled from "styled-components"
import ContactForm from "./ContactForm"

import Facebook from "../assets/images/facebook.svg"

const Footer = () => {
  return (
    <>
      <ContactForm />
      <StyledFooter>
        <div className="socials">
          <a href="/">
            <img src={Facebook} alt="Facebook Social Icon" />
          </a>
        </div>
        <p>
          Mark O’Neill © 2019 -{" "}
          <a
            href="https://admin.markoneill.com.au/wp-admin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>{" "}
          - Website by{" "}
          <a href="https://talke.dev" target="_blank" rel="noopener noreferrer">
            talke.dev
          </a>
        </p>
      </StyledFooter>
    </>
  )
}

export default Footer

const StyledFooter = styled.footer`
  margin: 100px auto;
  padding: 0 25px;
  text-align: center;
`
