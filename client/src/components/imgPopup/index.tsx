import { ReactNode } from 'react';
import styles from './index.module.css';
import { CustomButton } from '../custom/custom-button';
import { Space } from 'antd';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal__overlay} onClick={handleOverlayClick}>
          <div className={styles.modal__contect} onClick={(e) => e.stopPropagation()}>
            {children}
            <Space>
              <CustomButton type="primary" onClick={onClose}>
                Close
              </CustomButton>
            </Space>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;