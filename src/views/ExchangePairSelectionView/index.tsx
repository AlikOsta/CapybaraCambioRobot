import styles from './exchange-pair-selection-view.module.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ExchangeBox } from '@components'

const ExchangePairSelectionView = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  return (
    <>
      <div className={styles['exchange-pair-selection-view']}>
        <header></header>
        <section>
          <div className='container'>
            <ExchangeBox />
          </div>
        </section>
      </div>
    </>
  )
}

export { ExchangePairSelectionView }