import * as React from "react"
import styled from "styled-components"
import {
  H1Gold,
  H1Brown,
  H2Gold,
  H2Brown,
  H3Brown,
  H3Gold,
  B1Brown,
  B1White,
  B1Gold,
  colors,
  Nav1Brown,
  Nav1Gold,
} from "../styles/helpers"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Typo>
        <h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h1>

        <h2>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h2>
        <h2>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h2>

        <h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </Typo>
    </Layout>
  )
}

const Typo = styled.div`
  h1:first-of-type {
    ${H1Gold};
  }

  h1:last-of-type {
    ${H1Brown};
  }

  h2:first-of-type {
    ${H2Gold};
  }

  h2:last-of-type {
    ${H2Brown};
  }

  h3:first-of-type {
    ${H3Gold};
  }

  h3:last-of-type {
    ${H3Brown};
  }

  p:first-of-type {
    ${B1Gold};
  }

  p:nth-of-type(2) {
    ${B1White};
    background: ${colors.colorAccent};
  }

  p:last-of-type {
    ${B1Brown};
  }

  li:first-of-type {
    ${Nav1Brown};
  }

  li:last-of-type {
    ${Nav1Gold};
  }
`

export default IndexPage
