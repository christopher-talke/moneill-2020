import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

export const Treatment = ({ treatment }) => {
  return (
    <StyledTreatment>
      <div className="treatment-heading">
        <Img fixed={treatment.servicelogo.imageFile.childImageSharp.fixed} />
        <h3>{treatment.servicetitle}</h3>
      </div>
      <div
        className="treatment-blurb"
        dangerouslySetInnerHTML={{ __html: treatment.serviceblurb }}
      />
    </StyledTreatment>
  )
}

export default Treatment

const StyledTreatment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;

  &:nth-last-of-type(1) {
    margin: 0;
  }

  .treatment-heading {
    display: flex;
    align-content: center;
    margin-bottom: 25px;
  }

  h3 {
    margin: 0;
    margin-left: 20px;
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
    text-decoration: none;

    .read-more-arrow {
      margin-left: 5px;
      transition: margin 200ms;
    }
  }

  a:hover {
    .read-more-arrow {
      margin-left: 12.5px;
    }
  }

  @media (min-width: 1025px) {
    margin-bottom: 0px;

    &:nth-child(-n + 2) {
      margin-bottom: 70px;
    }
  }
`
