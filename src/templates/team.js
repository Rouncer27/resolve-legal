import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { colors, H1Gold, H2Gold, standardWrapper } from "../styles/helpers"

import Wysiwyg from "../components/PageComponents/Wysiwyg"

const Team = props => {
  const { member, allTeams } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  const imageDisplay = getImage(
    member.acfTeamMembers.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = member.acfTeamMembers.image.altText
  return (
    <Layout>
      <Seo />
      <TeamMember>
        <section>
          <div className="wrapper">
            <div className="image">
              <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
            </div>
            <div className="title">
              <div className="title__name">
                <h2>{member.acfTeamMembers.title}</h2>
              </div>
            </div>
          </div>
          <article>
            <div className="wrapper-bio">
              <div className="name-bio">
                <h1>{member.acfTeamMembers.name}</h1>
              </div>
              <div className="content-bio">
                <Wysiwyg
                  fontsize="small"
                  data={{ wysiwyg: member.acfTeamMembers.bio }}
                />
              </div>
            </div>
          </article>
        </section>
      </TeamMember>
    </Layout>
  )
}

const TeamMember = styled.main`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .wrapper-bio {
    ${standardWrapper};
    margin: auto;

    .content-bio {
      .wysiwygContent {
        max-width: 100% !important;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      a,
      li {
        color: ${colors.white};
      }
    }

    .name-bio {
      width: 100%;
      h1 {
        ${H1Gold};
      }
    }
  }

  .image {
    width: 65%;
    margin-right: auto;
    margin-left: 0;

    @media (min-width: 768px) {
      width: 20%;
    }
  }

  .title {
    width: 100%;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    @media (min-width: 768px) {
      width: calc(80% - 4rem);
      margin-left: 4rem;
      margin-bottom: 1rem;
    }

    h1,
    h2 {
      ${H2Gold};
    }
  }
`

export const query = graphql`
  query singleTeamQuery($slug: String!) {
    member: wpTeamMember(slug: { eq: $slug }) {
      title
      id
      date
      slug
      acfTeamMembers {
        bio
        name
        subTitle
        title
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
    }

    allTeams: allWpTeamMember {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Team
