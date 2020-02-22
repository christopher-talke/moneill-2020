import React from "react"
import styled from "styled-components"

const Feedback = ({ data }) => {
  console.log(data)
  return (
    <StyledFeedback>
      <div className="feedback-container">
        {data.clientfeedback.map((client, key) => (
          <div
            className="client-feedback-card"
            key={`${client.fullname}-${key}`}
          >
            <p>"{client.feedback}"</p>
            <h5>{client.fullname}</h5>
          </div>
        ))}
      </div>
    </StyledFeedback>
  )
}

export default Feedback

const StyledFeedback = styled.section`
  position: relative;
  z-index: 50;
  width: 100%;

  .client-feedback-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 35px;
    border: 1px solid #eaeaea;
    text-align: center;
    background: white;
    box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);

    p {
      margin-top: 0;
      font-family: Open Sans;
      font-style: italic;
      font-weight: 300;
      font-size: 16px;
    }

    h5 {
      margin-top: 4px;
      margin-bottom: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
    }
  }

  .client-feedback-card:nth-of-type(2) {
    margin: 50px 0;
  }

  @media (min-width: 1025px) {
    .feedback-container {
      display: flex;
      max-width: 1150px;
      margin: 0 auto;
    }

    .client-feedback-card {
      max-width: 350px;

      p {
        font-size: 14px;
      }
    }

    .client-feedback-card:nth-of-type(2) {
      margin: 0 50px;
    }
  }
`
