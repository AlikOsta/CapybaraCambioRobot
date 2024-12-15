import styles from './offers-list.module.scss'
import { FC } from 'react'

import { OffersListItem } from './OffersListItem'
import { NoOffers } from './NoOffers'

interface OffersListProps {
  offers: any[]
  giveCurrency: string
  getCurrency: string
}

const OffersList: FC<OffersListProps> = ({
  offers,
  giveCurrency,
  getCurrency,
}) => {
  return (
    <>
      <div className={styles['offers-list']}>
        {
          offers.length < 1
          ? <NoOffers />
          : <>
            {offers.map((offer, index) => {
              let rateText

              if (offer.Price < 0) {
                rateText = `100 ${giveCurrency} = ${
                  offer.Price * 100
                } ${getCurrency}`
              } else if (giveCurrency === 'ARS') {
                rateText = `${offer.Price} ${giveCurrency} = 1 ${getCurrency}`
              } else if ((giveCurrency === 'RUB') && (getCurrency !== 'ARS')) {
                rateText = `${offer.Price} ${giveCurrency} = 1 ${getCurrency}`
              } else {
                rateText = `1 ${giveCurrency} = ${offer.Price} ${getCurrency}`
              }

              return (
                <OffersListItem
                  key={index}
                  telegramURL={offer.TG_url}
                  logoURL={offer.Logo_url}
                  exchangerTitle={offer.Name}
                  verification={offer.Verification}
                  rateText={rateText}
                  delivery={offer.Delivery}
                />
              )
            })}
          </>
        }
      </div>
    </>
  )
}

export { OffersList }