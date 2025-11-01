import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const styles = { textDecoration: "none", color: "#333" };
  const navigate = useNavigate();

  // Handle dropdown navigation
  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navb pe-5"
          style={{ height: "7vh" }}
        >
          <Container fluid>
            <Navbar.Brand
              href="/"
              className="text-white fs-6"
              style={{ marginLeft: "14%" }}
            >
              We’re Industrial Cleaners
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ICON Facility
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="text-white fw-bold"
                    style={styles}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className="text-white fw-bold"
                    style={styles}
                  >
                    About
                  </Nav.Link>

                  {/* ✅ Native Select Dropdown */}
                  <select
                    onChange={handleSelectChange}
                    defaultValue=""
                    className="form-select bg-transparent outline-none border-0 ms-2 md:ml-0 fw-bold "
                    style={{ width: "auto", display: "inline-block" }}
                  >
                    <option value="/services">Services</option>
                    <option value="/projects">Projects</option>
                    <option value="/contact">Contact</option>
                    <option value="/Team">Our Team</option>
                  </select>
                </Nav>

                {/* ✅ Search Bar */}
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1 form-control-sm mt-2 ms-1"
                    style={{ height: "25px" }}
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    className="text-white border-0"
                    size="sm"
                  >
                    <FontAwesomeIcon
                      className="bg-black p-[6px]"
                      icon={faMagnifyingGlass}
                    />
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
