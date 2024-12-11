import styles from './offer-list.module.scss'
import { FC } from 'react'

interface OfferListProps {}

const OfferList: FC<OfferListProps> = () => {
  return (
    <>
      <div className={styles['offer-list']}>OfferList</div>
    </>
  )
}

export { OfferList }