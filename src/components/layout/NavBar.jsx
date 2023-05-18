import { Link } from "react-router-dom"

import { Container } from "./Container"

import logo from '../../img/costs_logo.png'

import { Nav, List, Item } from "../../styles/NavBar"

export const NavBar = () => {
  return(
    <>
      <Nav>
        <Container>
          <Link to='/'>
            <img src={logo} alt="Cost"/>
          </Link>
          <List>
            <Item>
              <Link to='/'>Home</Link>
            </Item>
            <Item>
              <Link to='/projects'>Projects</Link>
            </Item>
            <Item>
              <Link to='/company'>Company</Link>
            </Item>
            <Item>
              <Link to='/contact'>Contact</Link>
            </Item>
          </List>
        </Container>
      </Nav>
    </>
  )
}