import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(2.8, 4, 76.8, 150, 3.0)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
`
export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Blue = css`
  ${H1Base};
  color: ${colors.colorPrimary};
`

export const H1LightBlue = css`
  ${H1Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2, 2.4, 76.8, 150, 2.2)}
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
`

export const H2Orange = css`
  ${H2Base};
  color: ${colors.colorTertiary};
`

export const H2Blue = css`
  ${H2Base};
  color: ${colors.colorPrimary};
`
export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2LightBlue = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(1.8, 2, 76.8, 150, 1.9)}
  font-family: ${fonts.fontSecondary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`
export const H3Blue = css`
  ${H3Base};
  color: ${colors.colorPrimary};
`
export const H3LightBlue = css`
  ${H3Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(1.6, 1.8, 76.8, 160, 1.8)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
`

export const H4Blue = css`
  ${H4Base};
  color: ${colors.colorPrimary};
`

// Headline Styles #5 //
export const HCalloutBase = css`
  ${fontSizer(2.4, 3.4, 76.8, 160, 2.2)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
`

export const HCalloutBlue = css`
  ${HCalloutBase};
  color: ${colors.colorPrimary};
`

// Headline Styles #6 //
export const HIntroBase = css`
  ${fontSizer(2, 2.2, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
`

export const HIntroWhite = css`
  ${HIntroBase};
  color: ${colors.white};
`
