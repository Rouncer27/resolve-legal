import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageComponentGroups from "../components/PageComponentGroups"

const IndexPage = props => {
  const { components, seo, pageStyles } = props.data
  return (
    <Layout pagestyles={pageStyles}>
      <Seo title="Home" />
      <PageComponentGroups components={components} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seo: wpPage(slug: { eq: "home" }) {
      pageSeoData {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    pageStyles: wpPage(slug: { eq: "home" }) {
      acfPageStyles {
        backgroundGraphicActive
        heroImageTop
      }
    }

    components: wpPage(slug: { eq: "home" }) {
      acfMainTemplateFields {
        pageComponents {
          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroOne {
            fieldGroupName
            logoDisplay
            title
            titleTag
            buttonRequired
            buttonOneText
            buttonOneSlug
            secondButtonRequired
            secondButtonText
            secondButtonSlug
            image {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ImageByContent {
            fieldGroupName
            title
            titleTag
            content
            buttonRequired
            buttonText
            buttonSlug
            backgroundColor
            image {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentBlockOne {
            fieldGroupName
            leftTitle
            leftTitleTag
            leftContent
            rightTitle
            rightTitleTag
            rightContent
            rightButtonRequired
            rightButtonText
            rightButtonSlug
            backgroundColor
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ThreeColumnsContent {
            fieldGroupName
            columns {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1250)
                  }
                }
              }
              title
              content
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_SocialMediaIcons {
            fieldGroupName
            displaySocialMediaIcons
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Testimonials {
            fieldGroupName
            displayTestimonials
            testimonialImage {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
