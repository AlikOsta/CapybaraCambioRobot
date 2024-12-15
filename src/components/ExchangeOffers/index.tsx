import styles from './exchange-offers.module.scss'
import { FC, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { ExchangeAppContext } from '@providers/context'

import { OffersInfo } from './OffersInfo'
import { OffersList } from './OffersList'

interface ExchangeOffersProps {}

const ExchangeOffers: FC<ExchangeOffersProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.exchange-offers'
  const navigate = useNavigate()
  const [ offers, setOffers ] = useState<any[]>([])
  const [ loading, setLoading ] = useState<boolean>(true)
  const {
    giveCurrency,
    getCurrency,
    city,
    setGiveCurrency,
    setGetCurrency,
    setCity,
    findExchangeRate,
  } = useContext(ExchangeAppContext)!

  const handleBackToPairSelection = () => {
    navigate('/')
    setCity(null)
    setGetCurrency(null)
    setGiveCurrency(null)
  }

  useEffect(() => {
    if (giveCurrency && getCurrency && city) {
      setLoading(true)

      findExchangeRate(giveCurrency, getCurrency, city)
        .then((results) => {
          const ascendingPairs = new Set([
            "RUB_USDT",
            "RUB_USD",
            "ARS_USDT",
            "ARS_USD",
            "ARS_RUB",
          ])

          const currencyPair = `${giveCurrency}_${getCurrency}`

          if (ascendingPairs.has(currencyPair)) {
            results.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price))
          } else {
            results.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price))
          }

          setOffers(results);
        })
        .catch((err) => console.error("Ошибка поиска:", err))
        .finally(() => setLoading(false))
    }
  }, [giveCurrency, getCurrency, city, findExchangeRate])

  if (loading) return <p>{ t(`${tPath}.loading`) }</p>

  return (
    <>
      <div className={styles['exchange-offers']}>
        <OffersInfo
          giveCurrency={giveCurrency}
          getCurrency={getCurrency}
          city={city}
          onClick={handleBackToPairSelection}
          hasOffers={offers.length > 0}
        />
        <OffersList
          offers={offers}
          giveCurrency={giveCurrency}
          getCurrency={getCurrency}
        />
      </div>
    </>
  )
}

export { ExchangeOffers }