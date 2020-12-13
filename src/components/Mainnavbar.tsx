import React from "react"
import { Nav, Navbar } from "react-bootstrap"

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
    </>
  )
}

export default Mainnavbar
