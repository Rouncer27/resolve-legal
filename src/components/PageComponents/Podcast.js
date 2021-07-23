import React from "react"
import styled from "styled-components"
import { medWrapper } from "../../styles/helpers"

const Podcast = ({ data }) => {
  return (
    <PodcastSection>
      <div className="wrapper">
        <h2>{data.title}</h2>
      </div>
    </PodcastSection>
  )
}

const PodcastSection = styled.section`
  .wrapper {
    ${medWrapper}
  }
`

export default Podcast
