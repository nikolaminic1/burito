import React, { Fragment, useEffect, useState } from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const Layout = (props) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();
  let widthOfScreenMobile = 500;
  return (
    <Fragment>
      {width <= widthOfScreenMobile ? (
        <MobileLayout>{props.children}</MobileLayout>
      ) : (
        <DesktopLayout>{props.children}</DesktopLayout>
      )}
    </Fragment>
  );
};

export default Layout;
