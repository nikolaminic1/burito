import React, { Fragment, useState } from "react";
import { MenuData } from "../../Data/MenuData";
import "./mobile.scss";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const MenuImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = MenuData.length;

  const NextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const PrevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(MenuData) || MenuData.length <= 0) {
    return null;
  }

  return (
    <div className="flex-imageslider">
      <IoIosArrowDropleftCircle className="icon" onClick={PrevImage} />

      <div>
        {MenuData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && (
                <div>
                  <h4>{slide.nameOfDish}</h4>
                  <h5>{slide.description}</h5>
                  <img alt="burito" class="burito-img" src={slide.image}></img>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <IoIosArrowDroprightCircle className="icon" onClick={NextImage} />
    </div>
  );
};

export default MenuImageSlider;
