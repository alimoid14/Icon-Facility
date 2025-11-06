import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CiMenuBurger } from "react-icons/ci";

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
              className="text-white !text-2xl md:!text-3xl font-bold ml-12"
            >
              We’re Industrial Cleaners
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-2 !rounded-full !border-gray-500 !ring-0 active:!outline-none focus:outline-none text-gray-700 p-2 hover:!bg-gray-200 bg-white"
            >
              <CiMenuBurger />
            </Navbar.Toggle>
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
                <Nav className="justify-content-end flex-grow-1 flex flex-col gap-6 md:flex-row">
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
                    className="py-2 m-0  bg-transparent outline-none border-0 fw-bold hover:cursor-pointer"
                    style={{ width: "auto", display: "inline-block" }}
                  >
                    <option value="/services">Services</option>
                    <option value="/projects">Projects</option>
                    <option value="/contact">Contact</option>
                    <option value="/Team">Our Team</option>
                  </select>

                  {/* ✅ Search Bar */}
                  <Form className="flex gap-0 bg-white !rounded-full border border-gray-300">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="form-control-sm !roundeed-none !border-none"
                      aria-label="Search"
                    />
                    <Button
                      variant="outline-success"
                      className="text-black bg-white border-0 !rounded-none"
                    >
                      <FiSearch />
                    </Button>
                  </Form>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
