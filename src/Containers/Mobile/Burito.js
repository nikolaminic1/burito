import React, { useState } from "react";
import { Modal, Button } from "antd";

const Burito = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
  return (
    <div>
      <h1>Burito</h1>
      <h1>Burito</h1>
      <h1>Burito</h1>
      <h1>Burito</h1>
    </div>
  );
};

export default Burito;
