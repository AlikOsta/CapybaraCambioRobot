  import styles from './modal.module.scss'
  import { ReactNode, FC } from 'react'
  
  interface ModalProps {
    isOpen: boolean
    onClose: () => void
    modalTitle?: string
    customStyle?: string
    children?: ReactNode
  }
  
  const Modal: FC<ModalProps> = ({
    isOpen,
    onClose,
    modalTitle,
    customStyle,
    children,
  }) => {
    if (!isOpen) return null

    return (
      <div className={styles['modal-overlay']} onClick={onClose}>
        <div
          className={`${styles['modal-window']} ${customStyle}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles['title-close-wrapper']}>
            <h2>{modalTitle}</h2>
            <button
              className={styles['close-btn']}
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  }
  
  export { Modal }