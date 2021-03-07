import React from "react"
import styled from "styled-components"

const Feedback = ({ data }) => {
  return (
    <StyledFeedback>
      <div className="feedback-container">
        {data.clientfeedback.map((client, key) => (
          <div
            // Temporary Only
            style={key > 2 ? { display: "none" } : {}}
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
  padding: 0 25px;
  margin-bottom: 100px;

  .client-feedback-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 35px;
    margin: 25px 0;
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

  @media (min-width: 1025px) {
    padding: 0;

    .feedback-container {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 0px;
      max-width: 1150px;
      margin: 0 auto;
    }

    .client-feedback-card {
      min-width: 275px;

      p {
        font-size: 14px;
      }
    }
  }
`
