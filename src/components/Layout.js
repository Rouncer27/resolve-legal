import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

import BgGraphicOne from "./Graphics/BgGraphicOne"

const Layout = ({ children, pagestyles }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          // heroactive={pagestyles?.acfPageStyles?.heroImageTop}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <MainStyled>{children}</MainStyled>
        <Footer />
      </ThemeProvider>
    </>
  )
}

const MainStyled = styled.main`
  position: relative;

  .bg-graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export default Layout
