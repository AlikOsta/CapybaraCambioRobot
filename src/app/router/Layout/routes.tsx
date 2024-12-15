import { RouteItem } from '@models'
import { ExchangePairSelectionView, ExchangeRatesView } from '@views'

const routes: RouteItem[] = [
  {
    index: true,
    path: '/',
    element: <ExchangePairSelectionView />,
    text: {
      en: 'Currency pair selection',
      es: 'Selección de par de monedas',
      ru: 'Выбор валютной пары',
    },
  },
  {
    index: false,
    path: '/rates',
    element: <ExchangeRatesView />,
    text: {
      en: 'Exchange rates',
      es: 'Tipos de cambio',
      ru: 'Обменные курсы',
    },
  },
]

export { routes }