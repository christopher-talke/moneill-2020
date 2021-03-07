import React from 'react'
import styled from 'styled-components'

import { Link } from "gatsby"
import Button from "./Button"

function PayOnline() {
    return (
        <StyledPayOnline>
            <h3>Have I assisted you recently?</h3>
            <p className="payment-info">
                If I have recently quoted you for a consultation, or you have recently completed a consultation with me, then please feel free to use the below 'Pay Online' feature!
            </p>
            <Link to="/pay-online">
                <Button dark>Pay Online</Button>
            </Link>
        </StyledPayOnline>
    )
}

export default PayOnline


const StyledPayOnline = styled.section`
  margin: 0 auto;
  max-width: 950px;
  padding: 0 25px;
  text-align: center;

  & .payment-info {
      max-width: 600px;
      margin:25px auto;
  }
`