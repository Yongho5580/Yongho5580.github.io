import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Your Travel</NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  background: transparent;
  height: 80px;
`

const NavLink = styled.div(Link)`

`
