import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  colors,
  H2Gold,
  standardWrapper,
  H4IntroGold,
  fonts,
  medWrapper,
} from "../../styles/helpers"

const getData = graphql`
  {
    team: allWpTeamMember {
      edges {
        node {
          slug
          id
          acfTeamMembers {
            name
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
      }
    }
  }
`

const TeamMembers = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const members = teamData.team.edges
  if (!data.display) return null
  console.log(members)

  return (
    <TeamMembersSection>
      <div className="wrapper">
        {members.map(member => {
          const imageDisplay = getImage(
            member.node.acfTeamMembers.image.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = member.node.acfTeamMembers.image.altText
          return (
            <Member to={`/our-team/${member.node.slug}`} key={member.node.id}>
              <div className="image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fixed"
                />
              </div>
              <div className="title">
                <h2>{member.node.acfTeamMembers.name}</h2>
                <h3>{member.node.acfTeamMembers.title}</h3>
              </div>
            </Member>
          )
        })}
      </div>
    </TeamMembersSection>
  )
}

const TeamMembersSection = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }
`

const Member = styled(Link)`
  position: relative;
  width: calc(100%);

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 3rem);
    margin: 1.5rem;
  }

  .title {
    margin-top: -1rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;

    h2 {
      ${H2Gold};
      margin: 0;
      font-family: ${fonts.fontSecondary};
    }

    h3 {
      ${H4IntroGold};
      margin: 0;
      text-transform: uppercase;
    }
  }
`

export default TeamMembers
