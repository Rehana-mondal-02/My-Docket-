import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./firebaseConfig";
import "./Navbarcomp.css";

function Navbarcomp({ user }) {
  function handleOut() {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand
              style={{
                fontFamily: "cursive",
                fontWeight: "200px",
                color: "yellow",
              }}
            >
              📋Docket
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {user ? (
              <Button onClick={handleOut} variant="primary">
                Logout
              </Button>
            ) : (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>

        <Nav className="me-auto">
          <span className="guest">Hello {user ? user.email : "Guest!"}</span>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navbarcomp;
