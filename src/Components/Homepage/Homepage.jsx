import React, { useEffect } from "react";

import "../../Styles/Homepage/Homepage.css";

const Homepage = () => {
  const typeEffect = () => {
    let i = 0;
    let text = "Welcome to my mock e-commerce website.";
    let speed = 20;
    const typeWriter = () => {
      if (i < text.length) {
        if (
          !window.location.toString().includes("catalog") &&
          !window.location.toString().includes("cart")
        ) {
          document.querySelector(".main-text").textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
    };
    typeWriter();
  };

  useEffect(() => {
    typeEffect();
  }, []);

  return (
    <main aria-label="Home Section">
      <h1>Homepage</h1>
      <p className="main-text"></p>
    </main>
  );
};

export default Homepage;
