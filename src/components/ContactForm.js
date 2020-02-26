import React from "react"
import styled from "styled-components"

import Button from "./Button"

const ContactForm = () => {
  return (
    <StyledContactSection>
      <h3>Get in touch with me</h3>
      <div className="blurb">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sunt.
          Fuga culpa eos quas veritatis ex qui asperiores! Labore alias
          praesentium voluptatibus laudantium quis perspiciatis, unde blanditiis
          neque odit eum.
        </p>
      </div>
      <StyledContactForm action="" method="post">
        <div className="form-input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name..."
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email Address..."
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Landline or Mobile Number..."
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="enquiry">Enquiry</label>
          <textarea
            name="enquiry"
            id="enquiry"
            cols="30"
            rows="10"
            placeholder="Insert your enquiry here..."
          ></textarea>
        </div>
        <Button dark>Submit Enquiry</Button>
      </StyledContactForm>
    </StyledContactSection>
  )
}

export default ContactForm

const StyledContactSection = styled.section`
  margin: 100px auto 0 auto;
  padding: 0 25px;
  text-align: center;

  .blurb {
    max-width: 525px;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    max-width: 950px;
  }
`

const StyledContactForm = styled.form`
  &,
  .form-input-group {
    display: flex;
    flex-direction: column;
  }

  .form-input-group {
    margin-top: 16px;

    label {
      font-weight: 300;
      font-size: 12px;
      align-self: flex-start;
      margin-bottom: 4px;
    }

    input,
    textarea {
      background: #ffffff;
      border: 1px solid #dddddd;
      padding: 5px;
      box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);
      font-family: "Open Sans", sans-serif;
    }

    input {
      height: 20px;
    }

    textarea {
      resize: none;
    }
  }

  button {
    margin: 32px auto 0 auto;
    max-width: 200px;
  }

  @media (min-width: 1025px) {
    margin: 0 auto;
    max-width: 450px;
  }
`
