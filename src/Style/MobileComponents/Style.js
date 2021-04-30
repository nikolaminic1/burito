import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";

export const SidebarDiv = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: calc(100vh - 120px);
  /* background: #f3dc0b; */
  color: black;
  z-index: 10;
  margin-top: 120px;
  padding-top: 30px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "100%")};
  left: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
  transition: 0.4s ease-in-out;
  transition-delay: 0.4s;
`;

export const Logo = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: 20px 20% 20px 20%;
`;

export const HorisontalItem = styled.li`
  font-size: 36px;
  align-items: center;
  text-align: center;
  color: black;
  margin: 10px 50px 10px 50px;
  padding-bottom: 5px;
  border-bottom: 3px solid black;
  font-family: "Bebas Neue";
  list-style-type: none;
`;
export const HorisontalItemLast = styled.li`
  font-size: 36px;
  align-items: center;
  text-align: center;
  color: black;
  margin: 10px 50px 10px 50px;
  padding-bottom: 5px;
  font-family: "Bebas Neue";
  list-style-type: none;
`;

export const LinkItem = styled(Link)`
  color: black;
  opacity: 1;
  text-decoration: none;

  &:active {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none !important;
  }
  a:hover {
    color: black;
    text-decoration: none !important;
  }
`;

export const ListOfItems = styled.ul`
  width: 100%;
  padding: 50px 0 0 0;
  margin: 0;
`;

export const ImageSection1 = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const MainDivSection1 = styled.div`
  /* position: relative; */
  height: calc(100vh);
  width: 100%;
  background: transparent;
`;

export const MainDivSection2 = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Section1TextDiv = styled.div`
  top: 30%;
  left: 30px;
  position: absolute;
`;

export const Section1Text = styled.span`
  display: inline-block;
  font-family: "Bebas Neue";
  color: #f7d913;
  color: white;
  font-size: 32px;
`;

export const LogoLoading = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 250px;
`;

export const StoneImage = styled.img`
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Text1 = styled.h3`
  color: #c2c2c2;
`;

export const DivUnderMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 160px 10px 100px 10px;
`;
