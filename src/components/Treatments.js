import React from "react"
import styled from "styled-components"
import Treatment from "./Treatment"

const Treatments = ({ data }) => {
  return (
    <StyledTreatments>
      {data.servicesgroup.map(treatment => (
        <Treatment treatment={treatment} />
      ))}
    </StyledTreatments>
  )
}

export default Treatments

const StyledTreatments = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 150px;
  grid-row-gap: 70px;
  margin: 100px auto;
  padding: 0 25px;
  max-width: 1150px;

  &::before {
    position: absolute;
    content: "";
    height: 1250px;
    width: 500px;
    right: 55%;
    top: 10%;
    border-radius: 50%;
    background: rgba(159, 218, 237, 0.15);
    z-index: 25;
  }

  @media (min-width: 1025px) {
    &::before {
      height: 900px;
      width: 900px;
      right: 80%;
      top: -10%;
    }
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
