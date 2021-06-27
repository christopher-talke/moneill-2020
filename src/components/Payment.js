import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Button from "../components/Button"

const Payment = () => {
  const [currency, setCurrency] = useState("AUD")
  const [amount, setAmount] = useState("0.00")
  const [description, setDescription] = useState("")
  const [requested, setRequested] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paramCurrency = params.get("currency")
    const paramAmount = params.get("amount")
    const paramDescription = params.get("description")
    const paramRequested = params.get("requested")

    setCurrency(paramCurrency || "")
    setAmount(paramAmount || "")
    setDescription(paramDescription || "")
    setRequested(paramRequested === "true" ? true : false)
  }, [])

  return (
    <StyledPayment>
      {requested ? (
        <>
          <p>
            Thank you for contacting me recently, as per our conversation please
            see below the agreed upon payment amount and description for my
            services / products.
          </p>
          <p>
            If you have any questions please do not hestitate to get in touch!
          </p>
        </>
      ) : (
        <p>
          Have we recently had a discussion regarding a service, or a product
          order? Feel free to enter in the amount you wish to pay, once ready
          click the button to proceed to PayPal to make your payment.
        </p>
      )}

      <div className="payment-container">
        <div>
          <label htmlFor="currency">
            {requested
              ? "Payment Currency"
              : "Select Your Currency (Default: AUD)"}
          </label>
          <div>
            <button
              onClick={() => (requested ? "" : setCurrency("AUD"))}
              className={currency === "AUD" && "active"}
            >
              AUD
            </button>
            <button
              onClick={() => (requested ? "" : setCurrency("USD"))}
              className={currency === "USD" && "active"}
            >
              USD
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="amount">
            {requested ? "Your Payment Amount" : "Enter Your Payment Amount"}
          </label>
          <div>
            <input
              type="number"
              value={amount}
              onChange={e => (requested ? "" : setAmount(e.target.value))}
              disabled={requested}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">Payment Description</label>
          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Enter a description for your payment here"
              value={description}
              onChange={e => (requested ? "" : setDescription(e.target.value))}
              disabled={requested}
            >
              {description}
            </textarea>
          </div>
        </div>

        <a
          href={`https://www.paypal.com/cgi-bin/webscr?business=mark@chamberlaincottage.com&cmd=_xclick&currency_code=${encodeURI(
            currency
          )}&amount=${encodeURI(
            amount
          )}&item_name=Custom_Online_Payment&memo=${encodeURI(
            description
          )}&return_url=https://www.markoneill.com.au`}
        >
          <Button dark>Continue</Button>
        </a>
      </div>
      <p>
        Again, if you have any questions please get in touch with me first
        before proceeding with a payment (see below contact form).
      </p>
    </StyledPayment>
  )
}

export default Payment

const StyledPayment = styled.section`
  min-height: 50vh;
  padding: 25px;
  text-align: center;

  p {
    max-width: 475px;
    margin: 0 auto;
    margin-top: 15px;
  }

  .payment-container {
    margin: 25px 0;
    text-align: center;

    & > div {
      margin: 0 auto;
      margin-bottom: 15px;
    }

    button {
      height: 40px;
      min-width: 100px;
      font-weight: 300;
      font-size: 16px;
      margin: 0 10px;
      padding: 5px 20px;
      border: none;
      box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);
      cursor: pointer;
      border: 1px solid #dbdbdb;
      background: white;
      color: #000;

      &.active {
        color: white;
        background: #000;
      }
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
      text-align: right;
    }

    label {
      font-weight: 300;
      font-size: 12px;
      align-self: flex-start;
      margin-bottom: 4px;
    }

    input {
      width: 250px;
      height: 20px;
    }

    textarea {
      width: 250px;
      height: 100px;
      resize: none;
    }

    input:disabled,
    textarea:disabled {
      background: #efefef;
      cursor: not-allowed;
    }
  }
`
