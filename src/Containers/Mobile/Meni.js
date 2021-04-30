import React from "react";
import { LoginBackground } from "../../Style/MobileComponents/Style";
import MenuImageSlider2 from "./MenuImageSlider2";
import "./mobile.scss";

const Meni = () => {
  return (
    <div className="maindivmenu">
      <div>
        <h1>Meni</h1>
      </div>
      <div>
        <div>
          <h3>Burito</h3>
        </div>
        <MenuImageSlider2 />
      </div>
    </div>
  );
};

export default Meni;
