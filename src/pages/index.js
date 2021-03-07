import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Splash from "../components/Splash"
import Treatments from "../components/Treatments"
import Feedback from "../components/Feedback"
import Informational from "../components/Informational"
import RemotePricing from "../components/RemotePricing"
import PayOnline from "../components/PayOnline"

export default ({ data }) => {
  const {
    homeLanding,
    homeServices,
    homeClientFeedback,
    homeInformationalSection,
    homeRemoteSupportPricing,
  } = data.wp.page
  return (
    <Layout toHome={false}>
      <Splash data={homeLanding} />
      <Treatments data={homeServices} />
      <Feedback data={homeClientFeedback} />
      <Informational data={homeInformationalSection} />
      <RemotePricing data={homeRemoteSupportPricing} />
      <PayOnline />
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    wp {
      page(id: "cGFnZTo5") {
        homeLanding {
          mainblurb
          mainimage {
            sourceUrl
            imageFile {
              childImageSharp {
                fixed(width: 425, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        homeServices {
          servicesgroup {
            servicetitle
            serviceblurb
            servicelogo {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 40, height: 40) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
        homeClientFeedback {
          clientfeedback {
            feedback
            fullname
          }
        }
        homeInformationalSection {
          infosections {
            title
            orientation
            blurb
            link
            linktest
            href
            image {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        homeRemoteSupportPricing {
          blurb
          fieldGroupName
          pricecards {
            title
            price
            preblurb
            inclusions {
              inclusion
            }
            postblurb
          }
          title
        }
      }
    }
  }
`
