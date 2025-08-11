"use client";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import '@/app/globals.css';

const Subscription = () => {
  return (
    <section className="d-flex flex-lg-column flex-wrap blog-subscription-section w-25">
      <div className=" w-100 blog-sub-image position-relative">
        <Image
          src="/images/chef.jpg"
          alt="woman cooking"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="d-flex flex-column justify-content-center p-3 blog-subscription-form">
        <h4 className="fw-bold">Subscribe to get my latest recipes!</h4>
        <p>You'll also get a free printable PDF of our 3 Day Clean Eating Meal Plan & Shopping List!</p>
        <Form className="d-flex flex-column gap-2">
          <div className="d-flex flex-column gap-3">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="email" placeholder="Email" />
          </div>
          <Button variant="dark" className="w-50 d-block m-auto">
            Subscribe
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Subscription;