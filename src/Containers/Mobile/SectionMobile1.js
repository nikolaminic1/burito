import React, { useState } from "react";
import {
  ImageSection1,
  MainDivSection1,
  MainDivSection2,
  Section1Text,
  Section1TextDiv,
} from "../../Style/MobileComponents/Style";
import { Modal, Button } from "antd";

import imageSection1src from "../../Assets/imagesection1.jpg";
import { TimelineMax } from "gsap/gsap-core";
import { useEffect } from "react";
import { useRef } from "react";
import { Power3 } from "gsap/gsap-core";
let tl = new TimelineMax();

const SectionMobile1 = () => {
  let text1 = useRef(null);

  useEffect(() => {
    tl.from(text1, {
      y: "100%",
      ease: Power3.easeInOut,
      duration: 0.6,
      opacity: 0,
    });
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emailValue, setEmailValue] = useState({
    email: "",
  });

  const { email } = emailValue;

  const onChange = (e) => {
    setEmailValue({ ...emailValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailValue.email);
    setIsModalVisible(false);
  };

  const showModal = () => {
    console.log("asdasd");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("Newsletter");
      setIsModalVisible(true);
    }, 1000);
  }, []);

  const modalStyle = {};

  return (
    <div>
      <MainDivSection1>
        <ImageSection1 src={imageSection1src} alt="imagesection1" />
        <Section1TextDiv>
          <Section1Text ref={(el) => (text1 = el)}>
            Lorem Ipsum is simply
          </Section1Text>
        </Section1TextDiv>
      </MainDivSection1>

      <Modal
        bodyStyle={modalStyle}
        maskClosable={false}
        closable={true}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={(e) => onSubmit(e)}
        onCancel={handleCancel}
      >
        <h3>Enter email adress</h3>
        <input
          type="text"
          placeholder="enter email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
      </Modal>
    </div>
  );
};

export default SectionMobile1;
