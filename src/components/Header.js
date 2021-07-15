import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">myBooking</NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
`

const NavLink = styled(Link)`
  
`
