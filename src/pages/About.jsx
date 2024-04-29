import React from "react";

function About() {
  return (
    <div className="align-content">
      <h3 className="text-3xl">
        DummyJSON is your go-to free online REST API for instantly generating
        placeholder data without the hassle of setting up a server. Perfect for
        front-end development, teaching, testing, and prototyping! Explore the
        detailed documentation at{" "}
        <a
          className="no-underline text-cyan-600"
          href="https://dummyjson.com/docs"
        >
          DummyJSON/Docs
        </a>{" "}
        for quick samples.
      </h3>
    </div>
  );
}

export default About;
