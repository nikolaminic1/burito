import React from "react";
import Sidebar from "./Sidebar";

const MobileContainer = ({ toggle, isOpen }) => {
  return (
    <div>
      <Sidebar isOpen={isOpen} onClick={toggle} />
    </div>
  );
};

export default MobileContainer;
