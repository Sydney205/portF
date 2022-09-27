import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { HashLink } from "react-router-hash-link";
import { FaChevronUp } from "react-icons/fa";

function Home() {
  const [scrollArr, setScrollArr] = useState(true);

  const appear = () => {
    if (window.scrollY >= 1) {
      setScrollArr(false);
    } else {
      setScrollArr(true);
    }
  };

  useEffect(() => {
    appear();
    window.addEventListener("scroll", appear);
  });
  return (
    <section className="home-wrapper" id="home-section">
      <div className="container text-center" id="home-main-info">
        <h1 class="display-1">
          Dieke <span>Sydney</span>
        </h1>
        <br />
        <p className="display-6">&#123; Software Engineer &#125;</p>{" "}
        <Typed
          className="display-6 typed-text"
          strings={["Web Development", "FrontEnd and BackEnd", "UI/UX Animations"]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />{" "}
        <br />
        <button>
          <HashLink to="#about-section">About ME!</HashLink>
        </button>
        <div className={scrollArr ? "scroll-arr" : "offscreen"}>
          <FaChevronUp color="white" size={'2rem'}/>
        </div>
      </div>
    </section>
  );
}

export default Home;
