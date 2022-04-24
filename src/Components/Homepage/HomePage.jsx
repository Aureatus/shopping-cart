import React, { useEffect } from "react";

import "../../Styles/Homepage/HomePage.css";

const HomePage = () => {
  const typeEffect = () => {
    let i = 0;
    let text = "Welcome to my mock e-commerce website.";
    let speed = 20;
    const typeWriter = () => {
      const regexCart = /cart$/;
      if (i < text.length) {
        if (
          !window.location.toString().includes("catalog") &&
          !window.location.toString().match(regexCart)
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

export default HomePage;
