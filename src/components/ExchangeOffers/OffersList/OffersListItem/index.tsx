import styles from './offers-list-item.module.scss'
import { FC } from 'react'

interface OffersListItemProps {
  telegramURL: string
  logoURL: string
  exchangerTitle: string
  verification: string
  rateText: string
  delivery: string
}

const OffersListItem: FC<OffersListItemProps> = ({
  telegramURL,
  logoURL,
  exchangerTitle,
  verification,
  rateText,
  delivery,
}) => {
  return (
    <a       
      href={`${telegramURL}`}
      target='_blank'
      rel='noopener noreferrer'
      className={styles['offers-list-item']}
    >
      <div className={styles['lane-wrapper']}>
        <div className={styles['exchanger-wrapper']}>
          {logoURL && (
            <img
              src={`${logoURL}`}
              alt="logo"
              style={{
                width: "35px",
                height: "35px",

                borderRadius: "50%",
              }}
            />
          )}
          <h3>{exchangerTitle}</h3>
        </div>
        {verification === "on" && (
          <img
            src="./assets/images/verified.png"
            alt="Verified"
            style={{ width: "35px", height: "35px" }}
          />
        )}
      </div>

      <div className={styles['separator']}></div>

      <div className={styles['lane-wrapper']}>
        <h2>{rateText}</h2>
        {delivery === "on" && (
          <img
            src="./assets/images/delivery.png"
            alt="Delivery"
            style={{ width: "35px", height: "35px" }}
          />
        )}
      </div>
    </a>
  )
}

export { OffersListItem }