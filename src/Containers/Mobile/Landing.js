import React from "react";
import { MainDiv } from "../../Style/Landing/LandingStyle";
import logo from "../../Assets/logo crno beli.png";
import { LogoLoading } from "../../Style/MobileComponents/Style";

const Landing = () => {
  return (
    <MainDiv>
      <LogoLoading src={logo} alt="logo" />
    </MainDiv>
  );
};

export default Landing;
