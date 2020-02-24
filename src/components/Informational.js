import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Informational = ({ data }) => {
  return (
    <StyledInformation>
      {data.infosections.map((section, key) => (
        <StyledInformationCard {...section}>
          <div className="info-section-info">
            <h3>{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.blurb }} />
            <Link disable={section.link === "disable"}>
              {section.linktest}
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
          </div>
          <Img
            className="info-section-image"
            fluid={section.image.imageFile.childImageSharp.fluid}
          />
        </StyledInformationCard>
      ))}
    </StyledInformation>
  )
}

export default Informational

const StyledInformation = styled.div`
  margin: 25px 0;
  padding: 0 25px;

  @media (min-width: 1025px) {
    max-width: 950px;
    margin: 0 auto;
  }
`
const StyledInformationCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 75px;

  .info-section-image {
    grid-area: 1 / 1 / 2 / 2;
  }

  .info-section-info {
    grid-area: 2 / 1 / 3 / 2;

    h3 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
    }

    div {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      margin-bottom: 25px;
    }

    a {
      color: #009ccd;
      text-decoration: none;
      display: ${({ link }) => (link === "false" ? "none" : "")};

      .read-more-arrow {
        margin-left: 5px;
        transition: margin 200ms;
      }
    }
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 437.5px);
    grid-template-rows: auto;
    grid-column-gap: 75px;
    grid-row-gap: 75px;

    .info-section-image {
      grid-area: ${({ orientation }) =>
        orientation !== null ? "1 / 1 / 2 / 2" : "1 / 2 / 2 / 3"};
      text-align: center;
    }

    .info-section-info {
      width: 450px;
      grid-area: ${({ orientation }) =>
        orientation !== null ? "1 / 2 / 2 / 3" : "1 / 1 / 2 / 2"};

      h3 {
        margin-top: 0;
      }
    }
  }
`
