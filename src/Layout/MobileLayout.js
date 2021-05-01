import React, { useState } from "react";
import logo from "../Assets/logo crno beli.png";
import { HeaderDiv, Logo, LogoImg, MenuIcon } from "./LayoutStyle";
import menuIcon from "../Assets/burrito.svg";
import Sidebar from "../Containers/Mobile/Sidebar";
import SectionMobile1 from "../Containers/Mobile/SectionMobile1";
import SectionMobile2 from "../Containers/Mobile/SectionMobile2";
import { Redirect, withRouter } from "react-router";
import { useEffect } from "react";
import "./style.scss";
import { useRef, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";

const MobileLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { y: pageYOffset } = useWindowScroll();

  useEffect(() => {
    if (scrollPosition < pageYOffset) {
      setIsScrolled(isScrolled);
      // console.log(isScrolled);
      // need to call function to show scrolling
    } else {
      setIsScrolled(false);
      // console.log(isScrolled);
    }

    // neeeeee radiiiiiii
    // console.log(pageYOffset);
    setScrollPosition(pageYOffset);
  }, [pageYOffset]);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIconRotate(!iconRotate);
  };

  useEffect(() => {
    console.log(window.pageYOffset);
  }, []);

  const returnHome = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    setIconRotate(!iconRotate);
    setTimeout(() => {
      props.history.push("/");
    }, 500);
  };
  return (
    <div>
      <HeaderDiv isOpen={isOpen} isScrolled={isScrolled}>
        <div className="logo-container">
          <LogoImg
            className="logo-img"
            onClick={returnHome}
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <MenuIcon
            onClick={toggle}
            rotate={iconRotate}
            src={menuIcon}
            alt="menu"
          />
        </div>
      </HeaderDiv>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div>{props.children}</div>
    </div>
  );
};

export default withRouter(MobileLayout);
