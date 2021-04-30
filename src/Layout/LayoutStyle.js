import styled from "styled-components";
import { Link } from "react-router-dom";

// export const Logo = styled(Link)`
//   width: 60%;
// `;

export const LogoImg = styled.img`
  position: absolute;
  padding: 20px;
  height: 120px;
`;

export const HeaderDiv = styled.div`
  background: ${({ isOpen }) => (isOpen ? "#F3DC0B" : "#F3DC0B")};
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "120px")};
  justify-content: space-between;
  transition: 0.4s ease-in-out;
`;

export const MenuIcon = styled.img`
  position: absolute;
  top: 25px;
  transform: translateY(50%)
    ${({ rotate }) => (rotate ? "rotate(335deg)" : "rotate(-25deg)")};
  right: 30px;
  width: 50px;
  transition: 0.4s ease-in-out;
`;
