import React from "react";
import { Modal } from "antd";

const BaseModal = ({
  visible,
  handleOk,
  handleCancel,
  title,
  children,
  okText,
  cancelText,
  okBtnHtmlType,
  formId,
  modalWidth,
  footer,
}) => {
  return (
    <>
      <Modal
        width={modalWidth ? modalWidth : 520}
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
        footer={footer}
        okButtonProps={{
          htmlType: okBtnHtmlType || "button",
          form: formId ? formId : null,
        }}
        forceRender
      >
        {children}
      </Modal>
    </>
  );
};

export default React.memo(BaseModal);
