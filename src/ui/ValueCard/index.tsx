import styles from './value-card.module.scss'
import { FC } from 'react'

interface ValueCardCustomStyles {
  width?: string
  height?: string
  padding?: string
  margin?: string
  imgWidth?: string
  imgHeight?: string
}

interface ValueCardProps {
  text?: string
  imgSrc?: string
  children?: React.ReactNode
  onClick?: () => void
  onErrorImg?: string
  disabled?: boolean
  customStyles?: ValueCardCustomStyles
}

const ValueCard: FC<ValueCardProps> = ({
  text,
  imgSrc,
  children,
  onClick,
  onErrorImg,
  disabled = false,
  customStyles = {},
}) => {
  const {
    width = '100%',
    height = '65px',
    padding = '0',
    margin = '0',
    imgWidth = '50px',
    imgHeight = '50px',
  } = customStyles

  return (
    <button
      className={styles['value-card']}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height, padding, margin }}
    >
      {children || (
        <>
        <div className={styles['image-text-wrapper']}>
          <div className={styles['image']}>
            {imgSrc && (
              <img
                src={imgSrc}
                alt={text}
                loading='lazy'
                style={{ width: imgWidth, height: imgHeight }}
                onError={(e) => {
                  if (onErrorImg) (e.target as HTMLImageElement).src = onErrorImg
                }}
              />
            )}
          </div>
          <span className={styles['text']}>{text}</span>
        </div>
        </>
      )}
    </button>
  )
}

export { ValueCard }