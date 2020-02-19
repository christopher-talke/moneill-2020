import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Treatment = ({ treatment }) => {
  return (
    <StyledTreatment>
      <div className="treatment-heading">
        <h3>{treatment.title}</h3>
      </div>
      <div
        className="treatment-blurb"
        dangerouslySetInnerHTML={{ __html: treatment.blurb }}
      />
      <Link>Read More</Link>
    </StyledTreatment>
  )
}

export default Treatment

const StyledTreatment = styled.div`
  h3 {
    margin-left: 50px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }

  div.treatment-blurb {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 25px;
  }

  a {
    margin-top: 25px;
    color: #009ccd;
  }
`
