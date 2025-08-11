"use client";
import Image from "next/image";
import { Container, Form, Button } from "react-bootstrap";

const SubscribeSection = () => {
  return (
      <Container className="mb-5 text-dark pt-5 subscribe-section mt-5 w-100">
        <div className="d-flex align-items-center justify-content-center subscribe-section-cont1">
          <div className="subscribe-section-image">
            <Image
            src="/images/chef.jpg"
            alt="woman cooking"
            width={280}
            height={280}
            className="ms-1 home-subscribe-section-image w-100"
            style={{objectFit: 'cover'}}
          />
          </div>

          <div className="subscribe-form p-4 w-50">
            <div className="w-100 d-flex flex-column justify-content-center mt-3 subscribe-form-heading">
              <h4 className="fw-bold">Subscribe to get my latest recipes!</h4>
            <p>
              Subscribe to get new posts in your inbox! You'll also get a free
              printable PDF of our 3 Day Clean Eating Meal Plan & Shopping List!
            </p>
            <Form className="d-flex flex-column gap-2">
              <div className="d-flex gap-3">
                 <Form.Control type="text" placeholder="Name"/>
                <Form.Control type="email" placeholder="Email" />
              </div>
              <Button variant="dark" className="w-50 d-block m-auto home-subscribe-button">
                Subscribe
              </Button>
            </Form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mt-5 w-100">
          <p className="fs-3 text-muted fw-bold text-center">AS SEEN IN</p>
          <div className="d-flex justify-content-center flex-wrap mt-2 home-subscribe-seen-container">
            <Image src="/images/self.png" alt="self" width={80} height={50} />
            <Image src="/images/buzzfeed.png" alt="buzzfeed" width={90} height={40} />
            <Image src="/images/huffpost.png" alt="huffpost" width={100} height={30} />
            <Image src="/images/shape.webp" alt="shape" width={80} height={30} />
            <Image src="/images/good.jpg" alt="good housekeeping" width={140} height={55} />
            <Image src="/images/brit-co.webp" alt="brit+co" width={100} height={30} />
          </div>
        </div>
      </Container>
   
  );
};

export default SubscribeSection;
