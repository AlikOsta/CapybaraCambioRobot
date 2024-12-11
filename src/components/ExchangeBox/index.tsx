import styles from './exchange-box.module.scss'
import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExchangeAppContext } from '@providers/context'

import { Modal, ValueCard, ValuesList } from '@ui'

interface ExchangeBoxProps {}

const ExchangeBox: FC<ExchangeBoxProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.exchange-box'
  const {
    giveCurrency,
    getCurrency,
    city,
    setGiveCurrency,
    setGetCurrency,
    setCity,
    arrCurrency,
    arrCity,
  } = useContext(ExchangeAppContext)!

  const [ valuesList, setValuesList] = useState<any[]>([])
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)
  const [ modalType, setModalType ] = useState<'' | 'give' | 'get' | 'city'>('')

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalType('')
  }

  const handleCurrencyClick = (type: '' | 'give' | 'get' | 'city') => {
    setModalType(type);

    switch (type) {
      case 'give':
        setValuesList(arrCurrency)
        break;
      case 'get':
        setValuesList(arrCurrency.filter((currency) => currency !== giveCurrency))
        break
      case 'city':
        setValuesList(arrCity)
        break
    }

    setIsModalOpen(true)
  }

  const handleSelectValue = (value: any) => {
    switch (modalType) {
      case 'give':
        setGiveCurrency(value)
        break
      case 'get':
        setGetCurrency(value)
        break
      case 'city':
        setCity(value)
        break
    }

    handleCloseModal()
  }

  return (
    <div className={styles['exchange-box']}>
      <div className={styles['give']}>
        <h2>{ t(`${tPath}.give-label`) }:</h2>
        <ValueCard
          id="select_give"
          text={giveCurrency || t(`${tPath}.select-currency-text`)}
          imgSrc={giveCurrency ? `./assets/images/${giveCurrency}.png` : undefined}
          onClick={() => handleCurrencyClick('give')}
          onErrorImg="./assets/images/argentina.png"
        />
      </div>

      <div className={styles['get']}>
        <h2>{ t(`${tPath}.get-label`) }:</h2>
        <ValueCard
          id="select_get"
          text={getCurrency || t(`${tPath}.select-currency-text`)}
          imgSrc={getCurrency ? `./assets/images/${getCurrency}.png` : undefined}
          onClick={() => handleCurrencyClick('get')}
          onErrorImg="./assets/images/argentina.png"
          disabled={!giveCurrency}
        />
      </div>

      <div className={styles['city']}>
        <h2>{ t(`${tPath}.city-label`) }:</h2>
        <ValueCard
          id="select_city"
          text={city || t(`${tPath}.select-city-text`)}
          imgSrc={city ? `./assets/images/${city}.png` : undefined}
          onClick={() => handleCurrencyClick('city')}
          onErrorImg="./assets/images/argentina.png"
          disabled={!getCurrency}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle={t(modalType === 'city'
          ? `${tPath}.select-city-text` 
          : `${tPath}.select-currency-text`)}
      >
        <ValuesList 
          list={valuesList}
          onSelect={handleSelectValue}
        />
      </Modal>
    </div>
  )
}

export { ExchangeBox }