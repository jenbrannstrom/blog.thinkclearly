import React from "react"
import { Navbar } from "react-bootstrap"
import logo from "../images/home/logo.png"

const Mainav: React.FC = () => {
  return (
    <>
      <Navbar bg="white">
        <Navbar.Brand href="https://blog.thinkclearly.uk/">
          <img
            src={logo}
            style={{ maxWidth: "100%", height: "auto" }}
            className="d-inline-block align-top"
            alt="health headlines"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Mainav
