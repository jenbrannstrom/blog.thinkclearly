import React from "react"
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap"
import logo from "../images/home/logo.png"

const links = [
  {
    item: "MEN'S HEALTH",
    href: "#",
  },
  {
    item: "WOMEN'S HEALTH",
    href: "#",
  },
  {
    item: "LATEST NEWS",
    href: "#",
  },
  {
    item: "NUTRITION",
    href: "#",
  },
  {
    item: "WEIGHT LOSS",
    href: "",
  },
  {
    item: "FITNESS",
    href: "",
  },
  {
    item: "SUPPLEMENTS",
    href: "",
  },
  {
    item: "CONTACT US",
    href: "",
  },
]

const Mainnavbar: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="main-navbar">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {links.map((link, index) => (
              <Nav.Link className="main-navlink" key={index} href={link.href}>
                {link.item}
              </Nav.Link>
            ))}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              {links.map((link, index) => (
                <NavDropdown.Item
                  className="main-navlink"
                  key={index}
                  href={link.href}
                >
                  {link.item}
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#foo">foo</Nav.Link>
            <Nav.Link href="#bar">bar</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#baz">baz</Nav.Link>
            <Nav.Link eventKey={2} href="#qux">
              qux
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  )
}

export default Mainnavbar
