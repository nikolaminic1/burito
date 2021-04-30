import React from "react";
import {
  MainDivSection2,
  StoneImage,
  Text1,
  DivUnderMain,
} from "../../Style/MobileComponents/Style";
import stoneImage from "../../Assets/blackstoneimage.jpg";
import MenuImageSlider from "./MenuImageSlider";
import { TimelineLite } from "gsap";

const SectionMobile3 = () => {
  const tl = new TimelineLite();

  return (
    <MainDivSection2>
      <StoneImage src={stoneImage} />
      <DivUnderMain>
        <h1>Najnovije u ponudi</h1>
        <MenuImageSlider />
      </DivUnderMain>
    </MainDivSection2>
  );
};

export default SectionMobile3;
