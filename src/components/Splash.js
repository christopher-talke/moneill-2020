import React from "react"
import Vector from "../assets/images/vector_1.svg"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import Button from "./Button"

const Splash = ({ data }) => {
  return (
    <StyledSplash>
      <div>
        <Img
          fixed={data.mainimage.imageFile.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
      </div>
      <div id="splash-info-container">
        <div id="splash-info">
          <p className="text-thin">Hi there,</p>
          <h1>I'm Mark O'Neill</h1>
          <div dangerouslySetInnerHTML={{ __html: data.mainblurb }}></div>
          <a href="#my-treatments">
            <Button dark>See My Treatments</Button>
          </a>
          <a id="contact-me-button" href="#contact-me">
            <Button>Contact Me</Button>
          </a>
        </div>
      </div>
    </StyledSplash>
  )
}

const StyledSplash = styled.section`
  position: relative;
  padding: 50px 25px;
  padding-bottom: 0;
  z-index: 40;

  &::before {
    position: absolute;
    z-index: 25;
    content: "";
    height: 750px;
    width: 750px;
    top: -100px;
    right: -75px;
    display: none; /* Temporary */
    background-image: url(${Vector});
    background-size: contain;
    background-repeat: no-repeat;
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }

  & .gatsby-image-wrapper,
  & img {
    position: relative;
    z-index: 50;
    height: 360px !important;
    width: 260px !important;
    box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);
  }

  #splash-info {
    position: relative;
    z-index: 25;
    margin: 25px 0;
    font-size: 14px;
    font-weight: 400;

    p.text-thin {
      font-size: 16px;
      margin-bottom: -5px;
    }

    h1 {
      font-size: 39px;
      font-weight: normal;
      margin: 0;
      margin-left: -2px;
    }

    div > p {
      font-weight: 300;
    }
  }

  & a:nth-of-type(1) {
    margin-top: 15px;
  }

  #contact-me-button button {
    margin-top: 15px;
    margin-left: 130px;
  }

  @media (min-width: 1025px) {
    display: flex;
    max-width: 1150px;
    margin: 0 auto;

    &::before {
      height: 900px;
      width: 900px;
      z-index: 25;
    }

    & .gatsby-image-wrapper,
    & img {
      width: 425px !important;
      height: 600px !important;
    }

    #splash-info-container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    #splash-info {
      width: 475px;
      margin: 0 auto;

      h1 {
        font-size: 43px;
      }

      #contact-me-button button {
        margin-left: 15px;
      }
    }
  }
`

export default Splash
