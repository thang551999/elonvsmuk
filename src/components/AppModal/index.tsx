import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Modal } from 'antd';

type CustomModalProps = {
  type: 'info' | 'success' | 'warning' | 'error';
  visible: boolean;
  footer?: boolean;
  useMethod?: boolean;
  title: React.ReactNode;
  content: React.ReactNode;

  onOk?: () => void;
  onCancel?: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const AppModal: React.FC<CustomModalProps> = ({
  type,
  title,
  content,
  visible = false,
  useMethod = false,

  onOk,
  onCancel,
  setVisible,
  ...props
}) => {
  const showModal = () => setVisible(true);

  const handleOk = () => {
    setVisible(false);
    if (onOk) {
      onOk();
    }
  };

  const handleCancel = () => {
    setVisible(false);
    if (onCancel) {
      onCancel();
    }
  };

  useEffect(() => {
    if (visible) {
      showModal();
    }
  }, [visible]);

  useEffect(() => {
    if (useMethod && visible) {
      const method = Modal[type];
      method({
        title,
        content,
        onOk: handleOk,
        onCancel: handleCancel,
      });
    }
  }, [useMethod]);

  if (!useMethod) {
    return null;
  }

  return (
    <>
      {visible && (
        <Modal title={title} open={visible} onOk={handleOk} onCancel={handleCancel} {...props}>
          {content}
        </Modal>
      )}
    </>
  );
};

export default AppModal;
