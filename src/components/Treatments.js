import React from "react"
import styled from "styled-components"
import Treatment from "./Treatment"

const Treatments = ({ data }) => {
  return (
    <StyledTreatments id="my-treatments">
      <div id="titlecontainer">
        <h3>My Treatments</h3>
      </div>
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
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 100px;
  margin: 100px auto;
  padding: 0 25px;

  div#titlecontainer {
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: center;
    max-width: 525px;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  @media (min-width: 1025px) {
    div#titlecontainer {
      grid-column-end: 3;
      text-align: center;
      max-width: 525px;
      margin: 0 auto;
      margin-bottom: 25px;
    }

    max-width: 950px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
  }
`
