import React from "react";
import {
  MainDivSection2,
  StoneImage,
  Text1,
  DivUnderMain,
} from "../../Style/MobileComponents/Style";
import stoneImage from "../../Assets/blackstoneimage.jpg";
import MenuImageSlider from "./MenuImageSlider";

const SectionMobile2 = () => {
  return (
    <MainDivSection2>
      <StoneImage src={stoneImage} />
      <DivUnderMain>
        <h1 className="mainh1sec1">Akcijska ponuda</h1>
        <MenuImageSlider />
      </DivUnderMain>
    </MainDivSection2>
  );
};

export default SectionMobile2;
