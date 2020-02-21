import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Splash from "../components/Splash"
import Treatments from "../components/Treatments"
import Feedback from "../components/Feedback"

export default ({ data }) => {
  const { homeLanding, homeServices, homeClientFeedback } = data.wp.page
  return (
    <Layout>
      <Splash data={homeLanding} />
      <Treatments data={homeServices} />
      <Feedback data={homeClientFeedback} />
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
            clairvoyantblurb
            clairvoyanttitle
            clairvoyantlogo {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 75, height: 75) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            counsellingblurb
            counsellingtitle
            counsellinglogo {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 75, height: 75) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            herbalismblurb
            herbalismtitle
            herbalismlogo {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 75, height: 75) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            hypnotherapyTitle
            hypnotherapyblurb
            hypnotherapylogo {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 75, height: 75) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
        homeClientFeedback {
          clientfeedback {
            fullname
            feedback
          }
        }
      }
    }
  }
`
