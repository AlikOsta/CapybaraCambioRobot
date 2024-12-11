import styles from './home-view.module.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ExchangeBox, OfferList, PartnersList } from '@components'

const HomeView = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  return (
    <>
      <div className={styles['home-view']}>
        <header></header>
        <section>
          <div className='container'>
            <ExchangeBox />
          </div>
        </section>
        <section>
          <div className='container'>
            <OfferList />
          </div>
        </section>
        <section>
          <PartnersList />
        </section>
      </div>
    </>
  )
}

export { HomeView }