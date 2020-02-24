import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

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
      <Link>
        Read More
        <svg
          className="read-more-arrow"
          width="16"
          height="10"
          viewBox="0 0 16 8"
        >
          <path
            d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0L0 4.5Z"
            fill="#009CCD"
          />
        </svg>
      </Link>
    </StyledTreatment>
  )
}

export default Treatment

const StyledTreatment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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


  
`
