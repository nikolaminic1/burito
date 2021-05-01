import React, { useEffect, useRef } from "react";
import { MainDiv } from "../../Style/Landing/LandingStyle";
import logo from "../../Assets/logo crno beli.png";
import { LogoLoading } from "../../Style/MobileComponents/Style";
import { TimelineMax } from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";

let tl = new TimelineMax();

const Landing = () => {
  let lgo = useRef(null);
  let divy = useRef(null);

  useEffect(() => {
    console.log(lgo);
    tl.from(lgo, {
      x: "-400%",
      ease: Power3.easeInOut,
      duration: 1.2,
      opacity: 0,
    })
      .to(lgo, {
        x: "400%",
        ease: Power3.easeInOut,
        duration: 0.8,
        opacity: 0,
        delay: 1,
      })
      .to(divy, {
        duration: 0.5,
        backgroundColor: "transparent",
      });
  });

  return (
    <MainDiv ref={(el) => (divy = el)}>
      <LogoLoading ref={(el) => (lgo = el)} src={logo} alt="logo" />
    </MainDiv>
  );
};

export default Landing;
