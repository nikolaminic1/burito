import React, { useEffect, useState } from "react";
import HomeDesktop from "../Desktop/Home";
import HomeMobile from "../Mobile/Home";

const Home = () => {
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
  let widthOfScreenMobile = 375;
  return (
    <div>{width <= widthOfScreenMobile ? <HomeMobile /> : <HomeDesktop />}</div>
  );
};

export default Home;
