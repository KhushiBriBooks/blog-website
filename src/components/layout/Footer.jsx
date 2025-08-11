"use client";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaHeart,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container pt-4 pb-3 border-top overflow-hidden">
      <Container className="footer-content">
        <Row className="text-center text-md-start mb-3 justify-content-center">
          <Col xs={12} md={3} className="mb-3">
            <h6 className="fw-bold text-uppercase">About Blog</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-decoration-none text-muted">About</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Shop</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Work With Me</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h6 className="fw-bold text-uppercase">Explore</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-decoration-none text-muted">Recipes</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Fitness</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Healthy Living</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Blog</a></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h6 className="fw-bold text-uppercase">Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5 mt-2">
              <a href="#" className="text-muted"><FaFacebookF /></a>
              <a href="#" className="text-muted"><FaTwitter /></a>
              <a href="#" className="text-muted"><FaPinterestP /></a>
              <a href="#" className="text-muted"><FaHeart /></a>
              <a href="#" className="text-muted"><FaInstagram /></a>
              <a href="#" className="text-muted"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center small text-muted">
            © {new Date().getFullYear()} My Blog. All rights reserved. <br />
            Website Design by{" "}
            <a href="https://example.com" target="_blank" className="text-decoration-none">
              Khushi Jindal
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

