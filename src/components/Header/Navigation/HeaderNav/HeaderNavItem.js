import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {
  colors,
  Nav1Brown,
  Nav1White,
  Nav1Slate,
  Btn1Green,
} from "../../../../styles/helpers"

import HeaderSubMenu from "./HeaderSubMenu"

const isBrowser = () => typeof window !== "undefined"

const HeaderNavItem = ({ item, top }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")
  const [subActive, setSubActive] = useState(false)

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  const needsRefresh = slug === "donate"

  return (
    <HeaderNavItemStyled top={top}>
      <Link
        to={`/${slug}`}
        onMouseEnter={handleIsActiveOn}
        onMouseLeave={handleIsActiveOff}
        onFocus={handleIsActiveOn}
      >
        {item.label}
      </Link>
      {item.subItems.length > 0 && (
        <>
          <span className="subIndicator">&#x25BC;</span>
          <HeaderSubMenu
            handleIsActiveOn={handleIsActiveOn}
            handleIsActiveOff={handleIsActiveOff}
            handleIsActiveOffBlur={handleIsActiveOff}
            subActive={subActive}
            items={item.subItems}
          />
        </>
      )}
    </HeaderNavItemStyled>
  )
}

const HeaderNavItemStyled = styled.li`
  padding: 0 1rem;
  position: relative;
  align-self: center;
  text-align: center;

  a,
  button {
    ${props => (props.top ? Nav1White : Nav1Brown)}
    margin: 0 auto;
    border-top: 0.2rem solid
      ${props => (props.top ? colors.colorAccent : colors.colorTertiary)};
    border-bottom: 0.2rem solid
      ${props => (props.top ? colors.colorAccent : colors.colorTertiary)};
    border-color: transparent;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &:hover {
      border-color: ${props =>
        props.top ? colors.colorAccent : colors.colorTertiary};
      color: ${props =>
        props.top ? colors.colorAccent : colors.colorTertiary};
    }

    &[aria-current="page"] {
      color: ${props =>
        props.top ? colors.colorAccent : colors.colorTertiary};
      border-color: ${colors.colorSecondary};

      &:hover {
        color: ${props => (props.top ? colors.colorAccent : colors.white)};
        cursor: default;
      }
    }

    &:focus {
      outline: 0.4rem solid #e0b65a;
      transition: all 0.35s ease-in-out;
    }
  }

  button {
    ${Btn1Green};
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    background-color: transparent;
  }

  .subIndicator {
    display: inline-block;
    color: ${colors.white};
    font-size: 1rem;
    padding-left: 0.5rem;
  }
`

export default HeaderNavItem
