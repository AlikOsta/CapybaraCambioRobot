import styles from './no-offers.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NoOffersProps {}

const NoOffers: FC<NoOffersProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.exchange-offers.offers-list.no-offers'
  
  return (
    <>
      <div className={styles['no-offers']}>
        <h3>{ t(`${tPath}.title`) }</h3>
        <div className={styles['no-offers-info']}>
          <img src='./assets/images/capybara.png' alt='Capybara' />
          <p>{ t(`${tPath}.contact-me-text`) }</p>
          <a href='https://t.me/A43721'>
            <button className={styles['contact-me-btn']}>
              <span className="text_centr">{ t(`${tPath}.contact-me-btn-text`) }</span>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export { NoOffers }