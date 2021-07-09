import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, Nav1Gold } from "../../../../styles/helpers"

import HeaderSubTwoMenu from "./HeaderSubTwoMenu"

const HeaderSubMenuItem = ({ item, handleIsActiveOffBlur, isLast }) => {
  console.log("CHILD ITEMS:", item.childItems.nodes)

  const [subActive, setSubActive] = useState(false)

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")

  const handleDropDownBlur = () => {
    if (!isLast) return
    handleIsActiveOffBlur()
  }

  return (
    <HeaderSubMenuItemStyled>
      <Link
        className="subMenuItem"
        to={`/${slug}`}
        onBlur={handleDropDownBlur}
        onMouseEnter={handleIsActiveOn}
        onMouseLeave={handleIsActiveOff}
      >
        {item.label}
        {item.childItems.nodes.length > 0 && (
          <HeaderSubTwoMenu
            subactive={subActive}
            items={item.childItems.nodes}
          />
        )}
      </Link>
    </HeaderSubMenuItemStyled>
  )
}

const HeaderSubMenuItemStyled = styled.li`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;

  a.subMenuItem {
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
`

export default HeaderSubMenuItem
