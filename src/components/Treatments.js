import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Treatment from "./Treatment"

const Treatments = ({ data }) => {
  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    const {
      clairvoyantblurb,
      clairvoyanttitle,
      clairvoyantlogo,
      counsellingblurb,
      counsellingtitle,
      counsellinglogo,
      herbalismblurb,
      herbalismtitle,
      herbalismlogo,
      hypnotherapyTitle,
      hypnotherapyblurb,
      hypnotherapylogo,
    } = data.servicesgroup

    setTreatments([
      { clairvoyantblurb, clairvoyanttitle, clairvoyantlogo },
      { counsellingblurb, counsellingtitle, counsellinglogo },
      { herbalismblurb, herbalismtitle, herbalismlogo },
      { hypnotherapyTitle, hypnotherapyblurb, hypnotherapylogo },
    ])
  }, [data, setTreatments])

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
