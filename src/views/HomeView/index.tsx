import styles from './home-view.module.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const HomeView = () => {
  const { i18n, t } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])
  return (
    <>
      <div className={styles['home-view']}>
        { t('views.home-view.title') }
      </div>
    </>
  )
}

export { HomeView }