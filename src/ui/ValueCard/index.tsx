import styles from './value-card.module.scss'
import { FC } from 'react'

interface ValueCardProps {
  id: string
  text: string
  imgSrc?: string
  onClick: () => void
  onErrorImg: string
  disabled?: boolean
}

const ValueCard: FC<ValueCardProps> = ({
  id,
  text,
  imgSrc,
  onClick,
  onErrorImg,
  disabled = false,
}) => {
  return (
    <button 
      id={id}
      className={styles['value-card']}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={styles['image-text-wrapper']}>
        <div className={styles['image']}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={text}
              style={{ width: '50px', height: '50px' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = onErrorImg
              }}
            />
          )}
        </div>
        <span className={styles['text']}>{text}</span>
      </div>
    </button>
  )
}

export { ValueCard }