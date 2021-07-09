import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  const { components, seo, pageStyles } = props.data
  return (
    <Layout pagestyles={pageStyles}>
      <Seo title={`Page Template`} />
      <PageComponentGroups components={components} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    seo: wpPage(id: { eq: $id }) {
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

    pageStyles: wpPage(id: { eq: $id }) {
      acfPageStyles {
        backgroundGraphicActive
        heroImageTop
      }
    }

    components: wpPage(id: { eq: $id }) {
      acfMainTemplateFields {
        pageComponents {
          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroOne {
            fieldGroupName
            logoDisplay
            subTitleDisplay
            subTitle
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_LinkBoxes {
            fieldGroupName
            boxes {
              title
              subTitle
              slug
              icon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1250)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CalloutAction {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
          }
        }
      }
    }
  }
`

export default Page
