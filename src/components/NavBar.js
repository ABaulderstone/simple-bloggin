import React from 'react'
import { useGlobalState } from '../config/store'
import { Nav, StyledLink } from '../styled-components'

/** 
* @author
* @function NavBar
**/

export const NavBar = (props) => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    function handleLogOut() {
        dispatch({type:"removeLoggedInUser"})
        dispatch({type:"removeJWT"})
    }

  return(
    <Nav>
        <span>Hello {loggedInUser || "guest"}</span>
        {loggedInUser ? 
        (<StyledLink onClick={handleLogOut} to="/">Log Out</StyledLink>)
        : 
        (<StyledLink to="auth/login">Log In</StyledLink>)
        }
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posts/new">Add a post</StyledLink>
    </Nav>
   )

 }