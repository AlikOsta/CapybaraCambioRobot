import { createContext, useState, useEffect, FC, ReactNode } from 'react'
import { fetchUniqueCities } from '@services'

interface ExchangeAppContextProps {
  giveCurrency: any
  getCurrency: any
  city: any
  setGiveCurrency: (currency: any) => void
  setGetCurrency: (currency: any) => void
  setCity: (city: any) => void
  arrCurrency: any[]
  arrCity: any[]
  findExchangeRate: (
    currencyFrom: any,
    currencyTo: any,
    city: any,
  ) => Promise<any[]>
}

const ExchangeAppContext = createContext<ExchangeAppContextProps | undefined>(undefined)

const ExchangeAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [giveCurrency, setGiveCurrency] = useState<any>(null)
  const [getCurrency, setGetCurrency] = useState<any>(null)
  const [city, setCity] = useState<any>(null)
  const [arrCurrency, setArrCurrency] = useState<any[]>([])
  const [arrCity, setArrCity] = useState<any[]>([])

  const fetchExchangeData = async (): Promise<any[][]> => {
    const SPREADSHEET_ID = import.meta.env.VITE_REACT_APP_SPREADSHEET_ID
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY
    const RANGE = 'Main'

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
    const data = await response.json()
    return data.values
  }

  const fetchUniqueCurrencies = async (): Promise<void> => {
    try {
      const data = await fetchExchangeData()
      const headers = data[0]
      const currencies = new Set<any>()

      headers.forEach((header: any) => {
        if (header.includes('_')) {
          const [from, to] = header.split('_')
          currencies.add(from)
          currencies.add(to)
        }
      })

      setArrCurrency(Array.from(currencies))
    } catch (error) {
      console.error('Ошибка при получении уникальных валют:', error)
    }
  }

  useEffect(() => {
    fetchUniqueCities(fetchExchangeData).then((cities) => setArrCity(cities))
    fetchUniqueCurrencies()
  }, [])

  const findExchangeRate = async (
    currencyFrom: any,
    currencyTo: any,
    city: any,
  ): Promise<any[]> => {
    try {
      const data = await fetchExchangeData()
      const headers = data[0]
      const results: any[] = []
      const res_currency = `${currencyFrom}_${currencyTo}`
      const currencyIndex = headers.indexOf(res_currency)

      if (currencyIndex === -1) {
        console.error('Валюта не найдена в заголовках')
        return []
      }

      for (let i = 1; i < data.length; i++) {
        const row = data[i]
        const rowData = headers.reduce((acc: any, header: any, index: number) => {
          acc[header] = row[index]
          return acc
        }, {})

        if (rowData.Status === 'on' && rowData.City === city) {
          let exchangeRate = rowData[res_currency]
          if (exchangeRate) {
            exchangeRate = parseFloat(exchangeRate.replace(',', '.'))
            results.push({
              Name: rowData.Name,
              Price: exchangeRate,
              Delivery: rowData.Delivery,
              TG_url: rowData.TGurl,
              Logo_url: rowData.Logourl,
              Premium: rowData.Premium === 'true',
              Verification: rowData.Verification === 'true',
            })
          }
        }
      }
      return results
    } catch (error) {
      console.error('Ошибка при поиске курса обмена:', error)
      return []
    }
  }

  return (
    <ExchangeAppContext.Provider
      value={{
        giveCurrency,
        getCurrency,
        city,
        setGiveCurrency,
        setGetCurrency,
        setCity,
        arrCurrency,
        arrCity,
        findExchangeRate
      }}
    >
      {children}
    </ExchangeAppContext.Provider>
  )
}

export { ExchangeAppContext, ExchangeAppProvider }