import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Splash = () => {
  return (
    <StyledSplash>
      <div>
        <img
          src="http://www.markoneill.com.au/wp-content/uploads/2018/10/profile_contact.jpg"
          alt="mark-oneill"
        />
      </div>
      <div id="splash-info-container">
        <div id="splash-info">
          <p className="text-thin">Hi there,</p>
          <h1>I'm Mark O'Neill</h1>
          <div>
            <p>
              I am an Intuitive Herbalist, Clairvoyant, Medium, Counsellor and
              Hypnotherapist. For 30 years I have used my abilities to assist my
              clients to heal themselves.
            </p>
            <p>
              I have owned and operated 5 clinics seeing 100,000 clients from
              all walks of life from around the world. Given the advances in
              technology I can now reach a wider more like minded global
              community.
            </p>
          </div>
          <Button dark>See My Treatments</Button>
          <Button>Contact Me</Button>
        </div>
      </div>
    </StyledSplash>
  )
}

const StyledSplash = styled.section`
  position: relative;
  z-index: 50;

  /* Circle for Splash */
  &::before {
    position: absolute;
    content: "";
    height: 500px;
    width: 500px;
    right: -75%;
    top: 30.5%;
    border-radius: 50%;
    background: rgba(159, 218, 237, 0.15);
    z-index: 25;
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }

  & img {
    position: relative;
    z-index: 50;
    object-fit: cover;
    height: 360px;
    width: 260px;
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

  & button:nth-of-type(1) {
    margin-top: 15px;
  }

  & button:nth-of-type(2) {
    margin-top: 15px;
    margin-left: 130px;
  }

  @media (min-width: 1025px) {
    display: flex;

    &::before {
      height: 900px;
      width: 900px;
      right: -42.5%;
      top: -65%;
    }

    & img {
      width: 425px;
      height: 600px;
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

      button:nth-of-type(2) {
        margin-top: 0px;
        margin-left: 15px;
      }
    }
  }
`

export default Splash
