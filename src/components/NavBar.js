import React from 'react'
import { Nav, StyledLink } from '../styled-components'

/** 
* @author
* @function NavBar
**/

export const NavBar = (props) => {
  return(
    <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posts/new">Add a post</StyledLink>
    </Nav>
   )

 }