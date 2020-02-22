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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 150px;
  grid-row-gap: 70px;
  margin: 150px 0;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
