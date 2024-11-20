import { RouteItem } from "@models"
import { HomeView } from "@views"

const routes: RouteItem[] = [
  {
    index: true,
    path: '/',
    element: <HomeView />,
    text: {
      en: 'Home',
      es: 'Inicio',
      ru: 'Главная',
    },
  },
]

export { routes }