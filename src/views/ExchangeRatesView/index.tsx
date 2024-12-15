import styles from './exchange-rates-view.module.scss'
import { FC } from 'react'

import { ExchangeOffers } from '@components'

interface ExchangeRatesViewProps {}

const ExchangeRatesView: FC<ExchangeRatesViewProps> = () => {
  return (
    <>
      <div className={styles['exchange-rates-view']}>
        <section>
          <div className='container'>
            <ExchangeOffers />
          </div>
        </section>
      </div>
    </>
  )
}

export { ExchangeRatesView }