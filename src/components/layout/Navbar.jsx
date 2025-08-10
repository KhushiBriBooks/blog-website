"use client";
import Link from "next/link";
import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const BlogNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="light" variant="light" expanded={expanded} className="py-3 shadow-sm w-100">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <strong>MyBlog</strong>
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button className="login-btn" as={Link} href="/login">
              Login
            </Button>
            <Button className="signup-btn" as={Link} href="/signup">
              Signup
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
