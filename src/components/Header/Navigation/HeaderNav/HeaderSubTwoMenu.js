import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colors, Nav1Gold, Nav1Brown } from "../../../../styles/helpers"

const HeaderSubTwoMenu = ({ items, subactive }) => {
  console.log("HERE MAN: ", items)
  return (
    <HeaderSubTwoMenuStyled subactive={subactive}>
      {items.map(item => (
        <li>
          <Link to={`/${item.url}`}>{item.label}</Link>
        </li>
      ))}
    </HeaderSubTwoMenuStyled>
  )
}

const HeaderSubTwoMenuStyled = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  width: 37.5rem;
  background-color: ${colors.colorAccent};
  transition: all 0.3s ease-in;
  z-index: ${props => (props.subactive ? 10000 : -1)};
  opacity: ${props => (props.subactive ? 1 : 0)};

  li {
    a {
      ${Nav1Gold};
      position: relative;
      display: block;
      width: 100%;
      padding: 0.5rem 1.5rem;
      border: none;
      text-align: left;

      &[aria-current="page"] {
        color: ${colors.white};
        box-shadow: 0 0.15rem 0 0 ${colors.colorTertiary};

        &:hover {
          border: none;
          color: ${colors.white};
          cursor: default;
        }
      }

      &:hover {
        border: none;
        background-color: ${colors.colorTertiary};
        color: ${colors.black};
      }
      &::before {
        display: block;
        position: absolute;
        bottom: 0rem;
        right: 1.5rem;
        left: 1.5rem;
        height: 0.1rem;
        background-color: ${colors.colorTertiary};
        content: "";
      }
    }
  }
`

export default HeaderSubTwoMenu
