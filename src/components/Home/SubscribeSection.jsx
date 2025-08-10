"use client";
import Image from "next/image";
import { Container, Form, Button } from "react-bootstrap";

const SubscribeSection = () => {
  return (
    <section className=" text-dark pt-5 border-top px-1 subscribe-section w-75">
      <Container className="mb-5">
        <div className="d-flex align-items-center justify-content-center ">
          <Image
            src="/images/chef.jpg"
            alt="Woman Cooking"
            width={350}
            height={350}
            className="ms-1 home-subscribe-section-image"
          />

          <div className="subscribe-form p-5">
            <div className="w-75 d-flex flex-column justify-content-center mt-3 subscribe-form-heading">
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

        <div className="d-flex flex-column align-items-center mt-5">
          <p className="fs-5 text-muted fw-bold">AS SEEN IN</p>
          <div className="d-flex justify-content-center flex-wrap gap-5 mt-2 home-subscribe-seen-container">
            <Image src="/images/self.png" alt="SELF" width={80} height={50} />
            <Image src="/images/buzzfeed.png" alt="BuzzFeed" width={90} height={40} />
            <Image src="/images/huffpost.png" alt="HuffPost" width={100} height={30} />
            <Image src="/images/shape.webp" alt="Shape" width={80} height={30} />
            <Image src="/images/good.jpg" alt="Good Housekeeping" width={140} height={55} />
            <Image src="/images/brit-co.webp" alt="Brit+Co" width={100} height={30} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeSection;
