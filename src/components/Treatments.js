import React from "react"
import Treatment from "./Treatment"

const Treatments = () => {
  const treatments = [
    { title: "treatment" },
    { title: "treatment" },
    { title: "treatment" },
    { title: "treatment" },
  ]
  return (
    <div>
      {treatments.map(treatment => (
        <Treatment treatment={treatment} />
      ))}
    </div>
  )
}

export default Treatments
