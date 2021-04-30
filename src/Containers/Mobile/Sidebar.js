import React, { useState } from "react";
import {
  HorisontalItem,
  HorisontalItemLast,
  LinkItem,
  ListOfItems,
  Logo,
  SidebarDiv,
} from "../../Style/MobileComponents/Style";
import logo from "../../Assets/logo crno beli.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

const Sidebar = (props) => {
  let linkItem1 = useRef(null);
  let linkItem2 = useRef(null);
  let linkItem3 = useRef(null);
  let linkItem4 = useRef(null);
  let linkItem5 = useRef(null);

  useEffect(() => {}, [props.isOpen]);

  return (
    <SidebarDiv isOpen={props.isOpen} onClick={props.toggle}>
      <div>
        <ListOfItems>
          <HorisontalItem>
            <LinkItem
              ref={(el) => {
                linkItem1 = el;
              }}
              onClick={props.toggle}
              to="/meni"
            >
              MENI
            </LinkItem>
          </HorisontalItem>
          <HorisontalItem>
            <LinkItem
              ref={(el) => {
                linkItem2 = el;
              }}
              onClick={props.toggle}
              to="/burito"
            >
              BURITO
            </LinkItem>
          </HorisontalItem>
          <HorisontalItem>
            <LinkItem
              ref={(el) => {
                linkItem3 = el;
              }}
              onClick={props.toggle}
              to="/gdesenalazimo"
            >
              GDE SE NALAZIMO
            </LinkItem>
          </HorisontalItem>
          <HorisontalItem>
            <LinkItem
              ref={(el) => {
                linkItem4 = el;
              }}
              onClick={props.toggle}
              to="/kontakt"
            >
              KONTAKT
            </LinkItem>
          </HorisontalItem>
          <HorisontalItemLast>
            <LinkItem
              ref={(el) => {
                linkItem5 = el;
              }}
              onClick={props.toggle}
              to="/onama"
            >
              O NAMA
            </LinkItem>
          </HorisontalItemLast>
        </ListOfItems>
      </div>
    </SidebarDiv>
  );
};
export default Sidebar;
