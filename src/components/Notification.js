import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "./Button"

const Notification = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const health = window.localStorage.getItem("health-notification")
    if (health !== "understood") {
      setShow(true)
    }
  }, [show])

  if (show === false) {
    return ""
  }

  return (
    <StyledNotification id="notification-bar" show={show}>
      {console.log(show)}
      <div>
        <p>
          The contents of the Mark O'Neill site is not intended to be a
          substitute for professional medical advice, diagnosis, or treatment.
          Always seek the advice of your physician or other qualified health
          provider with any questions you may have regarding a medical
          condition. Never disregard professional medical advice or delay in
          seeking it because of something you have read on this website! If you
          think you may have a medical emergency, call your doctor or emergency
          services immediately.
        </p>
        <Button
          onClick={() => {
            document.getElementById("notification-bar").style.display = "none"
            localStorage.setItem("health-notification", "understood")
          }}
        >
          I Understand
        </Button>
      </div>
    </StyledNotification>
  )
}

export default Notification

const StyledNotification = styled.section`
  display: ${({ open }) => (open ? "none" : "auto")};
  height: auto;
  padding: 10px;
  background: black;
  color: white;

  div {
    margin: 0 auto;
    max-width: 1150px;
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-template-rows: 1fr;
    align-items: center;

    p {
      font-size: 12px;
      margin: 0;
    }

    button {
      margin-top: 0;
      margin-left: 15px;
    }
  }
`
