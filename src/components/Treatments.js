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
  grid-column-gap: 100px;
  grid-row-gap: 70px;
  margin: 100px auto;
  padding: 0 25px;

  @media (min-width: 1025px) {
    max-width: 950px;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
