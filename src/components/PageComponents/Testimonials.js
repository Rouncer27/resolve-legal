import React from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import TestimonialsSlider from "./TestimonialsSlider"

const getData = graphql`
  {
    testimonials: allWpTestimonial {
      edges {
        node {
          title
          testimonials {
            content
          }
        }
      }
    }
  }
`

const Testimonials = ({ data }) => {
  const testData = useStaticQuery(getData)
  const testimonials = testData.testimonials.edges
  if (!data.displayTestimonials) return null
  const heroImage = data.testimonialImage.localFile.childImageSharp.fluid
  return (
    <TestimonialsSection>
      <div>
        <TestimonialsSlider testimonials={testimonials} />
      </div>
      <div className="bgImage">
        <BGImg tag="div" fluid={heroImage} />
      </div>
    </TestimonialsSection>
  )
}

const TestimonialsSection = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 1025px) {
    height: 65rem;
  }

  .bgImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    z-index: 1;

    div {
      width: 100%;
      height: 100%;
    }
  }
`

export default Testimonials
