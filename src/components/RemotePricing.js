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
            <div>
              <h3>{value.title}</h3>
              {console.log(value.price)}
              {value.price === 0 || value.price === null ? (
                <h5>Price Upon Application (PoA)</h5>
              ) : (
                <h5>${value.price} (USD)</h5>
              )}
            </div>
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

            {value.price === 0 || value.price === null ? (
              <a href="#contact-me">
                <Button dark>Contact Me</Button>
              </a>
            ) : (
              <a
                href={`https://www.paypal.com/cgi-bin/webscr?business=mark@chamberlaincottage.com&cmd=_xclick&currency_code=USD&amount=${value.price}&item_name=${value.title}`}
              >
                <Button dark>Book Session</Button>
              </a>
            )}
          </StyledPricingCard>
        ))}
      </div>
      <p className="pricing-info">
        All pricing is inclusive of package handling and shipping. Methods of
        shipping vary depending on requirements, we typically operate with
        standard shipping if other methods are required additional fees may
        apply express, overnight, etc). International orders may require an
        additional 3-5 business days of processing time prior to shipment.
      </p>
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

  .pricing-info {
    font-size: 12px;
    color: gray;
    max-width: 650px;
    text-align: center;
    margin: 0 auto;
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
  justify-content: space-between;
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
