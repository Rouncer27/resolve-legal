import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import {
  B1White,
  colors,
  fonts,
  H2Gold,
  medWrapper,
} from "../../styles/helpers"

const getData = graphql`
  {
    podcasts: allWpPodcastEpisode {
      edges {
        node {
          id
          slug
          title
          acfPodcastEpisode {
            episodeEmbed
          }
        }
      }
    }
  }
`

const Podcast = ({ data }) => {
  const podcastsData = useStaticQuery(getData)
  const podcasts = podcastsData.podcasts.edges

  const [activePodcast, setActivePodcast] = useState(podcasts[0])

  if (!data.displayPodcastEpisodes) return null

  const handleEpisodePick = epId => {
    const pickedEpisode = podcasts.findIndex(pod => pod.node.id === epId)
    setActivePodcast(podcasts[pickedEpisode])
  }

  return (
    <PodcastSection>
      <div className="wrapper">
        <div className="episode-list">
          <h2>Episode Listings</h2>
          {podcasts.map(podcast => {
            return (
              <div data-id={podcast.node.id} key={podcast.node.id}>
                <p onClick={() => handleEpisodePick(podcast.node.id)}>
                  {podcast.node.title}
                </p>
              </div>
            )
          })}
        </div>
        <div className="episode-current">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: activePodcast.node.acfPodcastEpisode.episodeEmbed,
              }}
            />
          </div>
        </div>
      </div>
    </PodcastSection>
  )
}

const PodcastSection = styled.section`
  .wrapper {
    ${medWrapper}
  }

  .episode-list {
    width: calc(100%);
    padding: 2rem 2rem 2rem 5rem;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: calc(30%);
    }

    h2 {
      ${H2Gold};
      padding-bottom: 2.5rem;
      font-family: ${fonts.fontSecondary};
    }

    p {
      ${B1White};
    }
  }

  .episode-current {
    width: calc(100%);
    padding: 0 2rem 2rem 7.5rem;

    @media (min-width: 768px) {
      width: calc(70%);
    }
  }
`

export default Podcast
