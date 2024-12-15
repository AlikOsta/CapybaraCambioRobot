import styles from './offers-info.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ValueCard } from '@src/ui'
import DownArrowIcon from '@assets/icons/down-arrow-icon.svg?react'

interface OffersInfoProps {
  giveCurrency: string
  getCurrency: string
  city: string
  onClick: () => void
  hasOffers: boolean
}

const OffersInfo: FC<OffersInfoProps> = ({
  giveCurrency,
  getCurrency,
  city,
  onClick,
  hasOffers
}) => {
  const { t } = useTranslation()
  const tPath = 'components.exchange-offers.offers-info'

  return (
    <>
      <div className={styles['offers-info']}>
        <div className={styles['give-get-wrapper']}>
          <ValueCard
            id='give_currency'
            text={giveCurrency || ''}
            imgSrc={giveCurrency ? `./assets/images/${giveCurrency}.png` : undefined}
            onErrorImg='./assets/images/argentina.png'
          />
          <ValueCard
            id='get_currency'
            text={getCurrency || ''}
            imgSrc={getCurrency ? `./assets/images/${getCurrency}.png` : undefined}
            onErrorImg='./assets/images/argentina.png'
          />
          <button
            className={styles['back-to-pair-selection-btn']}
            onClick={onClick}
          >
            <DownArrowIcon />
          </button>
        </div>
        {hasOffers && (
          <div className={styles['exchanger-legend']}>
            <p className={styles['p']}>{ t(`${tPath}.title`, { give: giveCurrency, get: getCurrency, city: city }) }:</p>
            <div className={styles['legend-wrapper']}>
              <p className={styles['p']}>
                <img 
                  src='./assets/images/verified.png'
                  alt='verified exchanger'
                  style={{ width: '35px', height: '35px' }}
                />&nbsp;
                { t(`${tPath}.verified-exchanger`) }
              </p>
              <p className={styles['p']}>
                <img 
                  src='./assets/images/delivery.png'
                  alt='home delivery'
                  style={{ width: '35px', height: '35px' }}
                />&nbsp;
                { t(`${tPath}.delivery`) }
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export { OffersInfo }