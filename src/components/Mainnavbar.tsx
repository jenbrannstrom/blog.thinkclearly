import React from "react"
import { Nav, Navbar } from "react-bootstrap"

// const links = [
//   {
//     item: "MEN'S HEALTH",
//     href: "#",
//   },
//   {
//     item: "WOMEN'S HEALTH",
//     href: "#",
//   },
//   {
//     item: "LATEST NEWS",
//     href: "#",
//   },
//   {
//     item: "NUTRITION",
//     href: "#",
//   },
//   {
//     item: "WEIGHT LOSS",
//     href: "",
//   },
//   {
//     item: "FITNESS",
//     href: "",
//   },
//   {
//     item: "SUPPLEMENTS",
//     href: "",
//   },
//   {
//     item: "CONTACT US",
//     href: "",
//   },
// ]

type Props = {
  Links: {
    navbarLinkName: string
    navbarLink: string
  }[]
}

const Mainnavbar: React.FC<Props> = ({ Links }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="main-navbar">
        <Navbar.Toggle className="nav-toggle" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {Links.map((link, index) => (
              <Nav.Link
                className="main-navlink"
                key={index}
                href={link.navbarLink}
              >
                {link.navbarLinkName}
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
