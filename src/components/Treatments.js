import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Treatment from "./Treatment"
import { treatmentData } from "../Mock.js"

const Treatments = () => {
  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    setTreatments(treatmentData)
  }, [])

  return (
    <StyledTreatments>
      {treatments.map(treatment => (
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
