'use client'
import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ContactClient = () => {
  return (
     <div className="container py-5">
      <div className="d-flex flex-column flex-lg-row gap-5 justify-content-between m-5">
        <div className="w-100 w-lg-50">
          <h2 className="mb-4" style={{ fontFamily: 'cursive', color: 'rgb(244, 182, 191)' }}>
            Contact Details
          </h2>
          <p><strong>Address:</strong> Alexandria, 32 Washingtorn str, 22303</p>
          <p>
            <strong>Phones:</strong>{' '}
            <span style={{ color: 'rgb(244, 182, 191)' }}>(555)123-4567</span>
          </p>
          <p>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:info@demolink.org" style={{ color: 'rgb(244, 182, 191)' }}>
              info@demolink.org
            </a>
          </p>
          <p>
            <strong>We are open:</strong> Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00
          </p>
        </div>

        <div className="w-100 w-lg-50">
          <h2 className="mb-4" style={{ fontFamily: 'cursive', color: 'rgb(244, 182, 191)' }}>
            Let's Get in Touch
          </h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Enter Your E-mail" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Enter Your Phone Number" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter Your Message"
              />
            </Form.Group>

            <Button
              type="submit"
              className="contact-form-btn"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactClient