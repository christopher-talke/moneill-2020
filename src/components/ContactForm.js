import React from "react"
import gql from "graphql-tag"
// import { Mutation } from "react-apollo"
import styled from "styled-components"

import Button from "./Button"

const ContactForm = () => {
  // const [fullName, setFullName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")
  // const [message, setMessage] = useState("")

  // const resetForm = () => {
  //   setFullName("")
  //   setEmail("")
  //   setPhoneNumber("")
  //   setMessage("")
  // }

  return (
    <StyledContactSection id="contact-me">
      <h3>Get in touch with me</h3>

      {/* <Mutation mutation={ENQUIRY_MUTATION}>
        {(createSubmission, { loading, error, data }) => ( */}
      <>
        <StyledContactForm
          onSubmit={async event => {
            event.preventDefault()
            // createSubmission({
            //   variables: {
            //     clientMutationId: 'enquiry-submission',
            //     fullName,
            //     email,
            //     phoneNumber,
            //     message
            //   }
            // })
            // resetForm()
          }}
        >
          {/* <div className="form-input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name..."
            value={fullName}
            onChange={ e => {
              setFullName(e.target.value)
            }}
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email Address..."
            value={email}
            onChange={ e => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Landline or Mobile Number..."
            value={phoneNumber}
            onChange={ e => {
              setPhoneNumber(e.target.value)
            }}
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
            onChange={ e => {
              setMessage(e.target.value)
            }}
          >{message}</textarea>
        </div> */}
          <a href="mailto:mark@chamberlaincottage.com&subject=New Enquiry&body=Hi Mark,">
            Email Me: mark@chamberlaincottage.com
          </a>
          {/* <a href="mailto:mark@chamberlaincottage.com">
            <Button dark>Email Me</Button>
          </a> */}
        </StyledContactForm>
      </>
      {/* )}
      </Mutation> */}
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

const ENQUIRY_MUTATION = gql`
  mutation CreateEnquiryMutation(
    $clientMutationId: String!
    $fullName: String!
    $email: String!
    $phoneNumber: String!
    $message: String!
  ) {
    createEnquiry(
      input: {
        clientMutationId: $clientMutationId
        fullName: $fullName
        email: $email
        phoneNumber: $phoneNumber
        message: $message
      }
    ) {
      data
      success
    }
  }
`
