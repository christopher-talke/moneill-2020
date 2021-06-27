import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Button from "./Button"

const Request = () => {
  const [currency, setCurrency] = useState("AUD")
  const [amount, setAmount] = useState("0.00")
  const [description, setDescription] = useState("")
  const [url, setURL] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setURL(
      `${window.location.origin}/pay-online?currency=${encodeURI(
        currency
      )}&amount=${encodeURI(amount)}&description=${encodeURI(
        description
      )}&requested=true`
    )
  }, [currency, amount, description])

  const copyToClipboard = text => {
    const ta = document.createElement("textarea")
    ta.innerText = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand("copy")
    ta.remove()
  }

  const triggerCopy = () => {
    setCopied(true)
    copyToClipboard(url)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <StyledRequest>
      <p>
        Mark, just fill out the form below and then click on the 'Copy Link'
        button! This will produce a link that your customer can click once you
        have sent it to them, and pre-fill all of the details so they just have
        to pay!
      </p>

      <div className="payment-container">
        <div>
          <label htmlFor="currency">Select Your Currency (Default: AUD)</label>
          <div>
            <button
              onClick={() => setCurrency("AUD")}
              className={currency === "AUD" && "active"}
            >
              AUD
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={currency === "USD" && "active"}
            >
              USD
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="amount">Enter Your Payment Amount</label>
          <div>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
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
              onChange={e => setDescription(e.target.value)}
            >
              {description}
            </textarea>
          </div>
        </div>

        <Button dark={copied} light={copied} onClick={() => triggerCopy()}>
          {copied ? "Link Copied" : "Copy Link"}
        </Button>
      </div>
      <p>
        You can paste this into your email by clicking into the body of your
        email (where you write the letter), clicking on the 'Edit' dropdown at
        the top of your screen and clickg on 'Paste'.
      </p>
    </StyledRequest>
  )
}

export default Request

const StyledRequest = styled.section`
  min-height: 50vh;
  padding: 25px;
  text-align: center;

  p {
    max-width: 475px;
    margin: 0 auto;
    margin-top: 50px;
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
  }
`
