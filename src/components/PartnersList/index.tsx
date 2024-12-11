import styles from './partners-list.module.scss'
import { FC } from 'react'

interface PartnersListProps {}

const PartnersList: FC<PartnersListProps> = () => {
  return (
    <>
      <div className={styles['partners-list']}>PartnersList</div>
    </>
  )
}

export { PartnersList }