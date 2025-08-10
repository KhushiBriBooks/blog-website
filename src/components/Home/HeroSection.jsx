"use client";
import Image from "next/image";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-post text-white mt-0">
      <div className="container">
        <div className="content-box ms-5">
          <p className="small fw-semibold text-uppercase mb-2">Tips & Tricks</p>
          <h1 className="fw-bold content-box-title mb-3">Green veggies with flavoured butter</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Image
                src="/images/author.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-circle me-2"
              />
              <div>
                <div className="fw-bold">Maggy Dawson</div>
                <small>May 13, 2019</small>
              </div>
            </div>

            <div className="d-flex gap-3 fs-5">
              <FaRegComment />
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
