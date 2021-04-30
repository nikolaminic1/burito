import React from "react";
import {
  ImageSection1,
  MainDivSection1,
  MainDivSection2,
  Section1Text,
  Section1TextDiv,
} from "../../Style/MobileComponents/Style";
import imageSection1src from "../../Assets/imagesection1.jpg";
import { TimelineMax } from "gsap/gsap-core";
import { useEffect } from "react";
import { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
let tl = new TimelineMax();

const SectionMobile1 = () => {
  let text1 = useRef(null);

  useEffect(() => {
    tl.from(text1, {
      y: "100%",
      ease: Power3.easeInOut,
      duration: 0.6,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <MainDivSection1>
        <ImageSection1 src={imageSection1src} alt="imagesection1" />
        <Section1TextDiv>
          <Section1Text ref={(el) => (text1 = el)}>
            Lorem Ipsum is simply
          </Section1Text>
        </Section1TextDiv>
      </MainDivSection1>
    </div>
  );
};

export default SectionMobile1;
