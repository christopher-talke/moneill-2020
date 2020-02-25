import React from "react"
import styled from "styled-components"
import Button from "./Button"

const RemotePricing = ({ data }) => {
  return (
    <StyledPricingCards>
      <div className="pricingInfo">
        <h3>{data.title}</h3>
        <div
          className="blurb"
          dangerouslySetInnerHTML={{ __html: data.blurb }}
        />
      </div>
      <div className="pricingCards">
        {data.pricecards.map((value, index) => (
          <StyledPricingCard key={`${value.title}-${index}`}>
            <h3>{value.title}</h3>
            <h5>${value.price} (USD)</h5>
            <div
              className="preBlurb"
              dangerouslySetInnerHTML={{ __html: value.preblurb }}
            />
            <p className="inclusions">
              <strong>This includes the following</strong>
              <ul>
                {value.inclusions.map((inclusion, index) => (
                  <li key={`${inclusion}-${index}`}>{inclusion.inclusion}</li>
                ))}
              </ul>
            </p>
            <div
              className="preBlurb"
              dangerouslySetInnerHTML={{ __html: value.postblurb }}
            />
            <Button dark>Book Session</Button>
          </StyledPricingCard>
        ))}
      </div>
    </StyledPricingCards>
  )
}

export default RemotePricing

const StyledPricingCards = styled.section`
  margin: 100px auto;
  padding: 0 25px;

  .pricingInfo {
    text-align: center;

    .blurb {
      max-width: 525px;
      margin: 0 auto;
    }
  }

  .pricingCards {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 50px;
    margin-bottom: 75px;
  }

  @media (min-width: 1025px) {
    max-width: 950px;

    .pricingCards {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: auto;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      margin: 50px 0;
      justify-items: center;
    }
  }
`

const StyledPricingCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 285px;
  padding: 45px;
  border: 1px solid #eaeaea;
  text-align: center;
  background: white;
  box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);

  h3,
  h5 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  h5 {
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 0;
  }

  .inclusions {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  button {
    margin: 0 auto;
    margin-top: 25px;
  }
`
