import React from "react";

function Home() {
  // Generate multiple particles for the background
  const particles = Array.from({ length: 50 }).map((_, i) => (
    <div key={i} className="particle"></div>
  ));

  return (
    <div className="home-page-banner">
      {particles}

      <div className="banner-content">
        <h1>Welcome to Our Platform</h1>
        <p className="mb-4">
          Discover innovative solutions tailored to your needs. Our cutting-edge
          technology and exceptional service will transform your digital
          experience.
        </p>

        <div className="cta-buttons">
          <a href="#features" className="cta-button me-3">
            Explore Features
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
